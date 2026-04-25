import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CAFE } from "@/lib/cafe";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo className="h-14 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
            <LanguageSwitcher />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-caramel-deep shrink-0" />
                <span>{t("location.address")}</span>
              </li>
              <li>
                <a href={CAFE.phoneHref} className="flex items-start gap-2 hover:text-accent">
                  <Phone className="size-4 mt-0.5 text-caramel-deep shrink-0" />
                  {CAFE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t("footer.hours")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="size-4 mt-0.5 text-caramel-deep shrink-0" />
                <span>
                  {t("footer.everyDay")} · {CAFE.hours}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t("footer.follow")}
            </h4>
            <ul className="mt-4 flex gap-3">
              <li>
                <a
                  href={CAFE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href={CAFE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Ponchik Monchik. {t("footer.rights")}.</p>
          <Link to="/admin" className="hover:text-foreground">
            {t("footer.admin")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
