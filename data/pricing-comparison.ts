export const pricingComparisonData = {
  badge: "Plan Comparison",
  heading: "Choose the best plan **for you**",
  description: "Abtwo HR offers plans for Small, Mid and Large businesses. Compare features plan-wise to find your fit.",
  planNames: ["Free Trial", "Starter", "Essential"],
  categories: [
    {
      title: "Core Modules",
      features: [
        {
          name: "Employee Records",
          description: "Digitize and manage all employee data.",
          values: ["Limited", "Unlimited", "Unlimited"],
        },
        {
          name: "Onboarding",
          description: "Digital onboarding workflows.",
          values: [true, true, true],
        },
        {
          name: "Leave Management",
          description: "Apply and approve leave requests.",
          values: [true, true, true],
        },
        {
          name: "Attendance Management",
          description: "Track attendance with geo-fencing.",
          values: [false, true, true],
        },
      ],
    },
    {
      title: "Payroll & Finance",
      features: [
        {
          name: "Standard Payroll",
          description: "Monthly payroll processing.",
          values: [true, true, true],
        },
        {
          name: "Custom Payroll Rules",
          description: "Configure complex payroll structures.",
          values: [false, false, true],
        },
        {
          name: "Statutory Compliance",
          description: "PF, ESI, PT compliance.",
          values: [false, true, true],
        },
        {
          name: "Expense Management",
          description: "Track and reimburse expenses.",
          values: [false, false, true],
        },
      ],
    },
    {
      title: "AI & Automation",
      features: [
        {
          name: "AI Chat Support",
          description: "Instant answers for employees via AI.",
          values: [false, false, false],
        },
        {
          name: "Automated Workflows",
          description: "Trigger based alerts and actions.",
          values: [false, false, true],
        },
        {
          name: "Advanced Analytics",
          description: "Deep insights into workforce data.",
          values: [false, false, true],
        },
      ],
    },
    {
      title: "Support & Services",
      features: [
        {
          name: "Support Channel",
          description: "Self-service vs Dedicated support.",
          values: ["Community", "Email", "Email & Chat"],
        },
        {
          name: "Implementation",
          description: "Guided setup process.",
          values: ["Self", "Self", "Assisted"],
        },
      ],
    },
  ],
};
