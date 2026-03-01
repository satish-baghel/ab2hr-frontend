import * as React from "react"

import { Separator as ShadcnSeparator } from "@/components/ui/separator"
import { cn } from "@/lib"

type SeparatorProps = React.ComponentPropsWithoutRef<typeof ShadcnSeparator>

export const Separator = ({ className, ...props }: SeparatorProps) => (
  <ShadcnSeparator className={cn(className)} {...props} />
)
