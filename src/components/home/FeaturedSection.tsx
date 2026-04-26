/**
 * @file src/components/home/FeaturedSection.tsx
 * Menu cards stagger in on scroll. Image zoom + card lift on hover.
 * willChange removed from static styles — Framer Motion sets it only during animation.
 * whileHover gated by enableHover so touch devices don't register stale hover states.
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { MENU_ITEMS } from "@/lib/menu-data";
import { FadeUp, Stagger, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export function FeaturedSection() {
  const { t, lang } = useI18n();
  const { enableHover } = useMotionConfig();
  const items = MENU_ITEMS.filter((i) => i.homepage).slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      {/* Header row */}
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {t("featured.subtitle")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl">{t("featured.title")}</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Link
            to="/menu"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent group"
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

      {/* Cards grid with stagger */}
      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((item) => (
          <motion.article
            key={item.id}
            variants={cardVariants}
            className="card-pillow overflow-hidden group cursor-default"
            whileHover={enableHover ? { y: -5, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.name[lang]}
                loading="lazy"
                width={900}
                height={720}
                className="h-full w-full object-cover"
                whileHover={enableHover ? { scale: 1.06 } : undefined}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              {item.popular && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground"
                >
                  <Flame className="size-3" />
                  {t("menu.popular")}
                </motion.span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl">{item.name[lang]}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                {item.description[lang]}
              </p>
              {item.bestWarm && (
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-caramel-deep">
                  <Flame className="size-3.5" />
                  {t("featured.bestWarm")}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </Stagger>

      <div className="mt-10 flex sm:hidden">
        <motion.div whileTap={{ scale: 0.97 }} className="w-full">
          <Link
            to="/menu"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
          >
            {t("cta.viewMenu")}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
