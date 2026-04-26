/**
 * @file src/components/home/StorySection.tsx
 * Story section: image slides in from left, text from right on scroll.
 * willChange removed from static img style — FM manages it during animation only.
 * whileHover gated by enableHover for touch devices.
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import interior from "@/assets/interior.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { SlideLeft, SlideRight, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

export function StorySection() {
  const { t } = useI18n();
  const { enableHover } = useMotionConfig();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Image — slide in from left */}
        <SlideLeft className="order-2 lg:order-1 relative">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-pillow"
            whileHover={enableHover ? { scale: 1.015 } : undefined}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={interior}
              alt="Cozy café interior"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 hidden md:block rounded-2xl bg-accent text-accent-foreground px-5 py-4 shadow-warm"
          >
            <p className="font-display text-2xl leading-none">♥</p>
            <p className="text-xs mt-1">Yerevan</p>
          </motion.div>
        </SlideLeft>

        {/* Text — slide in from right */}
        <SlideRight delay={0.1} className="order-1 lg:order-2 space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {t("story.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            {t("story.title")}
          </h2>
          <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
            {t("story.text")}
          </p>
          <motion.div whileHover={enableHover ? { scale: 1.02 } : undefined} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              {t("story.cta")}
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </SlideRight>
      </div>
    </section>
  );
}
