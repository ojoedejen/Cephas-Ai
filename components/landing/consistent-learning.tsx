"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { useScrollAnimation, useCountUp } from "../../hooks/use-scroll-animation";

export function ConsistentLearning() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, count: hoursCount } = useCountUp(400, 2000);
  const { ref: minutesRef, count: minutesCount } = useCountUp(100000, 2500);

  return (
    <section ref={ref} className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Image with Stats Card */}
        <div
          className={`relative group transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-3d">
            <Image
              src="/cephas-ai/student-laptop.jpg"
              alt="Cephas AI Student Portfolio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Stats Overlay Card */}
          <div
            className={`absolute top-4 left-4 bg-[#ff5c35] rounded-2xl p-4 text-white hover-scale cursor-pointer transition-all duration-700 ${isInView ? "opacity-100 translate-y-0 animate-float" : "opacity-0 -translate-y-4"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-xs mb-1">Project</p>
            <p className="text-xs mb-2">completion rate</p>
            <div className="flex items-center gap-1 text-xs text-green-300 mb-2">
              <TrendingUp className="w-3 h-3 animate-bounce-subtle" />
              <span>&#8593; 90%</span>
            </div>
            <p className="text-4xl font-bold">95%</p>
          </div>
        </div>

        {/* Right - Content */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="text-3xl text-[#1a1a1a] mb-4 font-black md:text-5xl">
            Building Africa&apos;s{" "}
            <span className="underline decoration-[#ff5c35] decoration-2 underline-offset-4 gradient-text text-orange-600">
              AI Talent
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-base font-medium">
            Our goal is to bridge the gap between education and industry by helping students and professionals build practical solutions using modern AI tools.
          </p>

          {/* Stats Grid with count-up animation */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              ref={statsRef}
              className="border border-gray-200 rounded-2xl p-4 bg-violet-300 hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl card-3d"
            >
              <p className="text-2xl font-bold text-[#1a1a1a] mb-1">{hoursCount}+</p>
              <p className="text-xs text-gray-600 font-medium">
                Hours of hands-on training and mentorship sessions.
              </p>
            </div>
            <div
              ref={minutesRef}
              className="border border-gray-200 rounded-2xl p-4 bg-lime-300 hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl card-3d"
            >
              <p className="text-2xl font-bold text-[#1a1a1a] mb-1">{minutesCount.toLocaleString()}+</p>
              <p className="text-xs text-gray-600 font-medium">
                Individuals introducing to AI through outreach.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="relative px-6 py-3 bg-[#ff5c35] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#e54d2a] hover:scale-105 hover:shadow-lg hover:shadow-[#ff5c35]/30 active:scale-95 ripple-effect overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
            <button className="px-6 py-3 text-[#1a1a1a] rounded-full font-bold border-[#ff5c35] border-solid border-2 transition-all duration-300 hover:bg-[#ff5c35] hover:text-white hover:scale-105 active:scale-95">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
