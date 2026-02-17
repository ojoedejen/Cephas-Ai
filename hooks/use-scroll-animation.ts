"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook to detect when an element enters the viewport.
 * Returns a ref to attach to the element and a boolean indicating if it's in view.
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<any>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isInView };
}

/**
 * Custom hook to count up from 0 to a target number when the element enters the viewport.
 * Returns a ref to attach to the element and the current count.
 */
export function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Use easeOutQuad for smoother counting
            const easedProgress = 1 - (1 - progress) * (1 - progress);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(step);
            }
        };

        animationFrameId = window.requestAnimationFrame(step);

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isInView, end, duration]);

    return { ref, count };
}
