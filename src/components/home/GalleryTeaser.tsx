import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ponchikTray from "@/assets/ponchik-tray.jpg";
import interior from "@/assets/interior.jpg";
import family from "@/assets/family.jpg";
import coffee from "@/assets/coffee.jpg";
import strawberry from "@/assets/ponchik-strawberry.jpg";
import meatPie from "@/assets/meat-pie.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export function GalleryTeaser() {
  const { t } = useI18n();
  const tiles = [
    { src: ponchikTray, alt: "Tray of ponchiks", className: "row-span-2 aspect-[4/5]" },
    { src: interior, alt: "Café interior", className: "aspect-[4/3]" },
    { src: coffee, alt: "Coffee", className: "aspect-square" },
    { src: family, alt: "Family enjoying café", className: "aspect-[4/3]" },
    { src: strawberry, alt: "Strawberry ponchik", className: "aspect-square" },
    { src: meatPie, alt: "Meat pies", className: "aspect-square hidden md:block" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
        <div>
          <h2 className="font-display text-3xl md:text-5xl">{t("gallery.title")}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t("gallery.subtitle")}</p>
        </div>
        <Link
          to="/gallery"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent group"
        >
          {t("cta.seeAll")}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-soft ${tile.className}`}
          >
            <img
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
