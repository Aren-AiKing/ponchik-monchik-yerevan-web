import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";
import ponchikTray from "@/assets/ponchik-tray.jpg";
import interior from "@/assets/interior.jpg";
import family from "@/assets/family.jpg";
import coffee from "@/assets/coffee.jpg";
import strawberry from "@/assets/ponchik-strawberry.jpg";
import chocolate from "@/assets/ponchik-chocolate.jpg";
import vanilla from "@/assets/ponchik-vanilla.jpg";
import monchik from "@/assets/monchik.jpg";
import meatPie from "@/assets/meat-pie.jpg";
import breakfast from "@/assets/breakfast.jpg";
import hero from "@/assets/hero-ponchiks.jpg";

const PHOTOS = [
  { src: ponchikTray, alt: "Tray of fresh ponchiks" },
  { src: interior, alt: "Cozy café interior" },
  { src: hero, alt: "Fresh ponchiks with coffee" },
  { src: strawberry, alt: "Strawberry ponchik" },
  { src: chocolate, alt: "Chocolate ponchik" },
  { src: vanilla, alt: "Vanilla ponchik" },
  { src: coffee, alt: "Cappuccino" },
  { src: monchik, alt: "Honey monchik" },
  { src: meatPie, alt: "Meat pies" },
  { src: breakfast, alt: "Breakfast plate" },
  { src: family, alt: "Family at the café" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ponchik Monchik · Photos of our café & ponchiks" },
      {
        name: "description",
        content: "Photos of our ponchiks, coffee, cozy interior and warm moments at Ponchik Monchik in Yerevan.",
      },
      { property: "og:title", content: "Gallery — Ponchik Monchik" },
      { property: "og:description", content: "A glimpse into our café, our ponchiks, and our guests." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % PHOTOS.length));
  const prev = () => setOpenIdx((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));

  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 pt-10 md:px-6 md:pt-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl">{t("gallery.page.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("gallery.page.lead")}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-12 md:px-6 md:mt-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIdx(i)}
              className="group mb-3 md:mb-4 block w-full overflow-hidden rounded-2xl shadow-soft break-inside-avoid"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </section>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-chocolate/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-6 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-6 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[openIdx].src}
              alt={PHOTOS[openIdx].alt}
              className="max-h-[80vh] w-auto rounded-2xl shadow-pillow"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {PHOTOS[openIdx].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </SiteShell>
  );
}
