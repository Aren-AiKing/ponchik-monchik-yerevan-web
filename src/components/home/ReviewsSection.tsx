/**
 * @file src/components/home/ReviewsSection.tsx
 * Review cards: staggered fade-up + subtle quote icon float.
 * Infinite float animations are disabled on mobile to save CPU/battery.
 */
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { FadeUp, Stagger, EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT_EXPO } },
};

export function ReviewsSection({ withSeeAll = true }: { withSeeAll?: boolean }) {
  const { t } = useI18n();
  const { enableHeavy, enableHover } = useMotionConfig();
  const quotes = [
    { q: t("reviews.q1"), a: t("reviews.q1.attr") },
    { q: t("reviews.q2"), a: t("reviews.q2.attr") },
    { q: t("reviews.q3"), a: t("reviews.q3.attr") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <FadeUp className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <h2 className="font-display text-3xl md:text-5xl">{t("reviews.title")}</h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("reviews.summary")}</p>
      </FadeUp>

      <Stagger className="grid gap-5 md:grid-cols-3 md:gap-6">
        {quotes.map((q, i) => (
          <motion.figure
            key={i}
            variants={cardVariants}
            whileHover={enableHover ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
            className="card-pillow p-6 md:p-7 flex flex-col cursor-default"
          >
            {/* Float animation only on desktop — infinite loops are expensive on mobile */}
            {enableHeavy ? (
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 + i * 0.7, ease: "easeInOut", delay: i * 0.4 }}
              >
                <Quote className="size-7 text-accent mb-4" />
              </motion.div>
            ) : (
              <Quote className="size-7 text-accent mb-4" />
            )}
            <blockquote className="font-display text-lg md:text-xl leading-snug flex-1">
              {q.q}
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
              — {q.a}
            </figcaption>
          </motion.figure>
        ))}
      </Stagger>

      {withSeeAll && (
        <FadeUp delay={0.2} className="mt-10 text-center">
          <p className="inline-block max-w-2xl rounded-2xl bg-secondary/60 px-5 py-4 text-sm text-foreground/80">
            {t("reviews.note")}
          </p>
        </FadeUp>
      )}
    </section>
  );
}
