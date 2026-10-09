import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/content/skills";

type StackGroupProps = {
  groups: SkillGroup[];
  inverse?: boolean;
};

export function StackGroup({ groups, inverse }: StackGroupProps) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <li
          key={group.category}
          className={cn(
            "border-t pt-6",
            inverse ? "border-ink-inverse/15" : "border-ink/10",
          )}
        >
          <h3
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.18em]",
              inverse ? "text-muted" : "text-ink/65",
            )}
          >
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className={cn(
                  "rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide",
                  inverse
                    ? "border-ink-inverse/20 text-ink-inverse/90"
                    : "border-ink/15 text-ink/90",
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
