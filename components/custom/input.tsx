import * as React from "react"

import { Input as UiInput } from "@/components/ui/input"
import { cn } from "@/lib/utils"

function Input({ className, ...props }: React.ComponentProps<typeof UiInput>) {
  return <UiInput className={cn(className)} {...props} />
}

export { Input }
