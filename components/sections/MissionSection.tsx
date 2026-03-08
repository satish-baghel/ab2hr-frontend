"use client"

import { motion } from "motion/react"
import {
    Target,
    ShieldCheck,
    Users,
    Zap,
    type LucideProps,
} from "lucide-react"
import type { ComponentType } from "react"

import { Badge, Card, CardContent } from "@/components/custom"
import { aboutData } from "@/data"

type IconName = "Target" | "ShieldCheck" | "Users" | "Zap"

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
    Target,
    ShieldCheck,
    Users,
    Zap,
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
}

const MotionCard = motion.create(Card)

export const MissionSection = () => {
    const { mission, story } = aboutData

    return (
        <>
            {/* Mission & Values */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <motion.div
                        className="mx-auto mb-14 max-w-2xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            variant="outline"
                            className="mb-4 border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                            {mission.badge}
                        </Badge>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            {mission.heading}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                            {mission.description}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {mission.values.map((value) => {
                            const Icon = iconMap[value.icon as IconName]
                            return (
                                <MotionCard
                                    key={value.title}
                                    variants={cardVariants}
                                    className="group border-border/60 bg-background transition-shadow hover:shadow-md"
                                >
                                    <CardContent className="p-6">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                                            {Icon && <Icon className="h-6 w-6" />}
                                        </div>
                                        <h3 className="mb-2 text-base font-semibold text-foreground">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </MotionCard>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="relative overflow-hidden bg-accent/30 py-20 md:py-28">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-primary/[0.05] blur-3xl" />
                    <div className="absolute -bottom-20 right-1/4 h-[300px] w-[300px] rounded-full bg-secondary/[0.06] blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
                        {/* Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge
                                variant="outline"
                                className="mb-4 border-primary/20 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                            >
                                {story.badge}
                            </Badge>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                {story.heading}
                            </h2>
                            <div className="space-y-4">
                                {story.paragraphs.map((para, i) => (
                                    <p
                                        key={i}
                                        className="text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]"
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Visual card stack */}
                        <motion.div
                            className="relative flex flex-col gap-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {[
                                {
                                    label: "2021",
                                    text: "Founded in Bengaluru with a focused team of 5.",
                                },
                                {
                                    label: "2022",
                                    text: "Launched payroll automation for our first 20 customers.",
                                },
                                {
                                    label: "2023",
                                    text: "Expanded to attendance, leave, and employee self-service.",
                                },
                                {
                                    label: "2024",
                                    text: "Crossed 200+ companies managing their HR on QCUBE.",
                                },
                            ].map((milestone) => (
                                <div
                                    key={milestone.label}
                                    className="flex items-start gap-4 rounded-xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur-sm"
                                >
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                                        {milestone.label}
                                    </span>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {milestone.text}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
