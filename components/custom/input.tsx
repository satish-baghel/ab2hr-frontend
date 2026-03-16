import * as React from "react"

import { Input as ShadcnInput } from "@/components/ui/input"
import { cn } from "@/lib/utils"

function Input({ className, ...props }: React.ComponentProps<typeof ShadcnInput>) {
  return <ShadcnInput className={cn(className)} {...props} />
}

export { Input }
