"use client"

import { motion } from "motion/react"
import {
  Database,
  BadgeIndianRupee,
  CalendarCheck,
  UserCheck,
  Smartphone,
  BarChart3,
  type LucideIcon,
} from "lucide-react"

import { Badge, Card, CardContent } from "@/components/custom"
import { featuresData } from "@/data"

const iconMap: Record<string, LucideIcon> = {
  Database,
  BadgeIndianRupee,
  CalendarCheck,
  UserCheck,
  Smartphone,
  BarChart3,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const MotionCard = motion.create(Card)

export const FeaturesSection = () => {
  return (
    <section className="relative bg-accent/40 py-20 md:py-28">
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
            {featuresData.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {featuresData.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {featuresData.description}
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuresData.features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <MotionCard
                key={feature.title}
                variants={cardVariants}
                className={`group relative gap-0 py-0 ${
                  feature.highlighted
                    ? "border-primary/30 ring-2 ring-primary/10"
                    : ""
                }`}
              >
                {feature.highlighted && (
                  <Badge className="absolute -top-3 right-4 text-[11px] uppercase tracking-wide">
                    Key Differentiator
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ${
                      feature.highlighted
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </MotionCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
