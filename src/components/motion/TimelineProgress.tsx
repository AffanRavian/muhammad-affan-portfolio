"use client";

import { useRef } from "react";
import {
  gsap,
  MOTION,
  MOTION_QUERIES,
  type MotionConditions,
  useGSAP,
} from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function TimelineProgress({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const progress = root.querySelector<HTMLElement>(
        "[data-timeline-progress]",
      );
      const entries = Array.from(
        root.querySelectorAll<HTMLElement>("[data-timeline-entry]"),
      );
      const media = gsap.matchMedia();

      media.add(MOTION_QUERIES, (context) => {
        const { isMobile, reduceMotion } =
          context.conditions as MotionConditions;

        if (reduceMotion) return;

        if (progress) {
          gsap.set(progress, {
            opacity: 1,
            scaleY: 0,
            transformOrigin: "top center",
            willChange: "transform",
          });
          gsap.to(progress, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "clamp(top 76%)",
              end: "clamp(bottom 68%)",
              scrub: 0.35,
            },
          });
        }

        entries.forEach((entry) => {
          gsap.set(entry, { willChange: "transform, opacity" });
          gsap.fromTo(
            entry,
            {
              opacity: 0,
              x: isMobile ? 0 : 10,
              y: isMobile ? 14 : 20,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: isMobile ? 0.46 : MOTION.standard,
              ease: MOTION.enterEase,
              clearProps: "opacity,transform,willChange",
              scrollTrigger: {
                trigger: entry,
                start: "clamp(top 84%)",
                once: true,
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={cn("relative", className)}>
      <span
        data-timeline-progress
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px origin-top bg-accent opacity-0"
        aria-hidden
      />
      {children}
    </div>
  );
}
