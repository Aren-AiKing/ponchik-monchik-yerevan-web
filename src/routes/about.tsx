import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, HandHeart, Heart } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/i18n/I18nProvider";
import interior from "@/assets/interior.jpg";
import family from "@/assets/family.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ponchik Monchik · Cozy family café in Yerevan" },
      {
        name: "description",
        content:
          "Our story: a small family café on Moskovyan 31 making fresh ponchiks, warm coffee, and welcoming everyone like home.",
      },
      { property: "og:title", content: "About Ponchik Monchik" },
      { property: "og:description", content: "A neighborhood café in Yerevan with a seat for everyone." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const values = [
    { icon: Sparkles, title: t("about.values.fresh"), text: t("about.values.fresh.text") },
    { icon: HandHeart, title: t("about.values.warm"), text: t("about.values.warm.text") },
    { icon: Heart, title: t("about.values.local"), text: t("about.values.local.text") },
  ];
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 pt-10 md:px-6 md:pt-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl">{t("about.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("about.lead")}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-12 md:px-6 md:mt-16">
        <div className="aspect-[16/9] overflow-hidden rounded-[2rem] shadow-pillow">
          <img src={interior} alt="Café interior" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24 space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl text-center">{t("about.values.title")}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-pillow p-6 md:p-7 text-center">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-strawberry-soft text-accent mb-4">
                  <v.icon className="size-5" />
                </span>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="aspect-[16/9] overflow-hidden rounded-[2rem] shadow-pillow">
          <img src={family} alt="Family at Ponchik Monchik" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>
    </SiteShell>
  );
}
