import type { RoadmapStep } from "@/types"

export const roadmapData = {
  badge: "Implementation Journey",
  heading: "A Practical Rollout Path for Modern HR Teams",
  description:
    "Adopt QCUBE in progressive stages, from quick setup to advanced insights, with measurable outcomes at each phase.",
  steps: [
    {
      phase: "Step 1",
      quarter: "Q2 2026",
      title: "Foundation Setup and Data Migration",
      description:
        "Migrate employee data, payroll structures, and attendance policies with guided onboarding and minimal disruption.",
    },
    {
      phase: "Step 2",
      quarter: "Q3 2026",
      title: "Workflow Automation and Compliance Controls",
      description:
        "Launch rule-based approvals, payroll automations, and compliance checkpoints aligned to your organizational policies.",
    },
    {
      phase: "Step 3",
      quarter: "Q4 2026",
      title: "Manager and Employee Self-Service Adoption",
      description:
        "Enable self-service for leave, claims, and documents while giving managers better visibility into team operations.",
    },
    {
      phase: "Step 4",
      quarter: "Q1 2027",
      title: "Workforce Analytics and Strategic Planning",
      description:
        "Use dashboards and trend analytics to guide retention strategy, workforce planning, and leadership-level decisions.",
    },
  ] satisfies RoadmapStep[],
} as const
