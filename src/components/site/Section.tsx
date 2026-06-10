import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  centered = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-14`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-accent mb-5">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-glow" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
}
