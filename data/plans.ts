import type { Plan } from "@/types"

export const plansData = {
  badge: "Plans & Pricing",
  heading: "Pricing That Scales with Your Workforce",
  description:
    "Start with core HR needs, then unlock deeper automation, compliance controls, and custom enterprise workflows as you grow.",
  plans: [
    {
      name: "Starter",
      description: "For early-stage teams looking to digitize core HR records, attendance, and leave.",
      isPublic: true,
      isCustom: false,
      status: "active",
      features: [
        "Employee records and lifecycle management",
        "Attendance and leave tracking",
        "Basic payroll processing",
      ],
      prices: [
        {
          name: "Monthly",
          price: 1499,
          billingInterval: "monthly",
          currencyCode: "INR",
          currencySymbol: "INR",
          maxEmployeeLimit: 50,
          trialDays: 14,
          setupFee: 0,
        },
      ],
    },
    {
      name: "Growth",
      description: "For scaling businesses that need payroll compliance and configurable approval workflows.",
      isPublic: true,
      isCustom: false,
      status: "active",
      features: [
        "Everything in Starter",
        "Advanced payroll and statutory compliance",
        "Approval workflows and team dashboards",
        "Employee self-service portal",
      ],
      prices: [
        {
          name: "Monthly",
          price: 3999,
          billingInterval: "monthly",
          currencyCode: "INR",
          currencySymbol: "INR",
          maxEmployeeLimit: 250,
          trialDays: 14,
          setupFee: 999,
        },
        {
          name: "Yearly",
          price: 41999,
          billingInterval: "yearly",
          currencyCode: "INR",
          currencySymbol: "INR",
          maxEmployeeLimit: 250,
          trialDays: 14,
          setupFee: 0,
        },
      ],
    },
    {
      name: "Enterprise Custom",
      description: "For large organizations requiring custom workflows, controls, and dedicated implementation.",
      isPublic: false,
      isCustom: true,
      status: "active",
      features: [
        "Dedicated implementation specialist",
        "Custom approvals and policy engine",
        "Multi-entity controls and integrations",
        "Priority SLA support",
      ],
      prices: [
        {
          name: "Custom Quote",
          price: 0,
          billingInterval: "yearly",
          currencyCode: "INR",
          currencySymbol: "INR",
          maxEmployeeLimit: null,
          trialDays: 30,
          setupFee: 0,
        },
      ],
    },
  ] satisfies Plan[],
} as const
