export const comparisonData = {
  badge: "Why Choose Abtwo HR",
  heading: "The Modern Alternative to Legacy HR Platforms",
  description:
    "Discover why fast-growing companies switch to Abtwo HR for better security, unified data, and an exceptional employee experience.",
  categories: [
    {
      title: "Core Architecture & Security",
      features: [
        {
          name: "Single-Tenant Database",
          description: "Isolated database instances for maximum security and compliance.",
          abtwo: true,
          others: false,
        },
        {
          name: "Custom Data Residency",
          description: "Choose exactly where your employee data is stored globally.",
          abtwo: true,
          others: false,
        },
        {
          name: "Dedicated Infrastructure",
          description: "No noisy neighbor problems affecting your platform performance.",
          abtwo: true,
          others: false,
        },
      ],
    },
    {
      title: "Payroll & Compliance",
      features: [
        {
          name: "Real-Time Payroll Calculation",
          description: "See payroll impacts instantly when making salary adjustments.",
          abtwo: true,
          others: "Batch Processing",
        },
        {
          name: "Automated Statutory Compliance",
          description: "Built-in rules that update automatically with labor laws.",
          abtwo: true,
          others: true,
        },
        {
          name: "Multi-Country Support",
          description: "Manage global teams from a single unified system.",
          abtwo: true,
          others: "Add-ons Required",
        },
      ],
    },
    {
      title: "Employee Experience",
      features: [
        {
          name: "Custom Mobile App Branding",
          description: "Your company logo and colors on the iOS and Android apps.",
          abtwo: true,
          others: false,
        },
        {
          name: "Unified Self-Service Portal",
          description: "One place for leave, expenses, payslips, and documents.",
          abtwo: true,
          others: true,
        },
        {
          name: "AI-Powered HR Helpdesk",
          description: "Instant answers to employee policy and payroll questions.",
          abtwo: true,
          others: "Third-party Integrations",
        },
      ],
    },
    {
      title: "Platform Flexibility",
      features: [
        {
          name: "Open API Architecture",
          description: "Connect any system with robust, well-documented REST APIs.",
          abtwo: true,
          others: "Limited Endpoints",
        },
        {
          name: "Custom Approval Workflows",
          description: "Design multi-step approvals for any HR process visually.",
          abtwo: true,
          others: true,
        },
        {
          name: "Data Portability Guarantee",
          description: "Export all your data quickly without vendor lock-in fees.",
          abtwo: true,
          others: false,
        },
      ],
    },
  ],
} as const;
