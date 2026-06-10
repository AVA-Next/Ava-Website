import { createFileRoute } from "@tanstack/react-router";
import { Database, Brain, Target, Rocket, CircleDot, ArrowRight } from "lucide-react";
import { Fragment } from "react";
import visionImg from "@/assets/vision-flow.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — AVA Next" },
      { name: "description", content: "Our vision: software should think with you. The roadmap to autonomous business intelligence." },
      { property: "og:title", content: "Vision — AVA Next" },
      { property: "og:description", content: "From CRM + automation today to autonomous business intelligence tomorrow." },
    ],
    links: [{ rel: "canonical", href: "/vision" }],
  }),
  component: VisionPage,
});

const steps = [
  { icon: Database, label: "Data" },
  { icon: Brain, label: "Intelligence" },
  { icon: Target, label: "Decisions" },
  { icon: Rocket, label: "Outcomes" },
];

const roadmap = [
  { tag: "Today", title: "CRM + Automation" },
  { tag: "Next", title: "AI Operations Assistant" },
  { tag: "Future", title: "Industry Operating Platforms" },
  { tag: "Vision", title: "Autonomous Business Intelligence" },
];

function VisionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          eyebrow="Our vision"
          title={<>Software Should <span className="gradient-text">Think With You</span></>}
          description="We believe software should do more than store information. It should actively assist, guide, and improve business outcomes."
        >
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden glass-strong shadow-elegant">
              <img src={visionImg} alt="Neural intelligence network" width={1400} height={900} loading="lazy" className="w-full h-[280px] md:h-[420px] object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-7 items-center gap-3 md:gap-2">
                  {steps.map((s, i) => (
                    <Fragment key={s.label}>
                      <div className="flex md:flex-col items-center gap-3 md:gap-2 glass rounded-2xl p-4 text-center">
                        <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[var(--gradient-primary)] shadow-glow">
                          <s.icon className="size-5 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-sm md:text-base">{s.label}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="hidden md:flex items-center justify-center text-accent">
                          <ArrowRight className="size-5" />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section
          centered
          eyebrow="Roadmap"
          title={<>The Future Is <span className="gradient-text">Intelligent</span></>}
        >
          <div className="grid gap-6 md:grid-cols-4">
            {roadmap.map((it, i) => (
              <Reveal key={it.tag} delay={i * 120}>
                <div>
                  <div className="flex md:justify-center">
                    <div className="size-14 rounded-full glass-strong flex items-center justify-center shadow-glow">
                      <CircleDot className="size-5 text-accent" />
                    </div>
                  </div>
                  <div className="mt-5 glass rounded-2xl p-5 text-center hover:-translate-y-1 transition">
                    <div className="text-xs uppercase tracking-widest text-accent">{it.tag}</div>
                    <h3 className="mt-1 font-semibold">{it.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
