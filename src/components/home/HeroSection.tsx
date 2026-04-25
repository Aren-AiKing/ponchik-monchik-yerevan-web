import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ponchiks.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full bg-strawberry-soft blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 size-[480px] rounded-full opacity-40 blur-3xl"
           style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 md:px-6 md:pt-16 md:pb-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6 md:space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles className="size-3.5 text-accent" />
            {t("hero.eyebrow")}
          </span>

          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]">
            {t("hero.title")}
          </h1>

          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.02]"
            >
              {t("cta.viewMenu")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={CAFE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
            >
              <Phone className="size-4 text-accent" />
              {t("cta.callNow")}
            </a>
            <a
              href={CAFE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              <MapPin className="size-4 text-caramel-deep" />
              {t("cta.directions")}
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-foreground/70">
            <span className="inline-block size-2 animate-pulse rounded-full bg-accent" />
            {t("hero.urgency")}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-pillow md:rounded-[2.5rem]">
            <img
              src={heroImage}
              alt="Fresh golden ponchiks with cappuccino"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-chocolate/15 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-card/95 px-4 py-3 shadow-warm backdrop-blur md:-bottom-6 md:left-6">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              {t("featured.bestWarm")}
            </p>
            <p className="font-display text-lg leading-tight">
              {t("header.openUntil")}
            </p>
          </div>

          {/* Floating dot pattern */}
          <div className="absolute -top-6 -right-6 size-24 rounded-full border-2 border-dashed border-caramel/40 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
