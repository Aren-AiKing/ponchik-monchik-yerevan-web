import { Link } from "@tanstack/react-router";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

export function MobileActionBar() {
  const { t } = useI18n();
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-md grid-cols-3">
        <a
          href={CAFE.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground active:bg-secondary"
        >
          <Phone className="size-5 text-accent" />
          {t("mobile.call")}
        </a>
        <a
          href={CAFE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground border-x border-border active:bg-secondary"
        >
          <MapPin className="size-5 text-caramel-deep" />
          {t("mobile.directions")}
        </a>
        <Link
          to="/menu"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground active:bg-secondary"
        >
          <UtensilsCrossed className="size-5 text-caramel" />
          {t("mobile.menu")}
        </Link>
      </div>
    </div>
  );
}
