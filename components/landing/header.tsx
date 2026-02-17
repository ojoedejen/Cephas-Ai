"use client";

import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] rounded-full animate-fade-in-down">
      <Link href="/" className="flex items-center group cursor-pointer no-underline">
        <div className="relative w-12 h-12 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#ff5c35]/50 active:scale-95">
          <Image
            src="/cephas-ai/logo.png"
            alt="Cephas AI Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col ml-3 transition-all duration-300 group-hover:translate-x-1">
          <span className="text-white text-xl font-black leading-tight">
            Cephas <span className="text-[#ff5c35]">AI</span>
          </span>
          <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            Empowering Africa
          </span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive
                ? "bg-[#ff5c35] text-white flex items-center gap-2 hover-glow"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {isActive && <Home className="w-4 h-4" />}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1a1a1a] border-gray-800">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                      ? "bg-[#ff5c35] text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-3">
        {/* Red dot indicator */}
        <div className="w-6 h-6 rounded-full bg-[#ff5c35] flex items-center justify-center animate-pulse-soft">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </header>
  );
}
