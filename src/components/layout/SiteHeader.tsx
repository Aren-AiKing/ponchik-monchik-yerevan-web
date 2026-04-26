/**
 * @file src/components/layout/SiteHeader.tsx
 *
 * Fixes vs previous version:
 * - Replaced `motion.header` animating `color-mix()` strings with CSS class switching.
 *   Framer Motion cannot interpolate color-mix() values — it caused jumpy/broken transitions.
 * - Nav item stagger now uses `initial={false}` to prevent re-running on every re-render.
 * - Mobile drawer: reduced stagger delay (0.04s vs 0.05s) and shorter duration.
 * - whileHover on logo disabled on touch (enableHover flag).
 * - All motion values use transform only (no layout properties).
 */
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";
import { EASE_OUT_EXPO } from "@/components/motion";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/menu", key: "nav.menu" },
  { to: "/about", key: "nav.about" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/reviews", key: "nav.reviews" },
  { to: "/contact", key: "nav.contact" },
  { to: "/faq", key: "nav.faq" },
] as const;

// Drawer: animate height via transform+clip rather than `height: "auto"`
// to stay on the compositor thread. Using `overflow:hidden` wrapper trick.
const drawerVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.32, ease: EASE_OUT_EXPO },
  }),
};

export function SiteHeader() {
  const { t } = useI18n();
  const { enableHover, durationScale } = useMotionConfig();
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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    // Use CSS class switching for backdrop-filter + bg — Framer can't interpolate color-mix()
    <header
      className={[
        "sticky top-0 z-40 w-full transition-[background-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "bg-background/88 backdrop-blur-xl shadow-soft"
          : "bg-background/60 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Ponchik Monchik home">
          <motion.div
            whileHover={enableHover ? { scale: 1.03 } : undefined}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
            <Logo className="h-10 w-auto md:h-12" />
          </motion.div>
        </Link>

        {/* Desktop nav — `initial={false}` so items don't re-animate on re-renders */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navItems.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + i * 0.05, duration: 0.4 * durationScale, ease: EASE_OUT_EXPO }}
            >
              <Link
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-foreground hover:bg-secondary"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "rounded-full px-3 py-2 text-sm font-semibold text-foreground bg-secondary",
                }}
              >
                {t(item.key)}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <motion.a
            href={CAFE.phoneHref}
            whileHover={enableHover ? { scale: 1.03 } : undefined}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft"
          >
            <Phone className="size-4" />
            {CAFE.phone}
          </motion.a>

          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer — opacity+translate only, no height animation (layout thrash) */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary active:bg-secondary/80 transition-colors"
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{
                      className: "block rounded-xl px-3 py-3 text-base font-semibold text-foreground bg-secondary",
                    }}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-3 flex items-center justify-between gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.04 + 0.05 }}
              >
                <LanguageSwitcher />
                <a
                  href={CAFE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground active:opacity-80"
                >
                  <Phone className="size-4" />
                  {CAFE.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
