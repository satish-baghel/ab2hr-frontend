"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Button,
  // Form,
  // FormControl,
  // FormField,
  // FormItem,
  // FormLabel,
  // FormMessage,
  // Input,
  // Textarea,
} from "@/components/custom"

const contactFormSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters."),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const defaultValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const handleSubmit = async (values: ContactFormValues) => {
    await Promise.resolve(values)
    setIsSubmitted(true)
    form.reset(defaultValues)
  }

  return (
    <div className="bg-card shadow-sm border rounded-xl p-6 lg:p-8">
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" noValidate>
          {isSubmitted ? (
            <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
              Thank you for contacting us. Our team will reach out within 24 hours.
            </p>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      autoComplete="given-name"
                      onChange={(event) => {
                        if (isSubmitted) {
                          setIsSubmitted(false)
                        }
                        field.onChange(event)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      autoComplete="family-name"
                      onChange={(event) => {
                        if (isSubmitted) {
                          setIsSubmitted(false)
                        }
                        field.onChange(event)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@company.com"
                    autoComplete="email"
                    onChange={(event) => {
                      if (isSubmitted) {
                        setIsSubmitted(false)
                      }
                      field.onChange(event)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    className="resize-y"
                    placeholder="How can we help you?"
                    onChange={(event) => {
                      if (isSubmitted) {
                        setIsSubmitted(false)
                      }
                      field.onChange(event)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full mt-2" type="submit" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form> */}
    </div>
  )
}
