import { Quote } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function ReviewsSection({ withSeeAll = true }: { withSeeAll?: boolean }) {
  const { t } = useI18n();
  const quotes = [
    { q: t("reviews.q1"), a: t("reviews.q1.attr") },
    { q: t("reviews.q2"), a: t("reviews.q2.attr") },
    { q: t("reviews.q3"), a: t("reviews.q3.attr") },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <h2 className="font-display text-3xl md:text-5xl">{t("reviews.title")}</h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {t("reviews.summary")}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {quotes.map((q, i) => (
          <figure key={i} className="card-pillow p-6 md:p-7 flex flex-col">
            <Quote className="size-7 text-accent mb-4" />
            <blockquote className="font-display text-lg md:text-xl leading-snug flex-1">
              {q.q}
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
              — {q.a}
            </figcaption>
          </figure>
        ))}
      </div>

      {withSeeAll && (
        <div className="mt-10 text-center">
          <p className="inline-block max-w-2xl rounded-2xl bg-secondary/60 px-5 py-4 text-sm text-foreground/80">
            {t("reviews.note")}
          </p>
        </div>
      )}
    </section>
  );
}
