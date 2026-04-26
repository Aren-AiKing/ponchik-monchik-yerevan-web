/**
 * @file src/components/motion/index.tsx
 *
 * Reusable Framer Motion wrappers — warm, cozy, minimal.
 *
 * Fixes vs previous version:
 * - Removed `willChange` from variant objects (it's not a valid FM property)
 * - All wrappers now respect prefers-reduced-motion via useMotionConfig
 * - Mobile: smaller y/x offsets, faster durations, no slide-ins
 * - viewport.once: true on all whileInView to prevent re-trigger
 * - viewport margin adjusted to fire slightly earlier on small screens
 */
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { memo, type ReactNode } from "react";
import { useMotionConfig } from "@/hooks/useMotionConfig";

/* ─── Shared easing ─────────────────────────────────────────── */
export const EASE_WARM = [0.25, 0.1, 0.25, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/* ─── Static (desktop) variant definitions ──────────────────── */
// These are used only when building dynamic variants in each wrapper.
// Do NOT add `willChange` here — set it on the element's `style` prop instead.

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/* ─── Shared props ──────────────────────────────────────────── */
interface WrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const VIEWPORT = { once: true, margin: "-60px 0px" };

/* ─── FadeUp ────────────────────────────────────────────────── */
export const FadeUp = memo(function FadeUp({
  children,
  delay = 0,
  className,
  ...rest
}: WrapperProps) {
  const { fadeY, durationScale, isReduced } = useMotionConfig();

  const variants: Variants = {
    hidden: { opacity: 0, y: isReduced ? 0 : fadeY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65 * durationScale,
        ease: EASE_OUT_EXPO,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

/* ─── FadeIn (opacity only, no movement) ────────────────────── */
export const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  className,
  ...rest
}: WrapperProps) {
  const { durationScale } = useMotionConfig();

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 * durationScale, ease: EASE_WARM, delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

/* ─── ScaleIn ───────────────────────────────────────────────── */
export const ScaleIn = memo(function ScaleIn({
  children,
  delay = 0,
  className,
  ...rest
}: WrapperProps) {
  const { durationScale, isReduced } = useMotionConfig();

  const variants: Variants = {
    hidden: { opacity: 0, scale: isReduced ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 * durationScale, ease: EASE_OUT_EXPO, delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

/* ─── Stagger container ─────────────────────────────────────── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Stagger = memo(function Stagger({
  children,
  className,
  delay = 0,
}: StaggerProps) {
  const { staggerDelay } = useMotionConfig();

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
});

/* ─── SlideLeft ─────────────────────────────────────────────── */
export const SlideLeft = memo(function SlideLeft({
  children,
  delay = 0,
  className,
  ...rest
}: WrapperProps) {
  const { slideX, durationScale, isReduced, isMobile } = useMotionConfig();

  // On mobile, collapse horizontal slide to a simple fade-up (avoids overflow)
  const variants: Variants = isMobile || isReduced
    ? {
        hidden: { opacity: 0, y: isReduced ? 0 : 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 * durationScale, ease: EASE_OUT_EXPO, delay } },
      }
    : {
        hidden: { opacity: 0, x: -slideX },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 * durationScale, ease: EASE_OUT_EXPO, delay } },
      };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

/* ─── SlideRight ────────────────────────────────────────────── */
export const SlideRight = memo(function SlideRight({
  children,
  delay = 0,
  className,
  ...rest
}: WrapperProps) {
  const { slideX, durationScale, isReduced, isMobile } = useMotionConfig();

  const variants: Variants = isMobile || isReduced
    ? {
        hidden: { opacity: 0, y: isReduced ? 0 : 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 * durationScale, ease: EASE_OUT_EXPO, delay } },
      }
    : {
        hidden: { opacity: 0, x: slideX },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 * durationScale, ease: EASE_OUT_EXPO, delay } },
      };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
