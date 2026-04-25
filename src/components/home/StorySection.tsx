import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import interior from "@/assets/interior.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export function StorySection() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1 relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-pillow">
            <img
              src={interior}
              alt="Cozy café interior"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden md:block rounded-2xl bg-accent text-accent-foreground px-5 py-4 shadow-warm">
            <p className="font-display text-2xl leading-none">♥</p>
            <p className="text-xs mt-1">Yerevan</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {t("story.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{t("story.title")}</h2>
          <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
            {t("story.text")}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary"
          >
            {t("story.cta")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
