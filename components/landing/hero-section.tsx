"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

export function HeroSection() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <section className="text-center py-12 md:py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#ff5c35] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "0s" }} />
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#8b5cf6] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#d4e157] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#f5a688] rounded-full animate-hero-float opacity-40" style={{ animationDelay: "-1s" }} />

      {/* Animated title with text reveal */}
      <div className="relative">
        <h1
          className={`text-4xl text-[#1a1a1a] leading-tight mb-6 md:text-7xl font-black transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span
            className="inline-block animate-text-blur-in"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering Africa&apos;s
          </span>
          <br />
          <span
            className="inline-block relative animate-text-blur-in"
            style={{ animationDelay: "0.5s" }}
          >
            Next Gen with{" "}
            <span className="gradient-text relative">
              AI
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-[#ff5c35] animate-hero-pulse" />
            </span>
          </span>
        </h1>
        <p
          className={`max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 transition-all duration-1000 delay-700 font-medium ${titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
            }`}
        >
          Cephas AI is dedicated to empowering youth in Sierra Leone and across Africa to understand, use, and earn with Artificial Intelligence.
        </p>
      </div>

      {/* Subtitle with blur-in effect */}


      {/* Waitlist Form */}
      <WaitlistForm variant="hero" />
    </section>
  );
}
