import Link from "next/link"

import { Button } from "@/components/custom"
import { Footer, Header } from "@/components/layout"
import { ErrorIllustration } from "@/components/shared"
import { siteConfig } from "@/data"

export const metadata = {
  title: "Server Error",
  description: `A server error occurred while loading this page on ${siteConfig.name}.`,
  robots: { index: false, follow: false },
}

export default function Error505Page() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col bg-background pt-16">
        <main className="flex-1 px-4 py-12 md:px-6">
          <section className="mx-auto grid w-full max-w-6xl items-center gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-16">
            <div className="order-2 space-y-5 text-center md:order-1 md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-destructive">
                Error 505
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Server is unavailable
              </h1>
              <p className="max-w-xl text-base text-muted-foreground">
                Something unexpected happened while processing this request.
                Please try again in a few moments.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row md:items-start">
                <Button asChild size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/505">Refresh this page</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-md md:order-2 md:max-w-none">
              <ErrorIllustration code="505" />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
