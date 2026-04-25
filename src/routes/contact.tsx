import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook, Navigation, Utensils, ShoppingBag } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Ponchik Monchik · Moskovyan 31, Yerevan" },
      {
        name: "description",
        content:
          "Visit Ponchik Monchik at Moskovyan 31, Yerevan. Open every day 09:00–23:30. Call 093 699 909 or get directions.",
      },
      { property: "og:title", content: "Contact — Ponchik Monchik" },
      { property: "og:description", content: "Find us at Moskovyan 31, Yerevan. Open daily 09:00–23:30." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 pt-10 md:px-6 md:pt-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl">{t("contact.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("contact.lead")}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-12 md:px-6 md:mt-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <InfoCard icon={MapPin} title={t("contact.address.title")}>
              <p className="font-medium">{t("location.address")}</p>
              <a
                href={CAFE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <Navigation className="size-4" />
                {t("cta.openMaps")}
              </a>
            </InfoCard>

            <InfoCard icon={Phone} title={t("contact.phone.title")}>
              <a href={CAFE.phoneHref} className="font-medium text-lg hover:text-accent">
                {CAFE.phone}
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title={t("contact.hours.title")}>
              <p className="font-medium">
                {t("footer.everyDay")} · {CAFE.hours}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                  <Utensils className="size-3.5" />
                  {t("contact.dineIn")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                  <ShoppingBag className="size-3.5" />
                  {t("contact.takeaway")}
                </span>
              </div>
            </InfoCard>

            <InfoCard icon={Instagram} title={t("contact.social.title")}>
              <div className="flex gap-3">
                <a
                  href={CAFE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href={CAFE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4" />
                </a>
              </div>
            </InfoCard>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-pillow border border-border min-h-[420px]">
            <iframe
              src={CAFE.mapsEmbed}
              title="Map"
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div className="h-16" />
    </SiteShell>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-pillow p-6">
      <div className="flex items-start gap-4">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-strawberry-soft text-accent">
          <Icon className="size-5" />
        </span>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
