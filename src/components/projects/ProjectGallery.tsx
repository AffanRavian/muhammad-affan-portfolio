import type { GalleryItem } from "@/content/projects";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";

type ProjectGalleryProps = {
  items: GalleryItem[];
};

export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <div className="grid gap-8">
      {items.map((item) => (
        <div key={item.src} data-case-gallery-item>
          <PlaceholderMedia
            src={item.src}
            alt={item.alt}
            kind={item.kind}
            width={item.width}
            height={item.height}
            sizes="(min-width: 1024px) 56rem, 100vw"
          />
        </div>
      ))}
    </div>
  );
}
