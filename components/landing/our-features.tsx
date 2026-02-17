"use client";

import React, { useState } from "react";
import { MessageSquare, Target, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: MessageSquare,
    title: "AI Training & Bootcamps",
    description:
      "Intensive AI bootcamps where participants build real applications and solve community problems.",
  },
  {
    icon: Target,
    title: "Corporate AI Training",
    description:
      "Training businesses and NGOs on task automation, data analysis, and ethical AI use.",
  },
  {
    icon: RefreshCw,
    title: "Community Outreach",
    description:
      "Introducing students in villages and schools to the future of technology and AI literacy.",
  },
];

export function OurFeatures() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-16">
      {/* Header */}
      <div
        className={`flex flex-col md:flex-row md:items-start md:justify-between mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-3xl text-foreground mb-4 md:mb-0 font-black md:text-5xl">
          What <span className="decoration-primary decoration-2 underline-offset-4 underline text-chart-1">We Do</span>
        </h2>
        <p className="text-muted-foreground max-w-sm font-semibold text-xs">
          Cephas AI is dedicated to bridging the gap between education and industry through hands-on AI training and project mentorship.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start my-3">
        {/* Image */}
        <div
          ref={imageRef}
          className={`relative aspect-[4/3] rounded-3xl overflow-hidden group card-3d transition-all duration-700 ${imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <Image
            src="/cephas-ai/ai-training.jpg"
            alt="Cephas AI Training"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Features List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex group cursor-pointer border border-gray-100 bg-white gap-5 py-6 px-4 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 card-3d ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg bg-purple-700">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2 transition-colors duration-300 group-hover:text-purple-700">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
