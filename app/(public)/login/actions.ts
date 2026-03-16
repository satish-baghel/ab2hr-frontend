"use server"

import { z } from "zod"
import { loginFormSchema, type LoginFormData } from "./schema"

export type LoginResult = 
  | { success: true; redirectUrl: string }
  | { success: false; error: string }

export async function loginAction(data: LoginFormData): Promise<LoginResult> {
  try {
    const validated = loginFormSchema.parse(data)

    // TODO: Replace with actual API call to backend
    // Example: const response = await fetch(`${process.env.API_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validated),
    // })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - replace with actual logic
    if (validated.email === "test@example.com" && validated.password === "Test@1234") {
      return {
        success: true,
        redirectUrl: "/dashboard",
      }
    }

    // Mock validation error
    return {
      success: false,
      error: "Invalid email or password. Please try again.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs.",
      }
    }

    console.error("Login error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
