"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const MOTION = {
  micro: 0.35,
  standard: 0.6,
  hero: 0.9,
  enterEase: "power2.out",
  scrollEase: "power1.inOut",
} as const;

export const MOTION_QUERIES = {
  isDesktop: "(min-width: 1024px)",
  isTablet: "(min-width: 768px) and (max-width: 1023px)",
  isMobile: "(max-width: 767px)",
  canHover: "(min-width: 768px) and (hover: hover) and (pointer: fine)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export type MotionConditions = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  canHover: boolean;
  reduceMotion: boolean;
};

export { gsap, ScrollTrigger, useGSAP };
