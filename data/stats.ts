import type { Stat } from "@/types"

export const statsData = {
  heading: "Built for Reliability, Security, and Scale",
  description:
    "QCUBE is designed to support fast-growing teams with dependable performance, secure architecture, and predictable operations.",
  stats: [
    { value: "99.9%", label: "Platform Uptime SLA" },
    { value: "70%", label: "Reduction in Manual HR Tasks" },
    { value: "100%", label: "Single-Tenant Data Isolation" },
    { value: "24/7", label: "Support Coverage" },
  ] satisfies Stat[],
} as const
