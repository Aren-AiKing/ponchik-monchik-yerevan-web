/**
 * @file src/hooks/useMotionConfig.ts
 *
 * Central motion configuration hook.
 * Reads prefers-reduced-motion + screen width and returns
 * adjusted durations, offsets, and feature flags.
 *
 * Use this in every animated component so all decisions
 * are made in ONE place, not scattered across files.
 */
import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { useIsMobile } from "./use-mobile";

export interface MotionConfig {
  /** True when the user has requested reduced motion */
  isReduced: boolean;
  /** True when viewport is < 768px */
  isMobile: boolean;
  /**
   * Multiplier for animation durations.
   * 0 = instant (reduced motion), 0.6 = mobile, 1.0 = desktop
   */
  durationScale: number;
  /** Y-offset for fade-up reveals (px). Smaller on mobile. */
  fadeY: number;
  /** X-offset for slide-in reveals (px). Smaller on mobile. */
  slideX: number;
  /** Stagger delay between children (s). Tighter on mobile. */
  staggerDelay: number;
  /** Whether to run heavy effects (blobs, infinite loops, parallax) */
  enableHeavy: boolean;
  /** Whether hover-only effects should activate (false on touch) */
  enableHover: boolean;
}

export function useMotionConfig(): MotionConfig {
  const isReduced = useReducedMotion() ?? false;
  const isMobile = useIsMobile();

  return useMemo<MotionConfig>(() => {
    if (isReduced) {
      return {
        isReduced: true,
        isMobile,
        durationScale: 0,
        fadeY: 0,
        slideX: 0,
        staggerDelay: 0,
        enableHeavy: false,
        enableHover: false,
      };
    }

    if (isMobile) {
      return {
        isReduced: false,
        isMobile: true,
        durationScale: 0.65,
        fadeY: 14,
        slideX: 16,
        staggerDelay: 0.07,
        enableHeavy: false,
        // Hover doesn't exist on touch — use whileTap instead
        enableHover: false,
      };
    }

    return {
      isReduced: false,
      isMobile: false,
      durationScale: 1,
      fadeY: 26,
      slideX: 30,
      staggerDelay: 0.1,
      enableHeavy: true,
      enableHover: true,
    };
  }, [isReduced, isMobile]);
}
