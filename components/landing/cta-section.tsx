"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaitlistForm } from "./waitlist-form";

export function CTASection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16">
      <div
        className={`relative bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-center overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 animate-gradient-shift" />

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#ff5c35] rounded-full animate-hero-float opacity-60" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#8b5cf6] rounded-full animate-hero-float opacity-40" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-[#d4e157] rounded-full animate-hero-float opacity-50" style={{ animationDelay: "-4s" }} />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#ff5c35] animate-hero-pulse" />
          </div>

          <h2
            className={`text-2xl mb-4 font-black md:text-5xl text-white transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            Join the Next Generation
            <br />
            of <span className="gradient-text text-rose-600">AI</span> Innovators
          </h2>
          <p
            className={`mb-8 text-lg font-medium text-gray-300 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            Equipping African youth with practical AI skills to create opportunities and solve real community problems.
          </p>

          {/* Waitlist Form */}
          <div
            className={`max-w-md mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "600ms" }}
          >
            <WaitlistForm variant="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
