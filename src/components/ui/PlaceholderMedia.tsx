import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaKind } from "@/content/projects";

type PlaceholderMediaProps = {
  src: string;
  alt: string;
  kind: MediaKind;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function PlaceholderMedia({
  src,
  alt,
  kind,
  priority,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: PlaceholderMediaProps) {
  return (
    <figure className={cn("group relative w-full", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-ink/10 bg-foundation/5">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
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
