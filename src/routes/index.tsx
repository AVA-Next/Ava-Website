import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  Workflow,
  BarChart3,
  Bot,
  LayoutDashboard,
  Plug,
  Building2,
  Briefcase,
  Landmark,
  Rocket,
  Database,
  Brain,
  Zap,
  Target,
  CircleDot,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import visionImg from "@/assets/vision-flow.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/FeatureCard";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVA Next — The Future of Intelligent Business Operations" },
      {
        name: "description",
        content:
          "AVA Next builds intelligent business platforms that combine CRM, automation, analytics, and AI into one unified operating environment.",
      },
      { property: "og:title", content: "AVA Next — The Future of Intelligent Business Operations" },
      {
        property: "og:description",
        content: "Reduce administration. Improve decision-making. Empower your people.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden gradient-bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.22 258) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <Sparkles className="size-3.5 text-accent" />
            <span className="text-muted-foreground">Intelligent operating platforms</span>
          </div>
          <h1 className="animate-fade-in-up mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
            The Future of <span className="gradient-text">Intelligent Business Operations</span>
          </h1>
          <p className="animate-fade-in-up mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            AVA Next is building intelligent business platforms that combine CRM, automation,
            analytics, and artificial intelligence into a single operating environment.
          </p>
          <p className="animate-fade-in-up mt-4 text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Reduce administration. Improve decision-making. Empower your people to focus on
            customers, growth, and strategy.
          </p>
          <div className="animate-fade-in-up mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Request a Demo <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:border-accent/40 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative mt-20 mx-auto max-w-6xl">
            <div className="absolute -inset-6 rounded-3xl bg-[var(--gradient-primary)] opacity-30 blur-3xl" />
            <div className="relative glass-strong rounded-2xl p-2 shadow-elegant">
              <img
                src={heroImg}
                alt="AVA Next intelligent business dashboard with CRM, analytics, workflow automation, and AI assistant"
                width={1600}
                height={1100}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -left-6 top-1/3 hidden md:block glass rounded-xl p-3 animate-float shadow-glow">
              <div className="flex items-center gap-2 text-xs">
                <Bot className="size-4 text-accent" />
                <span>AI assistant active</span>
              </div>
            </div>
            <div
              className="absolute -right-6 top-2/3 hidden md:block glass rounded-xl p-3 animate-float shadow-glow"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <BarChart3 className="size-4 text-accent" />
                <span>+38% efficiency</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const cards = [
    {
      icon: Users,
      title: "Intelligent CRM",
      body: "A single source of truth for every customer relationship and interaction.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      body: "Streamline operational processes and remove repetitive busywork.",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      body: "Real-time visibility into performance, pipeline, and operational health.",
    },
    {
      icon: Brain,
      title: "AI Assistance",
      body: "Recommendations, summaries, and guidance embedded across every workflow.",
    },
  ];
  return (
    <Section
      eyebrow="Who we are"
      title={
        <>
          Building the Next Generation of <span className="gradient-text">Business Platforms</span>
        </>
      }
      description={
        <>
          AVA Next develops intelligent operating platforms that bring together customer management,
          workflow automation, analytics, and AI into one unified environment. Our mission is to
          help organisations eliminate repetitive administration, streamline operations, and unlock
          smarter decision-making through technology.
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <FeatureCard icon={c.icon} title={c.title}>
              {c.body}
            </FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Vision() {
  const steps = [
    { icon: Database, label: "Data" },
    { icon: Brain, label: "Intelligence" },
    { icon: Target, label: "Decisions" },
    { icon: Rocket, label: "Outcomes" },
  ];
  return (
    <Section
      eyebrow="Our vision"
      title={
        <>
          Software Should <span className="gradient-text">Think With You</span>
        </>
      }
      description={
        <>
          We believe software should do more than store information. It should actively assist,
          guide, and improve business outcomes. AVA Next is creating smart operating platforms that
          combine business processes, organisational knowledge, automation, and AI to help
          businesses operate more efficiently every day.
        </>
      }
    >
      <Reveal>
        <div className="relative rounded-3xl overflow-hidden glass-strong shadow-elegant">
          <img
            src={visionImg}
            alt="Neural intelligence network"
            width={1400}
            height={900}
            loading="lazy"
            className="w-full h-[280px] md:h-[420px] object-cover opacity-70"
          />
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
  );
}

function Platform() {
  const features = [
    {
      icon: Users,
      title: "CRM & Client Management",
      body: "Manage relationships, interactions, and opportunities from a single source of truth.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      body: "Automate repetitive tasks and streamline operational processes.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      body: "Gain real-time visibility into performance and business health.",
    },
    {
      icon: Bot,
      title: "AI-Powered Assistance",
      body: "Receive intelligent recommendations, summaries, and operational guidance.",
    },
    {
      icon: LayoutDashboard,
      title: "Client & Staff Portals",
      body: "Deliver modern digital experiences for customers and teams.",
    },
    {
      icon: Plug,
      title: "Industry Integrations",
      body: "Connect seamlessly with existing business systems and applications.",
    },
  ];
  return (
    <Section
      eyebrow="Platform capabilities"
      title={
        <>
          Everything You Need In <span className="gradient-text">One Intelligent Platform</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 80}>
            <FeatureCard icon={f.icon} title={f.title}>
              {f.body}
            </FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Industries() {
  const items = [
    {
      icon: Landmark,
      title: "Insurance",
      body: "Modernise broker, agency, and underwriting operations.",
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      body: "Advisors, wealth managers, and finance teams.",
    },
    {
      icon: Building2,
      title: "Professional Services",
      body: "Consulting, legal, and knowledge-driven firms.",
    },
    {
      icon: Rocket,
      title: "Future Industry Platforms",
      body: "Operating platforms for tomorrow's verticals.",
    },
  ];
  return (
    <Section
      eyebrow="Focus industries"
      title={
        <>
          Built For <span className="gradient-text">Industry-Specific Excellence</span>
        </>
      }
      description="AVA Next is initially focused on professional service industries where client relationships, operational efficiency, and knowledge management are critical."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <div className="relative h-full glass rounded-2xl p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-16 -right-16 size-48 rounded-full opacity-20 blur-3xl bg-[var(--gradient-primary)] group-hover:opacity-40 transition" />
              <div className="relative">
                <div className="inline-flex size-11 items-center justify-center rounded-xl glass-strong">
                  <it.icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Difference() {
  const traditional = [
    "Stores data",
    "Manual processes",
    "Static reporting",
    "Reactive management",
  ];
  const ava = [
    "Intelligent recommendations",
    "Automated workflows",
    "Predictive insights",
    "Proactive business management",
  ];
  return (
    <Section
      eyebrow="The AVA difference"
      title={
        <>
          Beyond <span className="gradient-text">Traditional CRM</span>
        </>
      }
      description={
        <>
          Traditional CRM systems record information. AVA Next helps organisations act on it —
          combining operational workflows, analytics, automation, and AI into intelligent business
          assistants that support teams, surface insights, and improve outcomes.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-8 h-full">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Traditional CRM
            </div>
            <h3 className="mt-2 text-2xl font-semibold">Record-keeping software</h3>
            <ul className="mt-6 space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="size-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative glass-strong rounded-2xl p-8 h-full overflow-hidden shadow-elegant">
            <div className="absolute -top-20 -right-20 size-64 rounded-full opacity-30 blur-3xl bg-[var(--gradient-primary)]" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-accent">AVA Next</div>
              <h3 className="mt-2 text-2xl font-semibold">Intelligent business operations</h3>
              <ul className="mt-6 space-y-3">
                {ava.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Roadmap() {
  const items = [
    {
      tag: "Today",
      title: "CRM + Automation",
      body: "Unified client management with workflow automation across teams.",
    },
    {
      tag: "Next",
      title: "AI Operations Assistant",
      body: "Embedded AI guidance, summaries, and recommendations.",
    },
    {
      tag: "Future",
      title: "Industry Operating Platforms",
      body: "Vertical-specific platforms that run entire operations.",
    },
    {
      tag: "Vision",
      title: "Autonomous Business Intelligence",
      body: "Self-improving systems that act on insights automatically.",
    },
  ];
  return (
    <Section
      eyebrow="Looking ahead"
      title={
        <>
          The Future Is <span className="gradient-text">Intelligent</span>
        </>
      }
      description="Our long-term vision is to create industry operating platforms that continuously learn, automate routine work, surface meaningful insights, and help businesses make better decisions."
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-7 hidden md:block h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="grid gap-6 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.tag} delay={i * 120}>
              <div className="relative">
                <div className="flex md:justify-center">
                  <div className="size-14 rounded-full glass-strong flex items-center justify-center shadow-glow">
                    <CircleDot className="size-5 text-accent" />
                  </div>
                </div>
                <div className="mt-5 glass rounded-2xl p-5 text-center hover:-translate-y-1 transition">
                  <div className="text-xs uppercase tracking-widest text-accent">{it.tag}</div>
                  <h3 className="mt-1 font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      centered
      eyebrow="Contact"
      title={
        <>
          Let's Build The <span className="gradient-text">Future Together</span>
        </>
      }
      description="Interested in learning more about AVA Next and our vision for intelligent business operations? Contact our team to discuss opportunities, partnerships, and early platform access."
    >
      <Reveal>
        <ContactForm className="relative left-1/2 w-[min(calc(100vw-3rem),105rem)] -translate-x-1/2" />
      </Reveal>
    </Section>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Vision />
        <Platform />
        <Industries />
        <Difference />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
