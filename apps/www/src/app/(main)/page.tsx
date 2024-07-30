import { CallToAction } from '@/components/ui/CallToAction'
import { Faqs } from '@/components/sections/Faqs'
import { Hero } from '@/components/sections/Hero'
import { Pricing } from '@/components/sections/Pricing'
import { PrimaryFeatures } from '@/components/sections/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/sections/SecondaryFeatures'
import { WaitlistSection } from '@/components/sections/Waitlist'

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      {/*<CallToAction />*/}
      {/*<Reviews />*/}
      <WaitlistSection />
      {/*<Pricing />*/}
      <Faqs />
    </>
  )
}
