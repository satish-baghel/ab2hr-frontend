/**
 * TextField Component
 * 
 * A form-integrated text input component with enhanced accessibility and SEO features:
 * - Proper label-input association using htmlFor/id
 * - ARIA attributes for screen readers (aria-invalid, aria-describedby)
 * - Required field indicators
 * - Optional field descriptions
 * - Improved spacing with Tailwind utility classes
 * - Password visibility toggle with accessible labels
 * - Support for multiple input types (text, email, password, tel, url, number)
 * - AutoComplete attributes for better browser integration
 * - Disabled state support
 */
"use client"
import * as React from "react";
import { Controller } from "react-hook-form";
import { EyeIcon, EyeOffIcon, InfoIcon } from "lucide-react";
import { Field, FieldLabel, FieldContent, FieldError, FieldGroup, FieldDescription } from "./form"
import { Input } from "./input"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "./input-group";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./tooltip";

interface TextfieldProps {
    label: string;
    name: string;
    type?: "text" | "password" | "email" | "tel" | "url" | "number";
    placeholder?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    autoComplete?: string;
    form: any;
    children?: React.ReactNode;
}

const Textfield = ({
    form,
    type = "text",
    placeholder,
    label,
    name,
    description,
    required = false,
    disabled = false,
    autoComplete,
}: TextfieldProps) => {
    return (
        <FieldGroup className="mb-4">
            <Controller
                control={form.control}
                name={name}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-0">
                        <FieldLabel
                            data-invalid={fieldState.invalid}
                            htmlFor={name}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 gap-0 flex items-center justify-between"
                        >
                            <div className="gap-2">
                                <span>{label}</span>
                                {required ? <span className="text-destructive ml-0.5" aria-label="required">*</span> : null}
                            </div>

                            {description ? (
                                <div className="gap-1">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" align="center" className="text-center" >
                                                {description}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            ) : null}
                        </FieldLabel>



                        <FieldContent className="gap-0">
                            {type === 'password' ? (
                                <PasswordInput
                                    data-invalid={fieldState.invalid}
                                    id={name}
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    autoComplete={autoComplete}
                                    required={required}
                                    aria-invalid={fieldState.invalid}
                                    aria-describedby={fieldState.invalid ? `${name}-error` : description ? `${name}-description` : undefined}
                                    {...field}
                                />
                            ) : (
                                <Input
                                    data-invalid={fieldState.invalid}
                                    id={name}
                                    type={type}
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    autoComplete={autoComplete}
                                    required={required}
                                    aria-invalid={fieldState.invalid}
                                    aria-describedby={fieldState.invalid ? `${name}-error` : description ? `${name}-description` : undefined}
                                    {...field}
                                />
                            )}

                            {fieldState.invalid && fieldState.error && (
                                <FieldError
                                    data-invalid={fieldState.invalid}
                                    errors={[fieldState.error]}
                                    id={`${name}-error`}
                                    className="text-sm text-destructive mt-1.5"
                                />
                            )}
                        </FieldContent>
                    </Field>
                )}
            />
        </FieldGroup>
    )
}

const PasswordInput = ({ ...props }: React.ComponentProps<typeof InputGroupInput>) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <InputGroup>
            <InputGroupInput
                {...props}
                type={showPassword ? "text" : "password"}
            />
            <InputGroupAddon align="inline-end">
                <InputGroupButton
                    variant="ghost"
                    size="icon-sm"
                    className="ml-1"
                    onClick={togglePasswordVisibility}
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
};

export { Textfield };