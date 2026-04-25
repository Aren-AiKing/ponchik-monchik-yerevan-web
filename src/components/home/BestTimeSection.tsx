import { Sun, Coffee, Moon } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function BestTimeSection() {
  const { t } = useI18n();
  const slots = [
    {
      icon: Sun,
      tone: "bg-gold/30 text-caramel-deep",
      label: t("besttime.morning.label"),
      time: t("besttime.morning.time"),
      tip: t("besttime.morning.tip"),
    },
    {
      icon: Coffee,
      tone: "bg-strawberry-soft text-accent",
      label: t("besttime.afternoon.label"),
      time: t("besttime.afternoon.time"),
      tip: t("besttime.afternoon.tip"),
    },
    {
      icon: Moon,
      tone: "bg-secondary text-chocolate",
      label: t("besttime.evening.label"),
      time: t("besttime.evening.time"),
      tip: t("besttime.evening.tip"),
    },
  ];
  return (
    <section className="bg-grain bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="font-display text-3xl md:text-4xl">{t("besttime.title")}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t("besttime.subtitle")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {slots.map((s, i) => (
            <div key={i} className="card-pillow p-6 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${s.tone}`}>
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-xl text-caramel-deep">{s.time}</span>
              </div>
              <h3 className="font-display text-xl">{s.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
