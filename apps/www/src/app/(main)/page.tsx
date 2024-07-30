import { CallToAction } from "@/components/ui/CallToAction";
import { Faqs } from "@/components/sections/Faqs";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { PrimaryFeatures } from "@/components/sections/PrimaryFeatures";
import { Reviews } from "@/components/sections/Reviews";
import { SecondaryFeatures } from "@/components/sections/SecondaryFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  );
}
