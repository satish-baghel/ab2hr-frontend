"use client"

import { motion } from "motion/react"

import { Badge, Card, CardContent } from "@/components/custom"
import { RoadmapIllustration } from "@/components/shared"
import { roadmapData } from "@/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const MotionCard = motion.create(Card)

export const RoadmapSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:px-6">
        <div>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {roadmapData.badge}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {roadmapData.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {roadmapData.description}
            </p>
          </motion.div>

          <motion.div
            className="relative space-y-4 pl-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="absolute left-3 top-2 h-[calc(100%-16px)] w-px bg-border" />
            {roadmapData.steps.map((step) => (
              <MotionCard key={step.title} variants={stepVariants} className="relative gap-0 py-0">
                <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background))]" />
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {step.phase}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">{step.quarter}</p>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </MotionCard>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-md md:max-w-none"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <RoadmapIllustration />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
