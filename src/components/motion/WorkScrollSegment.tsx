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

export function WorkScrollSegment({
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
      if (!root) return;

      const media = gsap.matchMedia();

      media.add(MOTION_QUERIES, (context) => {
        const { isDesktop, isMobile, canHover, reduceMotion } =
          context.conditions as MotionConditions;

        if (reduceMotion) return;

        const cards = Array.from(
          root.querySelectorAll<HTMLElement>("[data-project-preview]"),
        );
        const listenerCleanups: Array<() => void> = [];

        cards.forEach((card) => {
          const mediaBlock = card.querySelector<HTMLElement>(
            "[data-project-media]",
          );
          const visual = card.querySelector<HTMLElement>(
            "[data-motion-visual]",
          );
          const image = card.querySelector<HTMLElement>("[data-motion-image]");
          const copy = card.querySelector<HTMLElement>("[data-project-copy]");
          const copyItems = copy ? Array.from(copy.children) : [];
          const title = copy?.querySelector<HTMLElement>("h3") ?? null;
          const link = card.querySelector<HTMLElement>("a[href]");
          const reverse = card.dataset.projectReverse === "true";
          const direction = reverse ? 1 : -1;

          if (!mediaBlock || !copy || !visual) return;

          const activeTargets = [mediaBlock, visual, image, ...copyItems].filter(
            (target): target is HTMLElement => target !== null,
          );
          gsap.set(activeTargets, { willChange: "transform, opacity" });

          const reveal = gsap.timeline({
            defaults: { ease: MOTION.enterEase },
            scrollTrigger: {
              trigger: card,
              start: "clamp(top 82%)",
              once: true,
            },
          });

          reveal
            .fromTo(
              mediaBlock,
              {
                opacity: 0,
                x: isDesktop ? direction * 26 : 0,
                y: isDesktop ? 0 : isMobile ? 14 : 18,
                clipPath:
                  isDesktop && reverse
                    ? "inset(0 0 0 8%)"
                    : isDesktop
                      ? "inset(0 8% 0 0)"
                      : "inset(8% 0 0 0)",
              },
              {
                opacity: 1,
                x: 0,
                y: 0,
                clipPath: "inset(0 0 0 0)",
                duration: isMobile ? 0.5 : 0.72,
                clearProps: "opacity,transform,clipPath,willChange",
              },
            )
            .fromTo(
              image,
              { scale: isMobile ? 1.02 : 1.04 },
              {
                scale: 1,
                duration: isMobile ? 0.55 : 0.82,
                clearProps: "transform,willChange",
              },
              "<",
            )
            .fromTo(
              copyItems,
              { opacity: 0, y: isMobile ? 12 : 18 },
              {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.42 : 0.56,
                stagger: isMobile ? 0.045 : 0.07,
                clearProps: "opacity,transform,willChange",
              },
              "<0.12",
            );

          if (!canHover || !contextSafe || !link) return;

          const onEnter = contextSafe(() => {
            gsap.to(visual, {
              scale: 1.012,
              duration: MOTION.micro,
              ease: MOTION.enterEase,
              overwrite: "auto",
            });
            if (image) {
              gsap.to(image, {
                scale: 1.025,
                duration: 0.5,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            }
            if (title) {
              gsap.to(title, {
                x: 4,
                duration: MOTION.micro,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            }
          });

          const onLeave = contextSafe(() => {
            gsap.to(visual, {
              scale: 1,
              duration: MOTION.micro,
              ease: MOTION.enterEase,
              overwrite: "auto",
            });
            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.45,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            }
            if (title) {
              gsap.to(title, {
                x: 0,
                duration: MOTION.micro,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            }
          });

          link.addEventListener("pointerenter", onEnter);
          link.addEventListener("pointerleave", onLeave);
          link.addEventListener("blur", onLeave, true);

          listenerCleanups.push(() => {
            link.removeEventListener("pointerenter", onEnter);
            link.removeEventListener("pointerleave", onLeave);
            link.removeEventListener("blur", onLeave, true);
            gsap.killTweensOf([visual, image, title]);
          });
        });

        return () => listenerCleanups.forEach((cleanup) => cleanup());
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
