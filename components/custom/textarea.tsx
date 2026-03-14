import * as React from "react"

import { Textarea as UiTextarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<typeof UiTextarea>) {
  return <UiTextarea className={cn(className)} {...props} />
}

export { Textarea }
