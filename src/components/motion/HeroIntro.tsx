"use client";

import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import {
  gsap,
  MOTION,
  MOTION_QUERIES,
  type MotionConditions,
  useGSAP,
} from "@/lib/gsap";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText);

export function HeroIntro({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const root = scope.current;
      if (!root || !contextSafe) return;

      const media = gsap.matchMedia();

      media.add(MOTION_QUERIES, (context) => {
        const { isMobile, reduceMotion } =
          context.conditions as MotionConditions;

        if (reduceMotion) return;

        let active = true;
        let nameSplit: SplitText | null = null;
        let headlineSplit: SplitText | null = null;
        let timeline: gsap.core.Timeline | null = null;

        const runIntro = contextSafe(() => {
          if (!active) return;

          const label = root.querySelector<HTMLElement>("[data-hero-label]");
          const name = root.querySelector<HTMLElement>("[data-hero-name]");
          const headline = root.querySelector<HTMLElement>(
            "[data-hero-headline]",
          );
          const body = root.querySelector<HTMLElement>("[data-hero-body]");
          const actions = Array.from(
            root.querySelectorAll<HTMLElement>("[data-hero-action]"),
          );
          const supporting = Array.from(
            root.querySelectorAll<HTMLElement>("[data-hero-support]"),
          );

          if (!label || !name || !headline || !body) return;

          nameSplit = SplitText.create(name, {
            type: "words,chars",
            mask: "chars",
            aria: "auto",
          });
          headlineSplit = SplitText.create(headline, {
            type: "lines",
            mask: "lines",
            aria: "auto",
          });

          const animatedTargets = [
            label,
            ...nameSplit.chars,
            ...headlineSplit.lines,
            body,
            ...actions,
            ...supporting,
          ];

          gsap.set(animatedTargets, { willChange: "transform, opacity" });

          timeline = gsap.timeline({
            defaults: { ease: MOTION.enterEase },
            onComplete: () => {
              nameSplit?.revert();
              headlineSplit?.revert();
              gsap.set([label, name, headline, body, ...actions, ...supporting], {
                clearProps: "opacity,transform,visibility,willChange",
              });
            },
          });

          timeline
            .from(label, {
              opacity: 0,
              y: isMobile ? -6 : -10,
              duration: isMobile ? 0.32 : 0.42,
            })
            .from(
              nameSplit.chars,
              {
                opacity: 0,
                yPercent: isMobile ? 80 : 105,
                duration: isMobile ? 0.52 : 0.7,
                stagger: isMobile ? 0.018 : 0.028,
              },
              "-=0.18",
            )
            .from(
              headlineSplit.lines,
              {
                opacity: 0,
                yPercent: isMobile ? 75 : 105,
                duration: isMobile ? 0.5 : 0.68,
                stagger: isMobile ? 0.07 : 0.11,
              },
              "-=0.38",
            )
            .from(
              body,
              {
                opacity: 0,
                y: isMobile ? 12 : 18,
                duration: isMobile ? 0.42 : 0.55,
              },
              "-=0.34",
            )
            .from(
              actions,
              {
                opacity: 0,
                y: isMobile ? 10 : 14,
                duration: isMobile ? 0.36 : 0.45,
                stagger: isMobile ? 0.05 : 0.08,
              },
              "-=0.3",
            )
            .from(
              supporting,
              {
                opacity: 0,
                y: isMobile ? 8 : 12,
                duration: isMobile ? MOTION.micro : 0.45,
                stagger: 0.08,
              },
              "-=0.24",
            );
        });

        const fontReady = document.fonts?.ready ?? Promise.resolve();
        void fontReady.then(runIntro).catch(runIntro);

        return () => {
          active = false;
          timeline?.kill();
          nameSplit?.revert();
          headlineSplit?.revert();
        };
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
