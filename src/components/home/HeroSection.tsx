/**
 * @file src/components/home/HeroSection.tsx
 *
 * Fixes vs previous version:
 * - imageVariants + blobVariants moved OUTSIDE component (no re-creation on render)
 * - GSAP ctx.revert() now uses clearProps:"all" so elements don't stay opacity:0
 * - GSAP animation skipped entirely when prefers-reduced-motion
 * - Blob animations disabled on mobile (blur-3xl is GPU-intensive)
 * - Permanent `willChange` removed from hero image (set only via FM while animating)
 * - `badgeRef` (unused) removed
 * - whileHover on image container disabled on mobile/touch
 */
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import heroImage from "@/assets/hero-ponchiks.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";
import { EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

/* ─── Static variants (defined outside component) ───────────── */
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.5 },
  },
};

const ringVariants: Variants = {
  hidden: { opacity: 0, scale: 0.72, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO, delay: 0.38 },
  },
};

export function HeroSection() {
  const { t } = useI18n();
  const textRef = useRef<HTMLDivElement>(null);
  const { isReduced, isMobile, durationScale, enableHeavy, enableHover } = useMotionConfig();

  /* GSAP staggered text reveal — skipped on reduced motion */
  useEffect(() => {
    if (isReduced || !textRef.current) return;

    const lines = textRef.current.querySelectorAll<HTMLElement>("[data-gsap]");
    // Make sure elements are visible before GSAP starts (prevents flash on cleanup)
    lines.forEach((el) => { el.style.opacity = ""; });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, y: isMobile ? 16 : 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65 * durationScale,
          ease: "power3.out",
          stagger: isMobile ? 0.07 : 0.1,
          delay: 0.1,
          // clearProps:"all" so elements are fully reset if ctx.revert() fires
          clearProps: "all",
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, [isReduced, isMobile, durationScale]);

  // Reduced-motion: skip all animation states, render immediately visible
  const imageMotionProps = isReduced
    ? {}
    : { variants: imageVariants, initial: "hidden", animate: "visible" };

  return (
    <section className="relative overflow-hidden">
      {/* Blobs — only rendered on desktop where GPU can handle blur-3xl */}
      {enableHeavy && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full bg-strawberry-soft blur-3xl"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
            className="pointer-events-none absolute -bottom-32 -right-20 size-[480px] rounded-full blur-3xl"
            style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
            aria-hidden
          />
        </>
      )}

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 md:px-6 md:pt-16 md:pb-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text block — GSAP handles reveal, so no Framer here */}
        <div ref={textRef} className="space-y-6 md:space-y-8">
          <span
            data-gsap
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
            style={{ opacity: isReduced ? 1 : 0 }}
          >
            <Sparkles className="size-3.5 text-accent" />
            {t("hero.eyebrow")}
          </span>

          <h1
            data-gsap
            className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
            style={{ opacity: isReduced ? 1 : 0 }}
          >
            {t("hero.title")}
          </h1>

          <p
            data-gsap
            className="max-w-xl text-base text-muted-foreground md:text-lg"
            style={{ opacity: isReduced ? 1 : 0 }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            data-gsap
            className="flex flex-wrap items-center gap-3"
            style={{ opacity: isReduced ? 1 : 0 }}
          >
            <motion.div
              whileHover={enableHover ? { scale: 1.03 } : undefined}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-warm"
              >
                {t("cta.viewMenu")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.a
              href={CAFE.phoneHref}
              whileHover={enableHover ? { scale: 1.02 } : undefined}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Phone className="size-4 text-accent" />
              {t("cta.callNow")}
            </motion.a>

            <a
              href={CAFE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <MapPin className="size-4 text-caramel-deep" />
              {t("cta.directions")}
            </a>
          </div>

          <p
            data-gsap
            className="flex items-center gap-2 text-sm text-foreground/70"
            style={{ opacity: isReduced ? 1 : 0 }}
          >
            <span className="inline-block size-2 animate-pulse rounded-full bg-accent" />
            {t("hero.urgency")}
          </p>
        </div>

        {/* Image block */}
        <motion.div {...imageMotionProps} className="relative">
          <motion.div
            className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-pillow md:rounded-[2.5rem]"
            whileHover={enableHover ? { scale: 1.012 } : undefined}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <img
              src={heroImage}
              alt="Fresh golden ponchiks with cappuccino"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-chocolate/15 via-transparent to-transparent" />
          </motion.div>

          {/* Floating badge */}
          {!isReduced && (
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-5 left-4 rounded-2xl bg-card/95 px-4 py-3 shadow-warm backdrop-blur md:-bottom-6 md:left-6"
            >
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {t("featured.bestWarm")}
              </p>
              <p className="font-display text-lg leading-tight">{t("header.openUntil")}</p>
            </motion.div>
          )}

          {/* Dashed ring — desktop only */}
          {enableHeavy && (
            <motion.div
              variants={ringVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-6 -right-6 size-24 rounded-full border-2 border-dashed border-caramel/40 hidden md:block"
              aria-hidden
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
