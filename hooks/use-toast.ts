"use client";

import { useState, useEffect } from "react";

// A simplified version of the shadcn use-toast hook
// since the actual UI components might be missing.

interface Toast {
    id: string;
    title?: string;
    description?: string;
    variant?: "default" | "destructive";
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = ({ title, description, variant = "default" }: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { id, title, description, variant };

        setToasts((prev) => [...prev, newToast]);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);

        // Also log to console for debugging since UI might be missing
        console.log(`Toast [${variant}]: ${title} - ${description}`);

        // For now, if it's destructive, maybe alert the user if no UI
        if (variant === "destructive" && typeof window !== "undefined") {
            // alert(`${title}\n${description}`);
        }
    };

    return {
        toast,
        toasts,
        dismiss: (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id)),
    };
}
