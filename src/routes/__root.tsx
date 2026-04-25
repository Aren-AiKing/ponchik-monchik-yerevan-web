import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n/I18nProvider";
import { CAFE } from "@/lib/cafe";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: CAFE.name,
  image: "https://lovable.dev/og-default.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Moskovyan 31",
    addressLocality: "Yerevan",
    addressCountry: "AM",
  },
  geo: { "@type": "GeoCoordinates", latitude: CAFE.lat, longitude: CAFE.lng },
  telephone: "+374 93 699 909",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: CAFE.hoursOpen,
      closes: CAFE.hoursClose,
    },
  ],
  servesCuisine: ["Armenian", "Café", "Bakery", "Desserts"],
  priceRange: "$$",
  sameAs: [CAFE.instagram, CAFE.facebook],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ponchik Monchik — Fresh ponchiks & cozy café in Yerevan" },
      {
        name: "description",
        content:
          "Ponchik Monchik on Moskovyan 31, Yerevan — fresh ponchiks, warm coffee, breakfast, desserts and a cozy family café. Open every day 09:00–23:30.",
      },
      { name: "author", content: "Ponchik Monchik" },
      { name: "theme-color", content: "#FBF6EE" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ponchik Monchik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "alternate", hrefLang: "hy", href: "/" },
      { rel: "alternate", hrefLang: "ru", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
}
