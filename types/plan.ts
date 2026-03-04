export type BillingInterval = "monthly" | "quarterly" | "yearly"

export type PlanPrice = {
  name: string
  price: number
  billingInterval: BillingInterval
  currencyCode: string
  currencySymbol: string
  maxEmployeeLimit: number | null
  trialDays: number
  setupFee: number
}

export type Plan = {
  name: string
  description: string
  isPublic: boolean
  isCustom: boolean
  status: "active" | "inactive"
  features: string[]
  prices: PlanPrice[]
}
