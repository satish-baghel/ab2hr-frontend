 "use client"

import { useState } from "react"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/custom"
import { plansData } from "@/data"
import type { BillingInterval, PlanPrice } from "@/types"

const formatPrice = (amount: number, currencyCode: string) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount)

const getPlanPriceByInterval = (prices: readonly PlanPrice[], interval: BillingInterval) =>
  prices.find((price) => price.billingInterval === interval) ?? prices[0]

export const PlansSection = () => {
  const [selectedInterval, setSelectedInterval] = useState<BillingInterval>("monthly")

  return (
    <section className="relative bg-accent/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            {plansData.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {plansData.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {plansData.description}
          </p>

          <div className="mt-6 inline-flex rounded-lg border border-border bg-background p-1">
            <ToggleGroup
              type="single"
              value={selectedInterval}
              onValueChange={(value) => {
                if (value === "monthly" || value === "yearly") {
                  setSelectedInterval(value)
                }
              }}
              variant="outline"
            >
              <ToggleGroupItem value="monthly" aria-label="Select monthly billing">
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem value="yearly" aria-label="Select yearly billing">
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plansData.plans.map((plan) => {
            const selectedPrice = getPlanPriceByInterval(plan.prices, selectedInterval)
            const exactMatchExists = plan.prices.some(
              (price) => price.billingInterval === selectedInterval
            )

            return (
              <Card key={plan.name} className="flex h-full flex-col">
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{plan.isPublic ? "Public Plan" : "Private Plan"}</Badge>
                    {plan.isCustom && <Badge variant="outline">Custom</Badge>}
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-5">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">Included features</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Selected pricing</p>
                    <div className="rounded-lg border border-border bg-background p-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {selectedPrice.name}
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {selectedPrice.price > 0
                          ? `${formatPrice(selectedPrice.price, selectedPrice.currencyCode)} / ${selectedPrice.billingInterval}`
                          : "Contact sales"}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {selectedPrice.maxEmployeeLimit === null
                          ? "Unlimited employees"
                          : `Up to ${selectedPrice.maxEmployeeLimit} employees`}
                        {" • "}
                        {selectedPrice.trialDays} trial days
                        {" • "}
                        Setup fee: {formatPrice(selectedPrice.setupFee, selectedPrice.currencyCode)}
                      </p>
                      {!exactMatchExists && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {selectedInterval === "monthly"
                            ? "Monthly price unavailable for this plan."
                            : "Yearly price unavailable for this plan."}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full">{plan.isCustom ? "Request Demo" : "Start Free Trial"}</Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
