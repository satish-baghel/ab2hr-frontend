import Link from "next/link"

import { Button } from "@/components/custom"
import { Footer, Header } from "@/components/layout"
import { ErrorIllustration } from "@/components/shared"
import { siteConfig } from "@/data"

export const metadata = {
  title: "Page Not Found",
  description: `The page you're looking for doesn't exist on ${siteConfig.name}.`,
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col bg-background pt-16">
        <main className="flex-1 px-4 py-12 md:px-6">
          <section className="mx-auto grid w-full max-w-6xl items-center gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-16">
            <div className="mx-auto flex w-full max-w-md justify-center md:max-w-none md:justify-start">
              <ErrorIllustration code="404" />
            </div>

            <div className="space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Error 404
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Page not found
              </h1>
              <p className="max-w-xl text-base text-muted-foreground">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                It may have been moved, deleted, or never existed.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row md:items-start">
                <Button asChild size="lg">  
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
