import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, BarChart3, Workflow } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/FeatureCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AVA Next" },
      { name: "description", content: "AVA Next builds intelligent operating platforms that unify CRM, automation, analytics, and AI." },
      { property: "og:title", content: "About — AVA Next" },
      { property: "og:description", content: "Building the next generation of business platforms." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          eyebrow="About AVA Next"
          title={<>Building the Next Generation of <span className="gradient-text">Business Platforms</span></>}
          description={
            <>
              AVA Next develops intelligent operating platforms that bring together
              customer management, workflow automation, analytics, and AI into one
              unified environment. Our mission is to help organisations eliminate
              repetitive administration, streamline operations, and unlock smarter
              decision-making through technology.
            </>
          }
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal><FeatureCard icon={Users} title="Intelligent CRM">A single source of truth for every relationship and interaction.</FeatureCard></Reveal>
            <Reveal delay={80}><FeatureCard icon={Workflow} title="Workflow Automation">Remove busywork and accelerate operations.</FeatureCard></Reveal>
            <Reveal delay={160}><FeatureCard icon={BarChart3} title="Business Analytics">Real-time visibility into what matters most.</FeatureCard></Reveal>
            <Reveal delay={240}><FeatureCard icon={Sparkles} title="AI Assistance">Guidance and intelligence embedded in every workflow.</FeatureCard></Reveal>
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
