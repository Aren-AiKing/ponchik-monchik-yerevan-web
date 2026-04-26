import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Ponchik Monchik · Hours, takeaway, vegetarian options & more" },
      {
        name: "description",
        content:
          "Answers to common questions: dine-in, takeaway, busiest hours, vegetarian options, and more at Ponchik Monchik in Yerevan.",
      },
      { property: "og:title", content: "FAQ — Ponchik Monchik" },
      { property: "og:description", content: "Everything you might want to know about visiting our café." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const { t } = useI18n();
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 pt-10 md:px-6 md:pt-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl">{t("faq.page.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("faq.page.lead")}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="card-pillow overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl">{item.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
