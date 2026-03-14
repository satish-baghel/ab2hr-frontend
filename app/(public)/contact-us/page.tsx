import type { Metadata } from "next"

import { ContactFormSection } from "@/components/sections"
import { siteConfig } from "@/data"

export const metadata: Metadata = {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}. We're here to help you streamline your HR, payroll, and employee management processes.`,
    openGraph: {
        title: `Contact Us | ${siteConfig.name}`,
        description: `Get in touch with ${siteConfig.name}. We're here to help you streamline your HR, payroll, and employee management processes.`,
        url: `${siteConfig.url}/contact-us`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Contact Us | ${siteConfig.name}`,
        description: `Get in touch with ${siteConfig.name}. We're here to help you streamline your HR, payroll, and employee management processes.`,
        creator: siteConfig.creator,
    },
}

export default function ContactUsPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-foreground">
                        Contact Us
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Have questions about {siteConfig.name}? Our team is here to help you streamline your HR processes and get the most out of our platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-8">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Get in Touch</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Whether you&apos;re looking for a demo, need customer support, or just want to learn more about our HR platform, we&apos;d love to hear from you. Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                                    <p className="text-muted-foreground">support@{siteConfig.url.replace("https://", "")}</p>
                                    <p className="text-muted-foreground">sales@{siteConfig.url.replace("https://", "")}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                                    <p className="text-muted-foreground">123 HR Tower, Suite 400</p>
                                    <p className="text-muted-foreground">San Francisco, CA 94107</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactFormSection />
                </div>
            </div>
        </main>
    )
}
