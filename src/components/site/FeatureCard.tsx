import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), color-mix(in oklab, var(--accent) 18%, transparent), transparent 60%)" }} />
      <div className="relative">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--gradient-primary)] shadow-glow">
          <Icon className="size-5 text-primary-foreground" />
        </div>
        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
