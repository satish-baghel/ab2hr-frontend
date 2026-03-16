import { siteConfig } from "@/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Login | ${siteConfig.name}`,
  description: `Sign in to your ${siteConfig.name} account to access your HR dashboard, manage employees, payroll, and attendance.`,
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `Login | ${siteConfig.name}`,
    description: `Sign in to your ${siteConfig.name} account to access your HR dashboard.`,
    url: `${siteConfig.url}/login`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Login | ${siteConfig.name}`,
    description: `Sign in to your ${siteConfig.name} account to access your HR dashboard.`,
    creator: `@${siteConfig.creator}`,
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
