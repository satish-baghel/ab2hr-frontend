"use client"
import { Button, Card, CardContent, CardHeader, CardTitle, Textfield } from "@/components/custom";
import { siteConfig } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "./actions";
import { loginFormSchema, type LoginFormData } from "./schema";

const LoginPage = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsSubmitting(true);
        setServerError(null);

        try {
            const result = await loginAction(data);

            if (result.success) {
                router.push(result.redirectUrl);
            } else {
                setServerError(result.error);
            }
        } catch (error) {
            setServerError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mx-auto h-screen max-w-6xl px-4 md:px-6">
            <div className="flex justify-end items-center">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        Login to <span className="text-primary font-bold underline">{siteConfig.name}</span>
                    </h1>

                    <Card className="shadow-none border-none">
                        <CardHeader>
                            <CardTitle className="text-lg">Sign in to your account</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {serverError && (
                                <div 
                                    className="mb-4 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm" 
                                    role="alert"
                                    aria-live="polite"
                                >
                                    {serverError}
                                </div>
                            )}

                            <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
                                <Textfield
                                    label="Email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    name="email"
                                    form={form}
                                    required={true}
                                    autoComplete="email"
                                    disabled={isSubmitting}
                                />

                                <Textfield
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    form={form}
                                    required={true}
                                    autoComplete="current-password"
                                    disabled={isSubmitting}
                                    description="8+ characters with uppercase, lowercase, number & special character"
                                />

                                <div className="mt-6 space-y-4">
                                    <Button 
                                        type="submit" 
                                        className="w-full" 
                                        size="lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Signing in..." : "Login"}
                                    </Button>

                                    <div className="text-center">
                                        <Link 
                                            href="/forgot-password" 
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            tabIndex={isSubmitting ? -1 : 0}
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;