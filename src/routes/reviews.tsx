import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Ponchik Monchik · Loved by our guests in Yerevan" },
      {
        name: "description",
        content:
          "What our guests say about Ponchik Monchik: fresh ponchiks, warm atmosphere, friendly staff and great coffee in Yerevan.",
      },
      { property: "og:title", content: "Reviews — Ponchik Monchik" },
      { property: "og:description", content: "Real impressions from real people who love our café." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const { t } = useI18n();
  const quotes = [
    { q: t("reviews.q1"), a: t("reviews.q1.attr") },
    { q: t("reviews.q2"), a: t("reviews.q2.attr") },
    { q: t("reviews.q3"), a: t("reviews.q3.attr") },
    { q: t("reviews.q1"), a: t("reviews.q1.attr") },
    { q: t("reviews.q2"), a: t("reviews.q2.attr") },
    { q: t("reviews.q3"), a: t("reviews.q3.attr") },
  ];
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 pt-10 md:px-6 md:pt-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl">{t("reviews.page.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("reviews.page.lead")}</p>
        <p className="mt-6 inline-block max-w-2xl rounded-2xl bg-secondary/60 px-5 py-4 text-sm text-foreground/85">
          {t("reviews.summary")}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="card-pillow p-6 md:p-7 flex flex-col">
              <Quote className="size-7 text-accent mb-4" />
              <blockquote className="font-display text-lg md:text-xl leading-snug flex-1">{q.q}</blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                — {q.a}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center max-w-2xl mx-auto rounded-2xl bg-strawberry-soft px-5 py-4 text-sm text-foreground/80">
          {t("reviews.note")}
        </p>
      </section>
    </SiteShell>
  );
}
