import type { GalleryItem } from "@/content/projects";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";

type ProjectGalleryProps = {
  items: GalleryItem[];
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <div className="grid gap-8">
      {items.map((item) => (
        <PlaceholderMedia
          key={item.src}
          src={item.src}
          alt={item.alt}
          kind={item.kind}
          sizes="(min-width: 1024px) 56rem, 100vw"
        />
      ))}
    </div>
  );
}
