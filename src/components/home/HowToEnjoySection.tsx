/**
 * @file src/components/home/HowToEnjoySection.tsx
 * Steps stagger in with icon pop on hover (desktop) or tap (mobile).
 */
import { Coffee, Heart, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { FadeUp, Stagger, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const stepVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export function HowToEnjoySection() {
  const { t } = useI18n();
  const { enableHover } = useMotionConfig();
  const steps = [
    { icon: Flame, title: t("howto.step1.title"), text: t("howto.step1.text") },
    { icon: Coffee, title: t("howto.step2.title"), text: t("howto.step2.text") },
    { icon: Heart, title: t("howto.step3.title"), text: t("howto.step3.text") },
  ];

  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <FadeUp className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {t("howto.subtitle")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl">{t("howto.title")}</h2>
        </FadeUp>

        <Stagger className="grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={i}
              variants={stepVariants}
              whileHover={enableHover ? { y: -5, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
              whileTap={{ scale: 0.98 }}
              className="relative list-none"
            >
              <div className="card-pillow h-full p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    whileHover={enableHover ? { scale: 1.12, rotate: -6 } : undefined}
                    whileTap={!enableHover ? { scale: 1.1 } : undefined}
                    transition={{ duration: 0.3 }}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground"
                  >
                    <s.icon className="size-5" />
                  </motion.span>
                  <span className="font-display text-2xl text-caramel-deep/70">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
