"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

import { Badge, Button } from "@/components/custom"
import { aboutData } from "@/data"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7 },
    },
}

export const AboutHero = () => {
    const { hero, stats } = aboutData

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-accent/60 to-transparent">
            {/* Decorative background blurs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-secondary/[0.07] blur-3xl" />
                <div className="absolute top-1/4 -left-40 h-[350px] w-[350px] rounded-full bg-accent blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:py-32">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeUp}>
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                            {hero.badge}
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
                    >
                        {hero.heading}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="group gap-2 text-base">
                            Start Free Trial
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-2 text-base"
                        >
                            See How It Works
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    className="grid grid-cols-2 gap-6 rounded-2xl border border-border/60 bg-background/70 px-6 py-8 shadow-lg backdrop-blur-sm md:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeIn}
                            className="text-center"
                        >
                            <p className="mb-1 text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
                                {stat.value}
                            </p>
                            <p className="text-sm font-medium text-muted-foreground">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
