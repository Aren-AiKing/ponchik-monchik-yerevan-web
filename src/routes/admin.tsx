import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Ponchik Monchik" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPlaceholder,
});

function AdminPlaceholder() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl md:text-5xl">Admin panel</h1>
        <p className="mt-4 text-muted-foreground">
          Coming next: log in to edit hours, menu items, gallery, FAQ, reviews, and the
          "best time to visit" section. Powered by Lovable Cloud.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Back to home
        </Link>
      </div>
    </SiteShell>
  );
}
