"use client"

import { motion } from "motion/react"
import { statsData } from "@/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/85 py-20 text-primary-foreground md:py-24">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-[300px] w-[300px] rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {statsData.heading}
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {statsData.description}
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {statsData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="text-center"
            >
              <p className="mb-1 text-4xl font-extrabold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-primary-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
