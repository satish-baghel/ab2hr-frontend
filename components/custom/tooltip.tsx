

import * as React from "react"
import {
  Tooltip as ShadcnTooltip,
  TooltipTrigger as ShadcnTooltipTrigger,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
} from "../ui/tooltip"
import { cn } from "@/lib"

type TooltipProviderProps = React.ComponentPropsWithoutRef<typeof ShadcnTooltipProvider>
type TooltipProps = React.ComponentPropsWithoutRef<typeof ShadcnTooltip>
type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof ShadcnTooltipTrigger>
type TooltipContentProps = React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>

export const TooltipProvider = ({ ...props }: TooltipProviderProps) => {
  return <ShadcnTooltipProvider {...props} />
}

export const Tooltip = ({ ...props }: TooltipProps) => {
  return <ShadcnTooltip {...props} />
}

export const TooltipTrigger = ({ className, ...props }: TooltipTriggerProps) => {
  return <ShadcnTooltipTrigger className={cn(className)} {...props} />
}


export const TooltipContent = ({ className, ...props }: TooltipContentProps) => {
  return <ShadcnTooltipContent className={cn('', className)}
    {...props} />
}
