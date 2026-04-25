import { Sparkles, Sofa, HandHeart, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function WhySection() {
  const { t } = useI18n();
  const items = [
    { icon: Sparkles, title: t("why.fresh.title"), text: t("why.fresh.text") },
    { icon: Sofa, title: t("why.cozy.title"), text: t("why.cozy.text") },
    { icon: HandHeart, title: t("why.friendly.title"), text: t("why.friendly.text") },
    { icon: MapPin, title: t("why.central.title"), text: t("why.central.text") },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <h2 className="font-display text-3xl md:text-4xl">{t("why.title")}</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((item, i) => (
          <div key={i} className="card-pillow p-5 md:p-6 text-center">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-strawberry-soft text-accent mb-4">
              <item.icon className="size-5" />
            </span>
            <h3 className="font-display text-lg">{item.title}</h3>
            <p className="mt-1.5 text-xs md:text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
