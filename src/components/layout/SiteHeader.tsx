import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/menu", key: "nav.menu" },
  { to: "/about", key: "nav.about" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/reviews", key: "nav.reviews" },
  { to: "/contact", key: "nav.contact" },
  { to: "/faq", key: "nav.faq" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Ponchik Monchik home">
          <Logo className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-secondary"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-foreground bg-secondary" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a
            href={CAFE.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            <Phone className="size-4" />
            {CAFE.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "rounded-xl px-3 py-3 text-base font-semibold text-foreground bg-secondary" }}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <a
                href={CAFE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <Phone className="size-4" />
                {CAFE.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
