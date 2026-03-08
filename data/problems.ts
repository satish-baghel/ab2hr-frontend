import type { Problem } from "@/types"

export const problemsData = {
  badge: "Common HR Bottlenecks",
  heading: "Replace Fragmented HR Workflows with a Unified System",
  description:
    "As teams grow, spreadsheets and disconnected tools create delays, errors, and compliance risk. QCUBE brings every process into one connected platform.",
  problems: [
    {
      icon: "SheetIcon",
      problem: "Employee data lives across spreadsheets, emails, and separate tools",
      solution:
        "Centralize employee lifecycle data in one HRMS so every team works from consistent, real-time records.",
    },
    {
      icon: "Clock",
      problem: "Payroll cycles consume too much manual effort each month",
      solution:
        "Configure payroll rules once and automate recurring calculations, approvals, and payslip delivery with fewer errors.",
    },
    {
      icon: "FileWarning",
      problem: "Leave and attendance tracking is inconsistent across teams",
      solution:
        "Apply policy-driven attendance, shift, and leave workflows to improve accuracy and reduce back-and-forth communication.",
    },
    {
      icon: "ShieldAlert",
      problem: "Security, privacy, and compliance are difficult to enforce at scale",
      solution:
        "Use isolated data architecture, role-based access, and audit-ready records to strengthen governance and compliance.",
    },
  ] satisfies Problem[],
} as const
