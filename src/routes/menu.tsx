import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Flame } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";
import { MENU_ITEMS, CATEGORY_ORDER, type MenuCategory } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ponchik Monchik · Fresh ponchiks, coffee & café food in Yerevan" },
      {
        name: "description",
        content:
          "Browse our menu: sweet ponchiks, monchiks, pies, breakfast, coffee, desserts and savory dishes. Freshly prepared at Moskovyan 31, Yerevan.",
      },
      { property: "og:title", content: "Menu — Ponchik Monchik" },
      { property: "og:description", content: "Sweet ponchiks, monchiks, coffee and more — freshly made every day." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<MenuCategory>("ponchiks");
  const [query, setQuery] = useState("");

  const quickPicks = useMemo(() => MENU_ITEMS.filter((i) => i.popular).slice(0, 6), []);

  const items = useMemo(() => {
    const list = MENU_ITEMS.filter((i) => i.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (i) => i.name[lang].toLowerCase().includes(q) || i.description[lang].toLowerCase().includes(q),
    );
  }, [active, query, lang]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl">{t("menu.title")}</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("menu.subtitle")}</p>
        </div>
      </section>

      {/* Quick picks */}
      <section className="mx-auto max-w-7xl px-4 mt-12 md:px-6 md:mt-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
              {t("menu.quickPicks.sub")}
            </p>
            <h2 className="font-display text-2xl md:text-3xl">{t("menu.quickPicks")}</h2>
          </div>
        </div>
        <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-6">
            {quickPicks.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.category)}
                className="group shrink-0 w-44 md:w-auto text-left"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={item.image}
                    alt={item.name[lang]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 font-display text-base leading-tight">{item.name[lang]}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs + search */}
      <section className="mx-auto max-w-7xl px-4 mt-14 md:px-6 md:mt-20">
        <div className="sticky top-16 md:top-20 z-20 -mx-4 px-4 py-3 md:mx-0 md:px-0 bg-background/85 backdrop-blur-lg border-b border-border">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-flex gap-2">
                {CATEGORY_ORDER.map((cat) => {
                  const isActive = cat === active;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-card border border-border text-foreground/80 hover:bg-secondary"
                      }`}
                    >
                      {t(`menu.cat.${cat}`)}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="relative md:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("menu.search")}
                className="w-full rounded-full border border-border bg-card pl-9 pr-4 py-2.5 text-sm outline-none focus:border-caramel"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-10">{t("menu.empty")}</p>
          )}
          {items.map((item) => (
            <article key={item.id} className="card-pillow overflow-hidden group">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[lang]}
                  loading="lazy"
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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl">{item.name[lang]}</h3>
                  {/* Price slot — empty for now */}
                  <span className="font-display text-base text-caramel-deep/40">— —</span>
                </div>
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
      </section>
    </SiteShell>
  );
}
