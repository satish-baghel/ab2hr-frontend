import type { Metadata } from "next"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
    title: `Terms and Conditions | ${siteConfig.name}`,
    description: `Read the Terms and Conditions for ${siteConfig.name}. These terms govern your use of our HR and payroll platform.`,
    openGraph: {
        title: `Terms and Conditions | ${siteConfig.name}`,
        description: `Read the Terms and Conditions for ${siteConfig.name}. These terms govern your use of our HR and payroll platform.`,
        url: `${siteConfig.url}/terms`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Terms and Conditions | ${siteConfig.name}`,
        description: `Read the Terms and Conditions for ${siteConfig.name}. These terms govern your use of our HR and payroll platform.`,
        creator: siteConfig.creator,
    },
}

export default function TermsAndConditionsPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4 text-foreground">
                        Terms and Conditions
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <p>
                        Welcome to {siteConfig.name}! These terms and conditions outline the rules and regulations for the use of {siteConfig.name}&apos;s Website, located at {siteConfig.url}.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use {siteConfig.name} if you do not agree to take all of the terms and conditions stated on this page.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. User Accounts</h2>
                        <p>
                            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        </p>
                        <p>
                            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. Acceptable Use</h2>
                        <p>
                            You agree not to use the Service:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>In any way that violates any applicable national or international law or regulation.</li>
                            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                            <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
                            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property Rights</h2>
                        <p>
                            Other than the content you own, under these Terms, {siteConfig.name} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Limitation of Liability</h2>
                        <p>
                            In no event shall {siteConfig.name}, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {siteConfig.name}, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Termination</h2>
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                        <p>
                            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">6. Contact Information</h2>
                        <p>
                            If you have any questions or concerns about these Terms, please contact us at support@{siteConfig.url.replace("https://", "")}.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
