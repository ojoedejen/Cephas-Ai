"use client";

import { MessageCircle, Sparkles, Target, Zap } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  {
    icon: MessageCircle,
    title: "Community Focused",
    description: "Dedicated to empowering young people in Sierra Leone and across Africa.",
    color: "bg-[#ff5c35]",
    hoverColor: "group-hover:text-[#ff5c35]",
    iconColor: "text-white",
  },
  {
    icon: Sparkles,
    title: "Practical Learning",
    description: "No dry theory—just real projects and hands-on training with modern AI tools.",
    color: "bg-[#d4e157]",
    hoverColor: "group-hover:text-[#d4e157]",
    iconColor: "text-[#1a1a1a]",
  },
  {
    icon: Target,
    title: "Real World Projects",
    description: "Build web apps, automate processes, and launch sustainable tech projects.",
    color: "bg-[#ff5c35]",
    hoverColor: "group-hover:text-[#ff5c35]",
    iconColor: "text-white",
  },
  {
    icon: Zap,
    title: "Industry Mentorship",
    description: "Get guidance from tech professionals who help you solve real community problems.",
    color: "bg-[#d4e157]",
    hoverColor: "group-hover:text-[#d4e157]",
    iconColor: "text-[#1a1a1a]",
  },
];

export function WhyLearn() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16">
      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-[#1a1a1a] mb-4 font-black text-3xl md:text-5xl">
          Why choose{" "}
          <span className="underline decoration-[#ff5c35] decoration-2 underline-offset-4 gradient-text">
            Cephas AI?
          </span>
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          We focus on turning AI knowledge into real-world skills through hands-on training, mentorship, and community outreach.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 - First Card */}
        <div
          className={`bg-white rounded-3xl p-6 border border-gray-100 hover-lift group card-3d transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#ff5c35] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-[#1a1a1a] mb-2 transition-colors duration-300 group-hover:text-[#ff5c35]">{reasons[0].title}</h3>
          <p className="text-gray-600 text-sm">{reasons[0].description}</p>
        </div>

        {/* Center Image */}
        <div
          className={`md:row-span-2 relative rounded-3xl overflow-hidden min-h-[300px] group transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src="/cephas-ai/coding-session.jpg"
            alt="Cephas AI Session"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Row 1 - Third Card */}
        <div
          className={`bg-white rounded-3xl p-6 border border-gray-100 hover-lift group card-3d transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#d4e157] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Sparkles className="w-5 h-5 text-[#1a1a1a]" />
          </div>
          <h3 className="font-bold text-[#1a1a1a] mb-2 transition-colors duration-300 group-hover:text-[#d4e157]">{reasons[1].title}</h3>
          <p className="text-gray-600 text-sm">{reasons[1].description}</p>
        </div>

        {/* Row 2 - First Card */}
        <div
          className={`bg-white rounded-3xl p-6 border border-gray-100 hover-lift group card-3d transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#ff5c35] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-[#1a1a1a] mb-2 transition-colors duration-300 group-hover:text-[#ff5c35]">{reasons[2].title}</h3>
          <p className="text-gray-600 text-sm">{reasons[2].description}</p>
        </div>

        {/* Row 2 - Third Card */}
        <div
          className={`bg-white rounded-3xl p-6 border border-gray-100 hover-lift group card-3d transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#d4e157] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Zap className="w-5 h-5 text-[#1a1a1a]" />
          </div>
          <h3 className="font-bold text-[#1a1a1a] mb-2 transition-colors duration-300 group-hover:text-[#d4e157]">{reasons[3].title}</h3>
          <p className="text-gray-600 text-sm">{reasons[3].description}</p>
        </div>

        {/* Bottom Image */}
        <div
          className={`relative rounded-3xl overflow-hidden min-h-[200px] group transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Image
            src="/cephas-ai/community-outreach.jpg"
            alt="Community outreach"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}
