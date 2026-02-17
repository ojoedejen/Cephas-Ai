"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
    variant?: "hero" | "cta";
}

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState<"email" | "details" | "success">("email");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Move to details step
        setStep("details");
    };

    const handleDetailsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) {
            toast({
                title: "Missing Information",
                description: "Please provide your name and phone number.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name, phone }),
            });

            const data = await response.json();

            if (response.ok) {
                setStep("success");
                toast({
                    title: "Welcome aboard! 🎉",
                    description: "Check your email for a confirmation message.",
                });
            } else {
                throw new Error(data.error || "Failed to join waitlist");
            }
        } catch (error) {
            toast({
                title: "Oops!",
                description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setEmail("");
        setName("");
        setPhone("");
        setStep("email");
    };

    if (step === "success") {
        return (
            <div className="max-w-md mx-auto animate-fade-in-up">
                <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 bg-green-50 text-green-700 rounded-2xl font-medium animate-success border border-green-200">
                    <CheckCircle className="w-12 h-12 animate-scale-in" />
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-1">You're on the waitlist!</h3>
                        <p className="text-sm text-green-600">
                            We've sent a confirmation email to <strong>{email}</strong>
                        </p>
                    </div>
                    <Button
                        onClick={handleReset}
                        variant="outline"
                        className="mt-2 border-green-300 text-green-700 hover:bg-green-100"
                    >
                        Join Another Person
                    </Button>
                </div>
            </div>
        );
    }

    if (step === "details") {
        return (
            <div className="max-w-md mx-auto animate-fade-in-up">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Almost there! 🎯</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Please provide your details to complete your registration.
                    </p>

                    <form onSubmit={handleDetailsSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                required
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number *
                            </label>
                            <Input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+1 (555) 000-0000"
                                required
                                className="w-full"
                            />
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                            <strong>Email:</strong> {email}
                        </div>

                        <div className="flex gap-3">
                            <Button
                                type="button"
                                onClick={() => setStep("email")}
                                variant="outline"
                                className="flex-1"
                                disabled={isSubmitting}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-[#ff5c35] hover:bg-[#e54d2a] text-white"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Submit
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to join waitlist"
                        required
                        className="w-full px-6 py-4 bg-white rounded-full text-[#1a1a1a] border-2 border-gray-200 outline-none transition-all duration-300 focus:border-[#ff5c35] focus:shadow-lg focus:shadow-[#ff5c35]/20 placeholder:text-gray-400 hover:border-gray-300"
                    />
                    {/* Animated border glow on focus */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff5c35] to-[#8b5cf6] opacity-0 -z-10 blur-md transition-opacity duration-300 group-focus-within:opacity-30" />
                </div>
                <button
                    type="submit"
                    className="relative px-8 py-4 bg-[#ff5c35] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#e54d2a] hover:scale-105 hover:shadow-xl hover:shadow-[#ff5c35]/30 active:scale-95 flex items-center justify-center gap-2 group ripple-effect overflow-hidden"
                >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
            </form>
            <p className="mt-4 text-xs text-gray-500 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                Join 100+ students already on the waitlist for our{" "}
                <span className="font-semibold text-[#ff5c35]">intensive AI Bootcamps</span>
            </p>
        </div>
    );
}
