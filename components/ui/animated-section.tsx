"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "scale" 
  | "rotate" 
  | "blur"
  | "slide-up"
  | "slide-down"
  | "flip";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-75",
    animate: "opacity-100 scale-100",
  },
  rotate: {
    initial: "opacity-0 rotate-12 scale-90",
    animate: "opacity-100 rotate-0 scale-100",
  },
  blur: {
    initial: "opacity-0 blur-lg",
    animate: "opacity-100 blur-0",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-24",
    animate: "opacity-100 translate-y-0",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-24",
    animate: "opacity-100 translate-y-0",
  },
  flip: {
    initial: "opacity-0 rotateX-90",
    animate: "opacity-100 rotateX-0",
  },
};

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({ threshold });
  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Staggered children animation wrapper
interface StaggeredChildrenProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  childClassName?: string;
}

export function StaggeredChildren({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 600,
  className,
  childClassName,
}: StaggeredChildrenProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const styles = animationStyles[animation];

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all ease-out",
            isInView ? styles.animate : styles.initial,
            childClassName
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
