import { Header, Footer } from "@/components/layout"
import {
  HeroSection,
  FeaturesSection,
  ProblemsSection,
  RoadmapSection,
  PlansSection,
  StatsSection,
  ComparisonSection,
  CTASection,
} from "@/components/sections"
import { siteConfig } from "@/data"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    category: "SaaS",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background pt-16">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ProblemsSection />
        {/* <RoadmapSection /> */}
        <ComparisonSection />
        <PlansSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
