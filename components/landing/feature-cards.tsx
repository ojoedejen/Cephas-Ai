"use client";

import { ArrowRight, Bell, Plus, Heart, Smile } from "lucide-react";
import Image from "next/image";

export function FeatureCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
      {/* Best Teacher Card */}
      <div className="bg-[#d4e157] rounded-3xl p-6 relative overflow-hidden min-h-[320px] bg-lime-300 hover-lift animate-fade-in-up stagger-1 group">
        {/* Header with badge and bell */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-[#e8f5c8] rounded-full px-3 py-2 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 flex items-center justify-center overflow-hidden bg-card">
              <span className="text-[10px]">&#128104;</span>
            </div>
            <span className="text-sm text-[#1a1a1a] font-black">Expert Mentors</span>
            <ArrowRight className="w-4 h-4 text-[#1a1a1a] transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#8b5cf6] flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
            <Bell className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Purple Squiggle */}
        <div className="my-8">
          <svg viewBox="0 0 200 100" className="w-40 h-24">
            <path
              d="M20 80 Q60 20, 100 50 T180 30"
              stroke="#8b5cf6"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className="animate-draw-line"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="mt-auto">
          <h3 className="text-lg text-[#1a1a1a] mb-2 font-black">
            Expert Mentors Power Every
            <br />
            Student&apos;s Success!
          </h3>
          <p className="text-sm text-gray-700 font-medium">
            Industry professionals dedicated to nurturing
            <br />
            the next generation of African tech talent.
          </p>
        </div>
      </div>

      {/* Join Community Card */}
      <div className="bg-[#f5a688] rounded-3xl p-6 min-h-[320px] flex flex-col hover-lift animate-fade-in-up stagger-2 group">
        <h3 className="text-2xl mb-4 font-black text-foreground">
          Join our AI
          <br />
          community
        </h3>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center mb-4">
          <div className="relative w-full max-w-[200px] aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/cephas-ai/student-laptop.jpg"
              alt="Cephas AI Student"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Members */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-[#f5a688] transition-transform duration-300 hover:scale-110 hover:z-10" />
            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-[#f5a688] transition-transform duration-300 hover:scale-110 hover:z-10" />
            <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-[#f5a688] transition-transform duration-300 hover:scale-110 hover:z-10" />
          </div>
          <span className="font-extrabold text-black">Growing Community</span>
        </div>
      </div>

      {/* Explore Courses Card */}
      <div className="bg-[#c4b5fd] rounded-3xl p-6 min-h-[320px] hover-lift animate-fade-in-up stagger-3 group">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#d4e157] flex items-center justify-center transition-transform duration-300 hover:rotate-90 cursor-pointer bg-lime-300">
            <Plus className="w-5 h-5 text-[#1a1a1a]" />
          </div>
          <span className="text-[#1a1a1a] font-black text-xl bg-lime-300 py-2 rounded-3xl px-2.5">AI Bootcamps</span>
        </div>

        {/* Smart Academy Section */}
        <div className="rounded-2xl p-4 mt-4 bg-lime-300 transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#1a1a1a] font-extrabold">Practical AI Training</span>
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-background transition-all duration-300 hover:bg-red-50 cursor-pointer group/heart">
              <Heart className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover/heart:text-red-500 group-hover/heart:fill-red-500" />
            </div>
          </div>

          {/* Emoji and Tags */}
          <div className="flex items-start gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#d4e157] flex items-center justify-center bg-background animate-bounce-subtle">
              <Smile className="w-6 h-6 text-[#1a1a1a]" />
            </div>
          </div>

          {/* Sticky Notes */}
          <div className="relative h-32">
            <div className="absolute top-0 left-0 bg-[#d4e157] px-3 py-2 rounded-lg transform -rotate-6 shadow-sm bg-background transition-all duration-300 hover:scale-110 hover:-rotate-12 cursor-pointer animate-wiggle" style={{ animationDelay: "0s" }}>
              <span className="text-sm text-[#1a1a1a] italic font-bold">Playful</span>
            </div>
            <div className="absolute top-8 left-16 bg-[#d4e157] px-3 py-2 rounded-lg transform rotate-3 shadow-sm bg-background transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer animate-wiggle" style={{ animationDelay: "0.5s" }}>
              <span className="text-sm text-[#1a1a1a] italic font-bold">Dynamic</span>
            </div>
            <div className="absolute top-0 right-4 bg-[#d4e157] px-3 py-2 rounded-lg transform rotate-12 shadow-sm bg-background transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer animate-wiggle" style={{ animationDelay: "1s" }}>
              <span className="text-sm text-[#1a1a1a] italic font-bold">Engaging</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-[#d4e157] px-3 py-2 rounded-lg transform -rotate-3 shadow-sm bg-background transition-all duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer animate-wiggle" style={{ animationDelay: "1.5s" }}>
              <span className="text-sm text-[#1a1a1a] italic font-bold">Creative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
