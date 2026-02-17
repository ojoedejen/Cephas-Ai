"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const footerLinks = {
  ourService: ["AI Bootcamps", "Corporate Training", "Community Outreach", "Project Mentorship"],
  usefulLink: ["About Us", "Our Mission", "Success Stories", "Impact Goals"],
  social: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
};

export function Footer() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer ref={ref} className="py-12 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand & Email */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 transition-transform duration-300 hover:scale-105 cursor-pointer inline-block">
            Cephas <span className="text-[#ff5c35]">AI</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Freetown, Sierra Leone
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your Email Here"
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#ff5c35] focus:shadow-lg focus:shadow-[#ff5c35]/10"
            />
            <button className="w-10 h-10 rounded-full bg-[#ff5c35] flex items-center justify-center transition-all duration-300 hover:bg-[#e54d2a] hover:scale-110 hover:shadow-lg hover:shadow-[#ff5c35]/30 active:scale-95 group">
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Our Service */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h4 className="font-semibold text-[#1a1a1a] mb-4">Our Service</h4>
          <ul className="space-y-2">
            {footerLinks.ourService.map((link, index) => (
              <li
                key={link}
                className={`transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-[#ff5c35] hover:translate-x-1 inline-block underline-animation"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Link */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h4 className="font-semibold text-[#1a1a1a] mb-4">Useful Link</h4>
          <ul className="space-y-2">
            {footerLinks.usefulLink.map((link, index) => (
              <li
                key={link}
                className={`transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-[#ff5c35] hover:translate-x-1 inline-block underline-animation"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h4 className="font-semibold text-[#1a1a1a] mb-4">Social</h4>
          <ul className="space-y-2">
            {footerLinks.social.map((link, index) => (
              <li
                key={link}
                className={`transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-[#ff5c35] hover:translate-x-1 inline-block underline-animation"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">Copyright @ 2024 Cephas AI</p>
        <a
          href="#"
          className="text-sm text-gray-600 transition-all duration-300 hover:text-[#ff5c35] hover:scale-105"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
