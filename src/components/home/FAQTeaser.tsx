import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function FAQTeaser() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <h2 className="font-display text-3xl md:text-5xl text-center">{t("faq.title")}</h2>

      <div className="mt-10 space-y-3">
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
                <span className="font-display text-lg">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted-foreground">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/faq"
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent group"
        >
          {t("cta.seeAll")}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
