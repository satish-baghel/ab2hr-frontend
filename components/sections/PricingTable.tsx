"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, Info, X } from "lucide-react"

import { Button } from "@/components/custom"
import { pricingComparisonData, plansData } from "@/data"
import { cn } from "@/lib/utils"

interface Feature {
  readonly name: string
  readonly description: string
  readonly values: readonly (string | boolean)[]
}

interface Category {
  readonly title: string
  readonly features: readonly Feature[]
}

export const PricingTable = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 md:px-6">
      <div className="rounded-3xl border border-border/50 bg-card/30 shadow-2xl backdrop-blur-xl">
        <table className="w-full text-left">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-30 border-b border-border/50 bg-card/90 backdrop-blur-xl">
            <tr>
              <th className="sticky left-0 z-30 min-w-[240px] bg-card/90 p-6 text-xl font-bold text-foreground backdrop-blur-xl border-r border-border/50">
                Modules and Features
              </th>
              {plansData.plans.map((plan, idx) => (
                <th key={plan.name} className="min-w-[180px] p-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg font-bold">{plan.name}</span>
                    <div className="flex flex-col">
                      <span className="text-2xl font-black">
                        {plan.prices[0].price === 0 ? "0" : `₹${plan.prices[0].price.toLocaleString()}`}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {plan.prices[0].price === 0 ? "(Includes 50 Employees)" : "month"}
                      </span>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      className="mt-2 w-full rounded-full transition-all hover:bg-primary/90"
                      onClick={() => console.log("Start Free Trial")}
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-border/50">
            {pricingComparisonData.categories.map((category: Category) => (
              <React.Fragment key={category.title}>
                {/* Category Row */}
                <tr className="bg-muted/30">
                  <th colSpan={6} className="sticky left-0 z-20 bg-muted/90 px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-xl border-r border-border/50">
                    {category.title}
                  </th>
                </tr>
                {/* Feature Rows */}
                {category.features.map((feature: Feature, fIdx: number) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fIdx * 0.05 }}
                    className="group transition-colors hover:bg-muted/20"
                  >
                    <td className="sticky left-0 z-20 bg-card/90 p-6 backdrop-blur-xl border-r border-border/50 transition-colors group-hover:bg-muted/90">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{feature.name}</span>
                        <Info className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
                    </td>
                    {feature.values.map((val: string | boolean, vIdx: number) => (
                      <td key={vIdx} className="p-6 text-center">
                        <div className="flex justify-center">
                          {typeof val === "boolean" ? (
                            val ? (
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                                <Check className="h-4 w-4 stroke-[3]" />
                              </div>
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground/20" />
                            )
                          ) : (
                            <span className="text-sm font-medium text-foreground">{val}</span>
                          )}
                        </div>
                      </td>

                    ))}
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

