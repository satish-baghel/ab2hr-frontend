"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from "lucide-react"

import { Badge, Button } from "@/components/custom"
import { HeroIllustration } from "@/components/shared"
import { heroData } from "@/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export const HeroSection = () => {
  const [featureIndex, setFeatureIndex] = useState(0)

  const rotatingFeatures = heroData.rotatingFeatures

  useEffect(() => {
    if (!rotatingFeatures?.length) return

    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % rotatingFeatures.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [rotatingFeatures?.length])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/60 to-transparent">
      {/* Premium gradient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-secondary/[0.07] blur-3xl" />
        <div className="absolute top-1/4 -left-40 h-[350px] w-[350px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-20 md:flex-row md:gap-16 md:px-6 md:py-28 lg:py-32">
        {/* Left column — text content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={slideInLeft}>
            <Badge
              variant="outline"
              className="mb-4 border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {heroData.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={slideInLeft}
            className="mb-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {heroData.heading}
          </motion.h1>

          <motion.p
            variants={slideInLeft}
            className="mb-5 max-w-xl rounded-xl border border-primary/15 bg-background/60 px-4 py-3 text-base font-medium shadow-[0_8px_28px_-18px_hsl(var(--primary))] backdrop-blur-sm md:text-lg"
          >
            <span className="text-foreground/85">{heroData.subheadingPrefix} </span>
            <span className="relative inline-flex flex-col items-center">
              <span className="inline-grid min-w-[18ch] justify-items-start align-baseline">
                <AnimatePresence>
                  <motion.span
                    key={featureIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    aria-live="polite"
                    aria-atomic="true"
                    className="col-start-1 row-start-1 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text font-semibold text-transparent"
                  >
                    {rotatingFeatures[featureIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <motion.span
                key={`progress-${featureIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary/40"
              />
            </span>
          </motion.p>

          <motion.p
            variants={slideInLeft}
            className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {heroData.description}
          </motion.p>

          <motion.div variants={slideInLeft}>
            <Button size="lg" className="group gap-2 text-base">
              {heroData.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column — illustration */}
        <motion.div
          className="flex flex-1 items-center justify-center"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-lg"
          >
            <HeroIllustration />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
