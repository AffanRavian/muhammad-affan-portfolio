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

type ProjectCaseStudyMotionProps = {
  children: React.ReactNode;
  routeKey: string;
  className?: string;
};

export function ProjectCaseStudyMotion({
  children,
  routeKey,
  className,
}: ProjectCaseStudyMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const root = scope.current;
      if (!root) return;

      const media = gsap.matchMedia();

      media.add(MOTION_QUERIES, (context) => {
        const { isMobile, canHover, reduceMotion } =
          context.conditions as MotionConditions;

        if (reduceMotion) return;

        const heroItems = Array.from(
          root.querySelectorAll<HTMLElement>("[data-case-hero-item]"),
        );
        const heroMedia = root.querySelector<HTMLElement>(
          "[data-case-hero-media]",
        );
        const sections = Array.from(
          root.querySelectorAll<HTMLElement>("[data-case-section]"),
        );
        const galleryItems = Array.from(
          root.querySelectorAll<HTMLElement>("[data-case-gallery-item]"),
        );
        const navigationLinks = Array.from(
          root.querySelectorAll<HTMLElement>("[data-case-nav-link]"),
        );
        const listenerCleanups: Array<() => void> = [];

        const heroTimeline = gsap.timeline({
          defaults: { ease: MOTION.enterEase },
        });

        if (heroItems.length > 0) {
          gsap.set(heroItems, { willChange: "transform, opacity" });
          heroTimeline.fromTo(
            heroItems,
            { opacity: 0, y: isMobile ? 14 : 24 },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.45 : MOTION.standard,
              stagger: isMobile ? 0.055 : 0.085,
              clearProps: "opacity,transform,willChange",
            },
          );
        }

        if (heroMedia) {
          gsap.set(heroMedia, { willChange: "transform, opacity" });
          heroTimeline.fromTo(
            heroMedia,
            {
              opacity: 0,
              x: isMobile ? 0 : 24,
              y: isMobile ? 12 : 0,
              scale: isMobile ? 0.99 : 0.975,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: isMobile ? 0.5 : 0.75,
              clearProps: "opacity,transform,willChange",
            },
            isMobile ? "-=0.22" : "<0.1",
          );
        }

        sections.forEach((section) => {
          gsap.set(section, { willChange: "transform, opacity" });
          gsap.fromTo(
            section,
            { opacity: 0, y: isMobile ? 14 : 24 },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.46 : MOTION.standard,
              ease: MOTION.enterEase,
              clearProps: "opacity,transform,willChange",
              scrollTrigger: {
                trigger: section,
                start: "clamp(top 86%)",
                once: true,
              },
            },
          );
        });

        galleryItems.forEach((item) => {
          gsap.set(item, { willChange: "transform" });
          gsap.fromTo(
            item,
            { scale: isMobile ? 0.99 : 0.975 },
            {
              scale: 1,
              duration: isMobile ? 0.5 : 0.7,
              ease: MOTION.enterEase,
              clearProps: "transform,willChange",
              scrollTrigger: {
                trigger: item,
                start: "clamp(top 86%)",
                once: true,
              },
            },
          );
        });

        if (canHover && contextSafe) {
          navigationLinks.forEach((link) => {
            const direction = Number(link.dataset.caseDirection ?? "1");
            const onEnter = contextSafe(() => {
              gsap.to(link, {
                x: direction * 4,
                duration: MOTION.micro,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            });
            const onLeave = contextSafe(() => {
              gsap.to(link, {
                x: 0,
                duration: MOTION.micro,
                ease: MOTION.enterEase,
                overwrite: "auto",
              });
            });

            link.addEventListener("pointerenter", onEnter);
            link.addEventListener("pointerleave", onLeave);
            link.addEventListener("blur", onLeave, true);
            listenerCleanups.push(() => {
              link.removeEventListener("pointerenter", onEnter);
              link.removeEventListener("pointerleave", onLeave);
              link.removeEventListener("blur", onLeave, true);
              gsap.killTweensOf(link);
            });
          });
        }

        return () => listenerCleanups.forEach((cleanup) => cleanup());
      });

      return () => media.revert();
    },
    { scope, dependencies: [routeKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope} className={cn(className)}>
      {children}
    </div>
  );
}
