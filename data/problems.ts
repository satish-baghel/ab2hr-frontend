import type { Problem } from "@/types"

export const problemsData = {
  badge: "Sound Familiar?",
  heading: "Modern HR Is Complex. AB2HR Makes It Simple.",
  description:
    "Most companies struggle with fragmented tools and manual processes. AB2HR replaces the chaos with one unified platform.",
  problems: [
    {
      icon: "SheetIcon",
      problem: "Running HR on spreadsheets and scattered tools",
      solution:
        "One single app for all HR and payroll processes — workforce management, employee relations, leave, and attendance.",
    },
    {
      icon: "Clock",
      problem: "Payroll takes hours of manual work every month",
      solution:
        "Automate complex payroll policies, remove manual errors, and ensure faster, accurate payouts every cycle.",
    },
    {
      icon: "FileWarning",
      problem: "No proper system to track leaves and attendance",
      solution:
        "Best-in-category leave and attendance management with policy customization, shift scheduling, and real-time tracking.",
    },
    {
      icon: "ShieldAlert",
      problem: "Worried about data security and privacy",
      solution:
        "Every company gets a dedicated, isolated database — your data never mixes with other tenants. Enterprise-grade encryption included.",
    },
  ] satisfies Problem[],
} as const
