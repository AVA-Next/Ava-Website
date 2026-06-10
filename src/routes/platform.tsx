import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Workflow, BarChart3, Bot, LayoutDashboard, Plug, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/FeatureCard";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — AVA Next" },
      { name: "description", content: "CRM, workflow automation, analytics, AI assistance, portals, and integrations — in one intelligent platform." },
      { property: "og:title", content: "Platform — AVA Next" },
      { property: "og:description", content: "Everything you need in one intelligent operating platform." },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

const features = [
  { icon: Users, title: "CRM & Client Management", body: "Manage relationships, interactions, and opportunities from a single source of truth." },
  { icon: Workflow, title: "Workflow Automation", body: "Automate repetitive tasks and streamline operational processes." },
  { icon: BarChart3, title: "Analytics & Insights", body: "Gain real-time visibility into performance and business health." },
  { icon: Bot, title: "AI-Powered Assistance", body: "Receive intelligent recommendations, summaries, and operational guidance." },
  { icon: LayoutDashboard, title: "Client & Staff Portals", body: "Deliver modern digital experiences for customers and teams." },
  { icon: Plug, title: "Industry Integrations", body: "Connect seamlessly with existing business systems and applications." },
];

function PlatformPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          eyebrow="Platform"
          title={<>Everything You Need In <span className="gradient-text">One Intelligent Platform</span></>}
          description="A unified operating environment for client management, automation, analytics, and AI — built to grow with your business."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <FeatureCard icon={f.icon} title={f.title}>{f.body}</FeatureCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
              Request a Demo <ArrowRight className="size-4" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
