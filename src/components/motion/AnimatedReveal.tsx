/** Phase 3: GSAP scroll reveal wrapper. Phase 2: static passthrough. */
export function AnimatedReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
