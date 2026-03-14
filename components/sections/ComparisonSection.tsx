"use client"

import { motion } from "motion/react"
import { Check, Minus, Zap } from "lucide-react"

import { Badge } from "@/components/custom"
import { comparisonData } from "@/data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export const ComparisonSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm"
          >
            {comparisonData.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {comparisonData.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {comparisonData.description}
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl border border-border/50 bg-card/50 shadow-2xl shadow-primary/5 backdrop-blur-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Header Row */}
          <div className="sticky top-0 z-10 grid grid-cols-4 items-end border-b border-border/50 bg-card/80 p-4 pb-6 pt-8 text-sm font-semibold backdrop-blur-xl md:p-6 md:pb-8 lg:text-base">
            <div className="col-span-2 text-muted-foreground">Capabilities & Features</div>
            <div className="relative flex flex-col items-center justify-center">
              {/* Highlight background for Abtwo HR column */}
              <div className="absolute -inset-x-2 -bottom-6 -top-24 -z-10 rounded-t-2xl bg-primary/[0.03] ring-1 ring-inset ring-primary/10"></div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <span className="text-lg font-bold text-primary">HORIZEN</span>
            </div>
            <div className="flex flex-col items-center justify-center text-muted-foreground/80">
              <span className="text-lg font-medium">Others</span>
            </div>
          </div>

          <div className="flex flex-col">
            {comparisonData.categories.map((category, categoryIdx) => (
              <div key={category.title} className="flex flex-col">
                {/* Category Header */}
                <div className="border-y border-border/50 bg-muted/30 px-4 py-4 md:px-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                    {category.title}
                  </h3>
                </div>

                {/* Features within Category */}
                <div className="divide-y divide-border/50">
                  {category.features.map((feature, featureIdx) => (
                    <motion.div
                      key={feature.name}
                      variants={itemVariants}
                      className="group relative grid grid-cols-4 items-center p-4 transition-all duration-300 hover:bg-muted/30 md:p-6"
                    >
                      {/* Highlight background trail for Abtwo column */}
                      <div className="absolute inset-y-0 left-1/2 w-1/4 -translate-y-[1px] bg-primary/[0.02] transition-colors group-hover:bg-primary/[0.04]"></div>

                      {/* Feature Name & Description */}
                      <div className="col-span-2 pr-4 lg:pr-8">
                        <div className="text-sm font-semibold text-foreground lg:text-base">
                          {feature.name}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground/80 lg:text-sm">
                          {feature.description}
                        </div>
                      </div>

                      {/* Abtwo Column */}
                      <div className="relative z-10 flex items-center justify-center">
                        {feature.abtwo ? (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-inset ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                            <Check className="h-5 w-5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <Minus className="h-5 w-5 text-muted-foreground/30" />
                        )}
                      </div>

                      {/* Others Column */}
                      <div className="relative z-10 flex items-center justify-center text-center">
                        {typeof feature.others === "boolean" ? (
                          feature.others ? (
                            <Check className="h-5 w-5 text-muted-foreground/50" />
                          ) : (
                            <Minus className="h-5 w-5 text-muted-foreground/30" />
                          )
                        ) : (
                          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                            {feature.others}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom highlight cap for Abtwo HR column */}
          <div className="grid grid-cols-4 p-4 md:p-6">
            <div className="col-span-2"></div>
            <div className="relative h-2">
              <div className="absolute -inset-x-2 -bottom-6 -top-4 -z-10 rounded-b-2xl bg-primary/[0.03] ring-1 ring-inset ring-primary/10"></div>
            </div>
            <div></div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
