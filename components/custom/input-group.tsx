import * as React from "react"
import {
  InputGroup as ShadcnInputGroup,
  InputGroupAddon as ShadcnInputGroupAddon,
  InputGroupButton as ShadcnInputGroupButton,
  InputGroupText as ShadcnInputGroupText,
  InputGroupInput as ShadcnInputGroupInput,
  InputGroupTextarea as ShadcnInputGroupTextarea,
} from "../ui/input-group"
import { cn } from "@/lib"

type InputGroupProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroup>
type InputGroupAddonProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroupAddon>
type InputGroupButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroupButton>
type InputGroupTextProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroupText>
type InputGroupInputProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroupInput>
type InputGroupTextareaProps = React.ComponentPropsWithoutRef<typeof ShadcnInputGroupTextarea>

export const InputGroup = ({ className, ...props }: InputGroupProps) => {
  return <ShadcnInputGroup className={cn(className)} {...props} />
}

export const InputGroupAddon = ({ className, ...props }: InputGroupAddonProps) => {
  return <ShadcnInputGroupAddon className={cn(className)} {...props} />
}

export const InputGroupButton = ({ className, ...props }: InputGroupButtonProps) => {
  return <ShadcnInputGroupButton className={cn(className)} {...props} />
}

export const InputGroupText = ({ className, ...props }: InputGroupTextProps) => {
  return <ShadcnInputGroupText className={cn(className)} {...props} />
}

export const InputGroupInput = ({ className, ...props }: InputGroupInputProps) => {
  return <ShadcnInputGroupInput className={cn(className)} {...props} />
}

export const InputGroupTextarea = ({ className, ...props }: InputGroupTextareaProps) => {
  return <ShadcnInputGroupTextarea className={cn(className)} {...props} />
}

// export default InputGroup

