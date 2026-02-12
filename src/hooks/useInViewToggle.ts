import { useEffect } from "react";

type Options = {
  selector?: string;
  className?: string;
  threshold?: number | number[];
  rootMargin?: string;
  /**
   * Minimum intersection ratio (0-1) required to consider the element "in view".
   * When below this value the `className` will be removed so re-entering the
   * viewport will re-trigger the animation.
   */
  minVisible?: number;
  /**
   * If true (default) and the browser supports CSS Scroll-Linked Animations
   * (`animation-timeline: view()`), we add a feature-class to enable the
   * scrubbed animation and *skip* the IntersectionObserver (no JS toggling).
   */
  useTimelineIfSupported?: boolean;
};

export default function useInViewToggle({
  selector = ".block",
  className = "in-view",
  // use a fine-grained threshold array so callbacks fire as visibility changes
  threshold = Array.from({ length: 101 }, (_, i) => i / 100),
  rootMargin = "0px",
  minVisible = 0.25,
  useTimelineIfSupported = true,
}: Options = {}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsTimeline =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("animation-timeline: view()");

    if (supportsTimeline) {
      document.documentElement.classList.add("supports-animation-timeline");

      if (useTimelineIfSupported) {
        // Timeline-based scrubbing handles forward/reverse on scroll — no observer needed.
        return;
      }
    }

    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // Track the last known state for each element to prevent unnecessary toggles
    const elementStates = new WeakMap<Element, boolean>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio ?? 0;
          const rect = entry.boundingClientRect;
          const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;

          // Consider element "out" if it's completely above or below the viewport
          const fullyOut = rect.bottom <= 0 || rect.top >= viewportHeight;

          // Add hysteresis: only remove if ratio drops below (minVisible - 0.15) or fully out
          const removalThreshold = Math.max(0, minVisible - 0.15);
          const hasClass = entry.target.classList.contains(className);
          const lastState = elementStates.get(entry.target);

          // Determine if element should be considered "in view"
          const shouldBeInView = ratio >= minVisible;
          const shouldBeOutOfView = fullyOut || ratio <= removalThreshold;

          if (shouldBeInView && !hasClass && lastState !== true) {
            // Add class when crossing threshold upward
            entry.target.classList.add(className);
            elementStates.set(entry.target, true);
          } else if (shouldBeOutOfView && hasClass && lastState !== false) {
            // Remove class only when fully out or well below threshold
            entry.target.classList.remove(className);
            elementStates.set(entry.target, false);
          }
        });
      },
      { threshold, rootMargin },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // stringify threshold to ensure array identity is compared
  }, [
    selector,
    className,
    JSON.stringify(threshold),
    rootMargin,
    minVisible,
    useTimelineIfSupported,
  ]);
}
