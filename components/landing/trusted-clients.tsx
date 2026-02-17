"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TrustedClients() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const clients = [
    { name: "waverio", icon: "~" },
    { name: "SquareStone", icon: "◇" },
    { name: "martino", icon: "人" },
    { name: "martino", icon: "人" },
    { name: "Virogan", icon: "V" },
    { name: "VERTEX", icon: "∇" },
  ];

  return (
    <section ref={ref} className="py-12 border-t border-gray-200 overflow-hidden">
      <p
        className={`text-center text-gray-500 mb-8 font-black text-xl transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        Empowering Sierra Leone&apos;s Next Generation
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-gray-700 transition-all duration-700 hover:text-[#ff5c35] hover:scale-110 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="text-lg">{client.icon}</span>
            <span className="text-sm font-black md:text-4xl underline-animation">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
