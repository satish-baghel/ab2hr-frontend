import type { Metadata } from "next"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Read the Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your data.`,
    openGraph: {
        title: `Privacy Policy | ${siteConfig.name}`,
        description: `Read the Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your data.`,
        url: `${siteConfig.url}/privacy`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Privacy Policy | ${siteConfig.name}`,
        description: `Read the Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your data.`,
        creator: siteConfig.creator,
    },
}

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4 text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <p>
                        At {siteConfig.name}, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {siteConfig.name} and how we use it.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                        <p>
                            We collect several different types of information for various purposes to provide and improve our Service to you.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Data:</strong> Email address, first name and last name, phone number, address.</li>
                            <li><strong>Usage Data:</strong> Information on how the Service is accessed and used.</li>
                            <li><strong>Tracking Technologies:</strong> Cookies and similar tracking technologies to track the activity on our Service.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                        <p>
                            {siteConfig.name} uses the collected data for various purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide and maintain our Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information so that we can improve our Service</li>
                            <li>To monitor the usage of our Service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. Data Security</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Your Data Protection Rights</h2>
                        <p>
                            Depending on your location, you may have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The right to access, update or delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability.</li>
                            <li>The right to withdraw consent.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>By email: support@{siteConfig.url.replace("https://", "")}</li>
                            <li>By visiting our website: {siteConfig.url}/contact</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )
}
