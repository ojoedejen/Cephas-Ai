"use client";

import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
      {/* Logo */}
      <div className="flex items-center group cursor-pointer">
        <span className="text-white text-xl font-bold transition-transform duration-300 group-hover:scale-105">
          Cephas <span className="text-[#ff5c35]">AI</span>
        </span>
      </div>

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
