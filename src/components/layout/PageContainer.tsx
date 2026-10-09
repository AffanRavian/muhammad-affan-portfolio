import { cn } from "@/lib/utils";
import { CONTAINER_MAX } from "@/lib/constants";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
};

export function PageContainer({
  children,
  className,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        CONTAINER_MAX,
        className,
      )}
    >
      {children}
    </Component>
  );
}
