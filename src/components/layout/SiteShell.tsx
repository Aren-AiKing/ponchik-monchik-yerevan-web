/**
 * @file src/components/layout/SiteShell.tsx
 * Wraps every page with a fade+slide transition via AnimatePresence.
 * Page-entry y-offset is halved on mobile and zeroed on reduced-motion.
 */
import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileActionBar } from "./MobileActionBar";
import { EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { isReduced, isMobile } = useMotionConfig();

  // Reduced motion: no movement at all. Mobile: halve the y-offset to avoid jank.
  const entryY = isReduced ? 0 : isMobile ? 8 : 16;

  const pageVariants = {
    hidden: { opacity: 0, y: entryY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isReduced ? 0 : 0.45, ease: EASE_OUT_EXPO },
    },
    exit: {
      opacity: 0,
      y: isReduced ? 0 : -6,
      transition: { duration: isReduced ? 0 : 0.2, ease: [0.4, 0, 1, 1] },
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex-1 pb-20 lg:pb-0"
      >
        {children}
      </motion.main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
