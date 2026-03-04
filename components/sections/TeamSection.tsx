"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

import { Badge, Button, Card, CardContent } from "@/components/custom"
import { aboutData } from "@/data"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
}

const MotionCard = motion.create(Card)

export const TeamSection = () => {
    const { team, cta } = aboutData

    return (
        <>
            {/* Team */}
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
                            {team.badge}
                        </Badge>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            {team.heading}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                            {team.description}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {team.members.map((member) => (
                            <MotionCard
                                key={member.name}
                                variants={cardVariants}
                                className="group overflow-hidden border-border/60 bg-background text-center transition-shadow hover:shadow-md"
                            >
                                <CardContent className="p-6">
                                    {/* Avatar */}
                                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-xl font-bold text-primary-foreground shadow-md">
                                        {member.initials}
                                    </div>
                                    <h3 className="mb-0.5 text-base font-semibold text-foreground">
                                        {member.name}
                                    </h3>
                                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                                        {member.role}
                                    </p>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </CardContent>
                            </MotionCard>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <motion.div
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[#2E1065] px-6 py-16 text-center text-primary-foreground shadow-2xl md:px-16 md:py-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Decorative blurs */}
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-16 -left-16 h-[300px] w-[300px] rounded-full bg-secondary/[0.08] blur-3xl" />
                            <div className="absolute -right-16 -bottom-16 h-[250px] w-[250px] rounded-full bg-primary-foreground/[0.06] blur-3xl" />
                        </div>

                        <div className="relative">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                {cta.heading}
                            </h2>
                            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                                {cta.description}
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="group gap-2 text-base font-semibold"
                                >
                                    {cta.primaryCta}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    {cta.secondaryCta}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
