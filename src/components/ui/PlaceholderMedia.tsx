import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaKind } from "@/content/projects";

type PlaceholderMediaProps = {
  src: string;
  alt: string;
  kind: MediaKind;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function PlaceholderMedia({
  src,
  alt,
  kind,
  width,
  height,
  priority,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: PlaceholderMediaProps) {
  return (
    <figure
      data-motion-visual
      className={cn("group relative w-full", className)}
    >
      <div
        data-motion-image
        className="overflow-hidden rounded-sm border border-ink/10 bg-foundation/5"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-contain"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {kind === "abstract-placeholder" && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-ink/65">
          Conceptual visual — not an application screenshot
        </figcaption>
      )}
    </figure>
  );
}
