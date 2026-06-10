import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Briefcase, Building2, Rocket, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — AVA Next" },
      { name: "description", content: "Industry operating platforms for insurance, financial services, professional services, and beyond." },
      { property: "og:title", content: "Solutions — AVA Next" },
      { property: "og:description", content: "Built for industry-specific excellence." },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const items = [
  { icon: Landmark, title: "Insurance", body: "Modernise broker, agency, and underwriting operations with intelligent workflows." },
  { icon: Briefcase, title: "Financial Services", body: "Empower advisors, wealth managers, and finance teams with unified client intelligence." },
  { icon: Building2, title: "Professional Services", body: "Bring consulting, legal, and knowledge-driven firms onto one operating platform." },
  { icon: Rocket, title: "Future Industry Platforms", body: "Operating platforms for tomorrow's verticals — designed to learn and adapt." },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          eyebrow="Solutions"
          title={<>Built For <span className="gradient-text">Industry-Specific Excellence</span></>}
          description="AVA Next is initially focused on professional service industries where client relationships, operational efficiency, and knowledge management are critical."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <div className="relative h-full glass rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -top-16 -right-16 size-56 rounded-full opacity-20 blur-3xl bg-[var(--gradient-primary)] group-hover:opacity-40 transition" />
                  <div className="relative">
                    <div className="inline-flex size-12 items-center justify-center rounded-xl glass-strong">
                      <it.icon className="size-6 text-accent" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
                    <p className="mt-2 text-muted-foreground">{it.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
              Talk to our team <ArrowRight className="size-4" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
