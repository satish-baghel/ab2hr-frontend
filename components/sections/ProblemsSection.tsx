"use client"

import { motion } from "motion/react"
import {
  Sheet,
  Clock,
  FileWarning,
  ShieldAlert,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

import { Badge, Card, CardContent } from "@/components/custom"
import { problemsData } from "@/data"

const iconMap: Record<string, LucideIcon> = {
  SheetIcon: Sheet,
  Clock,
  FileWarning,
  ShieldAlert,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const MotionCard = motion.create(Card)

export const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            {problemsData.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {problemsData.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {problemsData.description}
          </p>
        </motion.div>

        {/* Problem → Solution rows */}
        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {problemsData.problems.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <MotionCard
                key={item.problem}
                variants={rowVariants}
                className="group gap-0 py-0"
              >
                <CardContent className="grid items-center gap-4 p-5 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:p-6">
                  {/* Problem side */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <Badge
                        variant="destructive"
                        className="mb-1.5 text-[11px] uppercase tracking-wider"
                      >
                        The Problem
                      </Badge>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Arrow separator */}
                  <div className="hidden items-center justify-center md:flex">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15">
                      <ArrowRight className="h-4 w-4 text-secondary" />
                    </div>
                  </div>

                  {/* Solution side */}
                  <div className="flex items-start gap-4 pl-14 md:pl-0">
                    <div>
                      <Badge className="mb-1.5 text-[11px] uppercase tracking-wider">
                        AB2HR Solution
                      </Badge>
                      <p className="text-sm leading-relaxed text-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
