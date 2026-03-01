import * as React from "react"

import { Badge as ShadcnBadge } from "@/components/ui/badge"
import { cn } from "@/lib"

type BadgeProps = React.ComponentPropsWithoutRef<typeof ShadcnBadge>

export const Badge = ({ className, ...props }: BadgeProps) => (
  <ShadcnBadge className={cn(className)} {...props} />
)
