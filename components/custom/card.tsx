import * as React from "react"

import {
  Card as ShadcnCard,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
  CardDescription as ShadcnCardDescription,
  CardContent as ShadcnCardContent,
  CardFooter as ShadcnCardFooter,
} from "@/components/ui/card"
import { cn } from "@/lib"

type CardProps = React.ComponentPropsWithoutRef<typeof ShadcnCard>
type CardHeaderProps = React.ComponentPropsWithoutRef<typeof ShadcnCardHeader>
type CardTitleProps = React.ComponentPropsWithoutRef<typeof ShadcnCardTitle>
type CardDescriptionProps = React.ComponentPropsWithoutRef<typeof ShadcnCardDescription>
type CardContentProps = React.ComponentPropsWithoutRef<typeof ShadcnCardContent>
type CardFooterProps = React.ComponentPropsWithoutRef<typeof ShadcnCardFooter>

export const Card = ({ className, ...props }: CardProps) => (
  <ShadcnCard
    className={cn("transition-shadow hover:shadow-lg", className)}
    {...props}
  />
)

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <ShadcnCardHeader className={cn(className)} {...props} />
)

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <ShadcnCardTitle className={cn(className)} {...props} />
)

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <ShadcnCardDescription className={cn(className)} {...props} />
)

export const CardContent = ({ className, ...props }: CardContentProps) => (
  <ShadcnCardContent className={cn(className)} {...props} />
)

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <ShadcnCardFooter className={cn(className)} {...props} />
)
