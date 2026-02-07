"use client";

/**
 * @author: @dorianbaffier
 * @description: Smooth Drawer
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { Mail, Linkedin, Facebook, Github, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface PriceTagProps {
  price: number;
  discountedPrice: number;
}

function PriceTag({ price, discountedPrice }: PriceTagProps) {
  return (
    <div className="mx-auto flex max-w-fit items-center justify-around gap-4">
      <div className="flex items-baseline gap-2">
        <span className="bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text font-bold text-4xl text-transparent dark:from-white dark:to-zinc-300">
          ${discountedPrice}
        </span>
        <span className="text-lg text-zinc-400 line-through dark:text-zinc-500">
          ${price}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
          Lifetime access
        </span>
        <span className="text-xs text-zinc-700 dark:text-zinc-300">
          One-time payment
        </span>
      </div>
    </div>
  );
}

interface DrawerDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  price?: number;
  discountedPrice?: number;
  // Controlled drawer props (optional)
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // Whether to render the internal trigger button. Set to false when you open programmatically.
  showTrigger?: boolean;
  // Contact details to display
  contactEmail?: string;
  contactLinkedin?: string;
  contactFacebook?: string;
  contactGithub?: string;
  contactLocation?: string;
}

const drawerVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function SmoothDrawer({
  title = "Contact",
  description = "Reach out via any of the channels below.",
  primaryButtonText = "Send Email",
  secondaryButtonText = "Close",
  onSecondaryAction,
  price = 169,
  discountedPrice = 99,
  open,
  onOpenChange,
  showTrigger = true,
  contactEmail,
  contactLinkedin,
  contactFacebook,
  contactGithub,
  contactLocation,
}: DrawerDemoProps) {
  const handleSecondaryClick = () => {
    onSecondaryAction?.();
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {showTrigger && (
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
      )}
      <DrawerContent className="mx-auto max-w-fit rounded-2xl p-6 shadow-xl">
        <motion.div
          animate="visible"
          className="mx-auto w-full max-w-[340px] space-y-6"
          initial="hidden"
          variants={drawerVariants as any}
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="space-y-2.5 px-0">
              <DrawerTitle className="font-semibold text-start text-2xl tracking-tighter">
                <motion.span variants={itemVariants as any}>
                  {title}
                </motion.span>
              </DrawerTitle>
              <motion.div variants={itemVariants as any}>
                <DrawerDescription className="text-sm text-gray-200 leading-relaxed tracking-tighter dark:text-zinc-400">
                  {description}
                </DrawerDescription>
              </motion.div>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants as any}>
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-theme-600" />
                {contactEmail ? (
                  <Link
                    href={contactEmail}
                    target="_blank"
                    className="text-sm font-medium text-gray-200"
                  >
                    {contactEmail.replace(/^mailto:/, "")}
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Email not provided
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-theme-600" />
                {contactLinkedin ? (
                  <Link
                    href={contactLinkedin}
                    target="_blank"
                    className="text-sm font-medium text-gray-200"
                  >
                    LinkedIn
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    LinkedIn not provided
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Facebook className="h-4 w-4 text-theme-600" />
                {contactFacebook ? (
                  <Link
                    href={contactFacebook}
                    target="_blank"
                    className="text-sm font-medium text-gray-200"
                  >
                    Facebook
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Facebook not provided
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-theme-600" />
                {contactGithub ? (
                  <Link
                    href={contactGithub}
                    target="_blank"
                    className="text-sm font-medium text-gray-200"
                  >
                    GitHub
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    GitHub not provided
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-theme-600" />
                {contactLocation ? (
                  <span className="text-sm font-medium text-gray-200">
                    {contactLocation}
                  </span>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Location not provided
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants as any}>
            <DrawerFooter className="flex flex-col gap-3 px-0">
              <DrawerClose asChild>
                <Button
                  className="h-11 w-full rounded-xl font-semibold text-sm tracking-tighter transition-all bg-linear-to-br from-red-950 via-red-800 to-red-700 text-white hover:scale-[1.01] shadow-md"
                  onClick={handleSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
