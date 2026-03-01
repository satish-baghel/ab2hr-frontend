import * as React from "react"

import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib"

type ButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <ShadcnButton className={cn("cursor-pointer", className)} {...props}>
      {children}
    </ShadcnButton>
  )
}
