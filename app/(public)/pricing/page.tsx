import { CTASection, PricingHeader, PricingTable } from "@/components/sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans | Abtwo HR",
  description: "Choose the best plan for your business. From early-stage teams to large organizations, Abtwo HR scales with you.",
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <PricingHeader />
        <PricingTable />
        <CTASection />
      </div>
    </main>
  )
}
