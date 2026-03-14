export const aboutData = {
  hero: {
    badge: "About HORIZEN",
    heading: "HR Software Built for People, Not Paperwork",
    description:
      "HORIZEN was founded on a simple belief: HR teams deserve tools that reduce friction, not create it. We are building an all-in-one platform that brings payroll, attendance, hiring, and employee experience under one roof.",
  },

  mission: {
    badge: "Our Mission",
    heading: "Empower Every HR Team to Do Their Best Work",
    description:
      "We believe that when HR runs smoothly, entire organizations thrive. Our mission is to eliminate the tedious, error-prone processes that hold HR teams back — and replace them with intelligent, automated workflows that just work.",
    values: [
      {
        icon: "Target",
        title: "Simplicity First",
        description:
          "Every feature we build must pass a simple test: does it make the HR team's day easier? We strip away complexity and ship tools that are intuitive from day one.",
      },
      {
        icon: "ShieldCheck",
        title: "Security by Design",
        description:
          "Employee data is sensitive. Our single-tenant architecture ensures your data never touches another customer's. Security is not an afterthought — it is foundational.",
      },
      {
        icon: "Users",
        title: "Customer Obsession",
        description:
          "We partner closely with our customers. Every feature request, piece of feedback, and support ticket shapes the product. Your success is our roadmap.",
      },
      {
        icon: "Zap",
        title: "Relentless Execution",
        description:
          "We move fast and ship often. We believe great software is built through iteration — learning from real usage and improving continuously.",
      },
    ],
  },

  story: {
    badge: "Our Story",
    heading: "From Frustration to a Platform",
    paragraphs: [
      "HORIZEN was born out of a common frustration. Our founders saw HR teams drowning in spreadsheets, chasing approvals over WhatsApp, and manually reconciling payroll every month. The tools they had were either too expensive, too complex, or too generic.",
      "We set out to build something different — a platform designed specifically for growing businesses in India, with an opinionated approach to simplicity, compliance, and automation. We started with payroll and quickly realized HR needed a fully integrated solution.",
      "Today, HORIZEN serves teams across industries, helping them manage the entire employee lifecycle from hiring to offboarding. We are a small, focused team with a big ambition: to become the HR backbone for every growing business.",
    ],
  },

  stats: [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "70%", label: "Reduction in Manual Tasks" },
    { value: "24/7", label: "Support Coverage" },
    { value: "100%", label: "Data Isolation" },
  ],

  team: {
    badge: "The Team",
    heading: "Built by People Who Care About HR",
    description:
      "Our team brings together experience in HR technology, enterprise software, and product design. We are united by a shared belief that HR deserves better tools.",
    members: [
      {
        name: "Arjun Mehta",
        role: "Co-Founder & CEO",
        bio: "Former HR tech consultant with a decade of experience helping enterprises modernize their people operations.",
        initials: "AM",
      },
      {
        name: "Priya Nair",
        role: "Co-Founder & CTO",
        bio: "Ex-engineering lead with expertise in building secure, scalable SaaS platforms for regulated industries.",
        initials: "PN",
      },
      {
        name: "Rohan Sharma",
        role: "Head of Product",
        bio: "Product manager who spent years embedded with HR teams in fast-growing startups before joining HORIZEN.",
        initials: "RS",
      },
      {
        name: "Sunita Verma",
        role: "Head of Customer Success",
        bio: "Passionate about ensuring every customer gets genuine value from the platform, not just licenses.",
        initials: "SV",
      },
    ],
  },

  cta: {
    heading: "Ready to Transform Your HR Operations?",
    description:
      "Join growing teams who have simplified their HR workflows with HORIZEN. Start your free trial today — no credit card required.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Request a Demo",
  },
} as const
