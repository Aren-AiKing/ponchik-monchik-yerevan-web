/**
 * @file src/components/home/GalleryTeaser.tsx
 * Gallery tiles: staggered reveal on scroll + smooth image zoom on hover.
 * willChange is NOT set statically — it's only used by Framer Motion during
 * the animation itself. Permanently applying it to 6 images wastes GPU memory.
 * Hover interactions are gated by enableHover so touch devices skip them.
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ponchikTray from "@/assets/ponchik-tray.jpg";
import interior from "@/assets/interior.jpg";
import family from "@/assets/family.jpg";
import coffee from "@/assets/coffee.jpg";
import strawberry from "@/assets/ponchik-strawberry.jpg";
import meatPie from "@/assets/meat-pie.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { FadeUp, Stagger, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const tileVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

export function GalleryTeaser() {
  const { t } = useI18n();
  const { enableHover } = useMotionConfig();

  const tiles = [
    { src: ponchikTray, alt: "Tray of ponchiks", className: "row-span-2 aspect-[4/5]" },
    { src: interior, alt: "Café interior", className: "aspect-[4/3]" },
    { src: coffee, alt: "Coffee", className: "aspect-square" },
    { src: family, alt: "Family enjoying café", className: "aspect-[4/3]" },
    { src: strawberry, alt: "Strawberry ponchik", className: "aspect-square" },
    { src: meatPie, alt: "Meat pies", className: "aspect-square hidden md:block" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
        <FadeUp>
          <h2 className="font-display text-3xl md:text-5xl">{t("gallery.title")}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t("gallery.subtitle")}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Link
            to="/gallery"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent group"
          >
            {t("cta.seeAll")}
            <motion.span
              className="inline-block"
              whileHover={enableHover ? { x: 3 } : undefined}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="size-4" />
            </motion.span>
          </Link>
        </FadeUp>
      </div>

      {/* Staggered grid */}
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            variants={tileVariants}
            className={`group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-soft ${tile.className}`}
          >
            {/* Image zoom — only on hover-capable devices. No static willChange. */}
            <motion.img
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={enableHover ? { scale: 1.08 } : undefined}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Warm overlay on hover */}
            {enableHover && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-chocolate/25 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              />
            )}
          </motion.div>
        ))}
      </Stagger>

      {/* Mobile CTA */}
      <div className="mt-8 flex sm:hidden">
        <motion.div whileTap={{ scale: 0.97 }} className="w-full">
          <Link
            to="/gallery"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-base font-medium text-foreground"
          >
            {t("cta.seeAll")}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
