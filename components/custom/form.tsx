// export {
//   useFormField,
//   Form,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
//   FormField,
// } from "@/components/ui/form"
import * as React from "react"
import {
  Field as ShadcnField,
  FieldLabel as ShadcnFieldLabel,
  FieldDescription as ShadcnFieldDescription,
  FieldError as ShadcnFieldError,
  FieldGroup as ShadcnFieldGroup,
  FieldLegend as ShadcnFieldLegend,
  FieldSeparator as ShadcnFieldSeparator,
  FieldSet as ShadcnFieldSet,
  FieldContent as ShadcnFieldContent,
  FieldTitle as ShadcnFieldTitle,

  // FormField as ShadcnFormField,
} from "../ui/field";
import { cn } from "@/lib";


type FieldProps = React.ComponentPropsWithoutRef<typeof ShadcnField>
type FieldLabelProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldLabel>
type FieldDescriptionProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldDescription>
type FieldErrorProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldError>
type FieldGroupProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldGroup>
type FieldLegendProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldLegend>
type FieldSeparatorProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldSeparator>
type FieldSetProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldSet>
type FieldContentProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldContent>
type FieldTitleProps = React.ComponentPropsWithoutRef<typeof ShadcnFieldTitle>






export const Field = ({ className, ...props }: FieldProps) => {
  return <ShadcnField
    className={cn(className)}
    {...props}
  />
}
export const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  return <ShadcnFieldLabel className={cn(className)} {...props} />
}

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  return <ShadcnFieldDescription className={cn(className)} {...props} />
}

export const FieldError = ({ className, ...props }: FieldErrorProps) => {
  return <ShadcnFieldError className={cn(className)} {...props} />
}

export const FieldGroup = ({ className, ...props }: FieldGroupProps) => {
  return <ShadcnFieldGroup className={cn(className)} {...props} />
}

export const FieldLegend = ({ className, ...props }: FieldLegendProps) => {
  return <ShadcnFieldLegend className={cn(className)} {...props} />
}

export const FieldSeparator = ({ className, ...props }: FieldSeparatorProps) => {
  return <ShadcnFieldSeparator className={cn(className)} {...props} />
}

export const FieldSet = ({ className, ...props }: FieldSetProps) => {
  return <ShadcnFieldSet className={cn(className)} {...props} />
}

export const FieldContent = ({ className, ...props }: FieldContentProps) => {
  return <ShadcnFieldContent className={cn(className)} {...props} />
}

export const FieldTitle = ({ className, ...props }: FieldTitleProps) => {
  return <ShadcnFieldTitle className={cn(className)} {...props} />
}
