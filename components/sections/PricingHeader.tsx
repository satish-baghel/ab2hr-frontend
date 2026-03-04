import { Badge } from "@/components/custom"

export const PricingHeader = () => {
  return (
    <div className="mx-auto mb-16 max-w-5xl text-center">
      <Badge
        variant="outline"
        className="mb-4 border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
      >
        Pricing Plans
      </Badge>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Choose the best plan <span className="text-primary">for you</span>
      </h1>
      <p className="text-lg text-muted-foreground">
        Abtwo HR offers plans for Small, Mid and Large businesses. Our plans differ in features, 
        customisation options and fitment for different industries.
      </p>
    </div>
  )
}
