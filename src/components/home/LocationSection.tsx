import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

export function LocationSection() {
  const { t } = useI18n();
  return (
    <section id="location" className="bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">{t("location.title")}</h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              {t("location.subtitle")}
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card border border-border text-caramel-deep">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
                  <p className="font-medium">{t("location.address")}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card border border-border text-accent">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <a href={CAFE.phoneHref} className="font-medium hover:text-accent">
                    {CAFE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card border border-border text-caramel">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                  <p className="font-medium">{CAFE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CAFE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                <Navigation className="size-4" />
                {t("cta.openMaps")}
              </a>
              <a
                href={CAFE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary"
              >
                <Phone className="size-4" />
                {t("cta.callNow")}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-pillow border border-border h-[380px] md:h-[460px]">
            <iframe
              src={CAFE.mapsEmbed}
              title="Map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
