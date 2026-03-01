"use client"

import { motion } from "motion/react"
import { ArrowRight, Play } from "lucide-react"

import { Button, Card, CardContent } from "@/components/custom"
import { ctaData } from "@/data"

const MotionCard = motion.create(Card)

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <MotionCard
          className="relative gap-0 overflow-hidden border-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85 py-0 text-primary-foreground shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blurs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -left-16 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -right-16 -bottom-16 h-[250px] w-[250px] rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <CardContent className="relative px-6 py-16 text-center md:px-16 md:py-20">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {ctaData.heading}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {ctaData.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="group gap-2 text-base font-semibold"
              >
                {ctaData.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="h-4 w-4" />
                {ctaData.secondaryCta}
              </Button>
            </div>
          </CardContent>
        </MotionCard>
      </div>
    </section>
  )
}
