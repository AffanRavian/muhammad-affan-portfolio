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

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  start?: string;
};

export function AnimatedReveal({
  children,
  className,
  stagger = 0.1,
  start = "clamp(top 84%)",
}: AnimatedRevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const media = gsap.matchMedia();

      media.add(MOTION_QUERIES, (context) => {
        const { isMobile, reduceMotion } =
          context.conditions as MotionConditions;

        if (reduceMotion) return;

        const markedItems = Array.from(
          root.querySelectorAll<HTMLElement>("[data-motion-item]"),
        );
        const targets = markedItems.length > 0 ? markedItems : [root];

        gsap.set(targets, { willChange: "transform, opacity" });
        gsap.fromTo(
          targets,
          {
            opacity: 0,
            y: isMobile ? 16 : 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.48 : MOTION.standard,
            ease: MOTION.enterEase,
            stagger: isMobile ? Math.min(stagger, 0.06) : stagger,
            clearProps: "opacity,transform,willChange",
            scrollTrigger: {
              trigger: root,
              start,
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={cn(className)}>
      {children}
    </div>
  );
}
