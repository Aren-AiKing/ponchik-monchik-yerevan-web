import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileActionBar } from "./MobileActionBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
