import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  /**
   * IntersectionObserver threshold — only used in the fallback path.
   * Default: 0.15
   */
  threshold?: number | number[];

  /**
   * IntersectionObserver rootMargin — only used in the fallback path.
   * Default: "0px"
   */
  rootMargin?: string;

  /**
   * CSS class toggled by the IntersectionObserver fallback.
   * The scroll-driven path never touches classes — CSS handles everything.
   * Default: "in-view"
   */
  visibleClass?: string;

  /**
   * CSS class representing the hidden/reset state for the IO fallback.
   * Default: "out-of-view"
   */
  hiddenClass?: string;
}

/**
 * Scroll animation hook with two-tier strategy:
 *
 * Tier 1 — CSS Scroll-Driven Animations (Chrome 115+, Edge 115+):
 *   The hook does nothing. Pure CSS `animation-timeline: view()` scrubs
 *   the animation directly against scroll position on the compositor thread.
 *   Freezes at current frame when scroll stops. No JS involved.
 *
 * Tier 2 — IntersectionObserver fallback (Firefox, Safari, older browsers):
 *   Toggles `in-view` / `out-of-view` classes so a CSS @keyframes animation
 *   replays each time the element enters the viewport.
 *
 * Both tiers are opted into via the `section-animate` CSS class on the element.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px",
  visibleClass = "in-view",
  hiddenClass = "out-of-view",
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if the browser supports scroll-driven animations.
    // If it does, CSS handles everything — bail out early.
    const supportsScrollDriven = CSS.supports("animation-timeline", "scroll()");
    if (supportsScrollDriven) return;

    // --- Fallback: IntersectionObserver ---
    // Mark as hidden initially so the entry animation has a starting state.
    el.classList.add(hiddenClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(hiddenClass);
          el.classList.add(visibleClass);
        } else {
          // Instant reset — no transition — so animation replays cleanly
          // on both scroll-down and scroll-up re-entry.
          el.classList.remove(visibleClass);
          el.classList.add(hiddenClass);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visibleClass, hiddenClass]);

  return ref;
}
