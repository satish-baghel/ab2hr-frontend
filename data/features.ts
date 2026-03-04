import type { Feature } from "@/types"

export const featuresData = {
  badge: "Platform Capabilities",
  heading: "Built for End-to-End HR, Payroll, and Employee Experience",
  description:
    "Standardize your processes, automate repetitive tasks, and give every stakeholder the visibility they need across the complete employee lifecycle.",
  features: [
    {
      icon: "Database",
      title: "Single-Tenant Data Architecture",
      description:
        "Your account runs on an isolated database, helping you meet internal security standards and maintain strict data boundaries as you scale.",
      highlighted: true,
    },
    {
      icon: "BadgeIndianRupee",
      title: "Payroll and Statutory Compliance",
      description:
        "Automate salary processing, tax rules, reimbursements, and statutory filings with configurable policies that match your organization.",
    },
    {
      icon: "CalendarCheck",
      title: "Time, Attendance, and Leave",
      description:
        "Track shifts, attendance, overtime, and leave balances in real time with policy controls for multiple teams and locations.",
    },
    {
      icon: "UserCheck",
      title: "Hiring and Structured Onboarding",
      description:
        "Move candidates from application to offer and onboarding with clear workflows, task checklists, and role-based responsibilities.",
    },
    {
      icon: "Smartphone",
      title: "Employee and Manager Self-Service",
      description:
        "Let employees handle leave, claims, documents, and profile updates while managers approve requests and track team activity from one portal.",
    },
    {
      icon: "BarChart3",
      title: "Actionable Reports and Analytics",
      description:
        "Use prebuilt and custom reports across attrition, payroll cost, headcount, attendance trends, and compliance readiness.",
    },
  ] satisfies Feature[],
} as const
