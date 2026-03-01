import type { Stat } from "@/types"

export const statsData = {
  heading: "Trusted by Growing Businesses",
  description:
    "Companies of all sizes rely on AB2HR to simplify their people operations and accelerate growth.",
  stats: [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "10x", label: "Faster Payroll Processing" },
    { value: "100%", label: "Data Isolation per Company" },
    { value: "24/7", label: "Priority Support" },
  ] satisfies Stat[],
} as const
