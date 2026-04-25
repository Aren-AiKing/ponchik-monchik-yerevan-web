import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HowToEnjoySection } from "@/components/home/HowToEnjoySection";
import { StorySection } from "@/components/home/StorySection";
import { WhySection } from "@/components/home/WhySection";
import { BestTimeSection } from "@/components/home/BestTimeSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { LocationSection } from "@/components/home/LocationSection";
import { FAQTeaser } from "@/components/home/FAQTeaser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponchik Monchik — Fresh ponchiks & cozy café in Yerevan" },
      {
        name: "description",
        content:
          "Cozy family café on Moskovyan 31, Yerevan. Fresh ponchiks, warm coffee, breakfast, desserts and a welcoming atmosphere. Open every day 09:00–23:30.",
      },
      { property: "og:title", content: "Ponchik Monchik — Fresh ponchiks & cozy café in Yerevan" },
      {
        property: "og:description",
        content:
          "Fresh ponchiks, warm coffee, and a cozy place to stay a little longer. Moskovyan 31, Yerevan.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <FeaturedSection />
      <HowToEnjoySection />
      <StorySection />
      <WhySection />
      <BestTimeSection />
      <ReviewsSection />
      <GalleryTeaser />
      <LocationSection />
      <FAQTeaser />
    </SiteShell>
  );
}
