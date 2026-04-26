/**
 * @file src/components/home/WhySection.tsx
 * Why cards: stagger + icon bounce on hover (desktop) or tap (mobile).
 */
import { Sparkles, Sofa, HandHeart, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { FadeUp, Stagger, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export function WhySection() {
  const { t } = useI18n();
  const { enableHover } = useMotionConfig();
  const items = [
    { icon: Sparkles, title: t("why.fresh.title"), text: t("why.fresh.text") },
    { icon: Sofa, title: t("why.cozy.title"), text: t("why.cozy.text") },
    { icon: HandHeart, title: t("why.friendly.title"), text: t("why.friendly.text") },
    { icon: MapPin, title: t("why.central.title"), text: t("why.central.text") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      <FadeUp className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <h2 className="font-display text-3xl md:text-4xl">{t("why.title")}</h2>
      </FadeUp>
      <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={enableHover ? { y: -5, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
            whileTap={{ scale: 0.97 }}
            className="card-pillow p-5 md:p-6 text-center cursor-default"
          >
            <motion.span
              whileHover={enableHover ? { scale: 1.15, rotate: 5 } : undefined}
              whileTap={!enableHover ? { scale: 1.12 } : undefined}
              transition={{ duration: 0.3 }}
              className="inline-flex size-12 items-center justify-center rounded-2xl bg-strawberry-soft text-accent mb-4"
            >
              <item.icon className="size-5" />
            </motion.span>
            <h3 className="font-display text-lg">{item.title}</h3>
            <p className="mt-1.5 text-xs md:text-sm text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
