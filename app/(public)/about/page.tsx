import type { Metadata } from "next"

import { AboutHero, MissionSection, TeamSection } from "@/components/sections"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
    title: `About Us | ${siteConfig.name}`,
    description:
        "Learn about horizen — our mission, story, values, and the team building the HR platform for growing businesses.",
    openGraph: {
        title: `About Us | ${siteConfig.name}`,
        description:
            "Learn about horizen — our mission, story, values, and the team building the HR platform for growing businesses.",
        url: `${siteConfig.url}/about`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `About Us | ${siteConfig.name}`,
        description:
            "Learn about horizen — our mission, story, values, and the team building the HR platform for growing businesses.",
        creator: siteConfig.creator,
    },
}

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <MissionSection />
            <TeamSection />
        </main>
    )
}
