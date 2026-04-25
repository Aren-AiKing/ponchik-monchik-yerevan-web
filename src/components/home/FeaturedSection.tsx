import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { MENU_ITEMS } from "@/lib/menu-data";

export function FeaturedSection() {
  const { t, lang } = useI18n();
  const items = MENU_ITEMS.filter((i) => i.homepage).slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {t("featured.subtitle")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl">{t("featured.title")}</h2>
        </div>
        <Link
          to="/menu"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent group"
        >
          {t("cta.seeAll")}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((item) => (
          <article key={item.id} className="card-pillow overflow-hidden group">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={item.image}
                alt={item.name[lang]}
                loading="lazy"
                width={900}
                height={720}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {item.popular && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                  <Flame className="size-3" />
                  {t("menu.popular")}
                </span>
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
          </article>
        ))}
      </div>

      <div className="mt-10 flex sm:hidden">
        <Link
          to="/menu"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
        >
          {t("cta.viewMenu")}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
