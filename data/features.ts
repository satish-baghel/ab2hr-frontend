import type { Feature } from "@/types"

export const featuresData = {
  badge: "Why AB2HR?",
  heading: "Everything You Need to Run HR — In One Place",
  description:
    "From onboarding to offboarding, AB2HR handles the entire employee lifecycle so your team can focus on what matters most — your people.",
  features: [
    {
      icon: "Database",
      title: "Dedicated Database per Company",
      description:
        "Every company gets its own isolated database. Your data never mixes with anyone else's — ensuring maximum security, privacy, and performance at scale.",
      highlighted: true,
    },
    {
      icon: "BadgeIndianRupee",
      title: "Payroll & Compliance",
      description:
        "Run accurate payroll in minutes with automated tax calculations, statutory compliance, and one-click payslip generation.",
    },
    {
      icon: "CalendarCheck",
      title: "Leave & Attendance",
      description:
        "Track attendance, manage leave policies, and handle shift schedules with a powerful yet easy-to-use system.",
    },
    {
      icon: "UserCheck",
      title: "Hiring & Onboarding",
      description:
        "Post jobs, track applicants, schedule interviews, and onboard new hires — all from a single pipeline.",
    },
    {
      icon: "Smartphone",
      title: "Employee Self-Service",
      description:
        "Empower employees to access payslips, apply for leave, submit claims, and update profiles on any device.",
    },
    {
      icon: "BarChart3",
      title: "Reports & Analytics",
      description:
        "150+ prebuilt reports covering HR, payroll, attendance, and workforce analytics to drive smarter decisions.",
    },
  ] satisfies Feature[],
} as const
