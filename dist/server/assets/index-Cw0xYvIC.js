import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Fragment as Fragment$1 } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Bot, BarChart3, Users, Workflow, Brain, Database, Target, Rocket, LayoutDashboard, Plug, Landmark, Briefcase, Building2, XCircle, CheckCircle2, CircleDot } from "lucide-react";
import { v as visionImg } from "./vision-flow-leWzgQCa.js";
import { H as Header, F as Footer, R as Reveal, S as Section } from "./Section-CZVJuukX.js";
import { F as FeatureCard } from "./FeatureCard-DGKb1uHm.js";
import { C as ContactForm } from "./ContactForm-DRPlNbR4.js";
const heroImg = "/assets/hero-dashboard-CW5mhwkr.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-32 md:pt-40 pb-16 overflow-hidden gradient-bg-hero", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl", style: {
      background: "radial-gradient(circle, oklch(0.6 0.22 258) 0%, transparent 60%)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-accent" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Intelligent operating platforms" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "animate-fade-in-up mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight", children: [
          "The Future of ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Intelligent Business Operations" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "animate-fade-in-up mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto", children: "AVA Next is building intelligent business platforms that combine CRM, automation, analytics, and artificial intelligence into a single operating environment." }),
        /* @__PURE__ */ jsx("p", { className: "animate-fade-in-up mt-4 text-base text-muted-foreground/80 max-w-2xl mx-auto", children: "Reduce administration. Improve decision-making. Empower your people to focus on customers, growth, and strategy." }),
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in-up mt-10 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition", children: [
            "Request a Demo ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/platform", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:border-accent/40 transition", children: "Learn More" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "relative mt-20 mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-3xl bg-[var(--gradient-primary)] opacity-30 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "relative glass-strong rounded-2xl p-2 shadow-elegant", children: /* @__PURE__ */ jsx("img", { src: heroImg, alt: "AVA Next intelligent business dashboard with CRM, analytics, workflow automation, and AI assistant", width: 1600, height: 1100, className: "w-full h-auto rounded-xl" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-6 top-1/3 hidden md:block glass rounded-xl p-3 animate-float shadow-glow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx(Bot, { className: "size-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "AI assistant active" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-6 top-2/3 hidden md:block glass rounded-xl p-3 animate-float shadow-glow", style: {
          animationDelay: "1.5s"
        }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "size-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "+38% efficiency" })
        ] }) })
      ] }) })
    ] })
  ] });
}
function WhoWeAre() {
  const cards = [{
    icon: Users,
    title: "Intelligent CRM",
    body: "A single source of truth for every customer relationship and interaction."
  }, {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Streamline operational processes and remove repetitive busywork."
  }, {
    icon: BarChart3,
    title: "Business Analytics",
    body: "Real-time visibility into performance, pipeline, and operational health."
  }, {
    icon: Brain,
    title: "AI Assistance",
    body: "Recommendations, summaries, and guidance embedded across every workflow."
  }];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Who we are", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Building the Next Generation of ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Business Platforms" })
  ] }), description: /* @__PURE__ */ jsx(Fragment, { children: "AVA Next develops intelligent operating platforms that bring together customer management, workflow automation, analytics, and AI into one unified environment. Our mission is to help organisations eliminate repetitive administration, streamline operations, and unlock smarter decision-making through technology." }), children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: cards.map((c, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsx(FeatureCard, { icon: c.icon, title: c.title, children: c.body }) }, c.title)) }) });
}
function Vision() {
  const steps = [{
    icon: Database,
    label: "Data"
  }, {
    icon: Brain,
    label: "Intelligence"
  }, {
    icon: Target,
    label: "Decisions"
  }, {
    icon: Rocket,
    label: "Outcomes"
  }];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Our vision", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Software Should ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Think With You" })
  ] }), description: /* @__PURE__ */ jsx(Fragment, { children: "We believe software should do more than store information. It should actively assist, guide, and improve business outcomes. AVA Next is creating smart operating platforms that combine business processes, organisational knowledge, automation, and AI to help businesses operate more efficiently every day." }), children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden glass-strong shadow-elegant", children: [
    /* @__PURE__ */ jsx("img", { src: visionImg, alt: "Neural intelligence network", width: 1400, height: 900, loading: "lazy", className: "w-full h-[280px] md:h-[420px] object-cover opacity-70" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-7 items-center gap-3 md:gap-2", children: steps.map((s, i) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex md:flex-col items-center gap-3 md:gap-2 glass rounded-2xl p-4 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex size-10 items-center justify-center rounded-xl bg-[var(--gradient-primary)] shadow-glow", children: /* @__PURE__ */ jsx(s.icon, { className: "size-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-medium text-sm md:text-base", children: s.label })
      ] }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center text-accent", children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" }) })
    ] }, s.label)) }) })
  ] }) }) });
}
function Platform() {
  const features = [{
    icon: Users,
    title: "CRM & Client Management",
    body: "Manage relationships, interactions, and opportunities from a single source of truth."
  }, {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Automate repetitive tasks and streamline operational processes."
  }, {
    icon: BarChart3,
    title: "Analytics & Insights",
    body: "Gain real-time visibility into performance and business health."
  }, {
    icon: Bot,
    title: "AI-Powered Assistance",
    body: "Receive intelligent recommendations, summaries, and operational guidance."
  }, {
    icon: LayoutDashboard,
    title: "Client & Staff Portals",
    body: "Deliver modern digital experiences for customers and teams."
  }, {
    icon: Plug,
    title: "Industry Integrations",
    body: "Connect seamlessly with existing business systems and applications."
  }];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Platform capabilities", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Everything You Need In ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "One Intelligent Platform" })
  ] }), children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsx(FeatureCard, { icon: f.icon, title: f.title, children: f.body }) }, f.title)) }) });
}
function Industries() {
  const items = [{
    icon: Landmark,
    title: "Insurance",
    body: "Modernise broker, agency, and underwriting operations."
  }, {
    icon: Briefcase,
    title: "Financial Services",
    body: "Advisors, wealth managers, and finance teams."
  }, {
    icon: Building2,
    title: "Professional Services",
    body: "Consulting, legal, and knowledge-driven firms."
  }, {
    icon: Rocket,
    title: "Future Industry Platforms",
    body: "Operating platforms for tomorrow's verticals."
  }];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Focus industries", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Built For ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Industry-Specific Excellence" })
  ] }), description: "AVA Next is initially focused on professional service industries where client relationships, operational efficiency, and knowledge management are critical.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full glass rounded-2xl p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 size-48 rounded-full opacity-20 blur-3xl bg-[var(--gradient-primary)] group-hover:opacity-40 transition" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex size-11 items-center justify-center rounded-xl glass-strong", children: /* @__PURE__ */ jsx(it.icon, { className: "size-5 text-accent" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 text-lg font-semibold", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.body })
    ] })
  ] }) }, it.title)) }) });
}
function Difference() {
  const traditional = ["Stores data", "Manual processes", "Static reporting", "Reactive management"];
  const ava = ["Intelligent recommendations", "Automated workflows", "Predictive insights", "Proactive business management"];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "The AVA difference", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Beyond ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Traditional CRM" })
  ] }), description: /* @__PURE__ */ jsx(Fragment, { children: "Traditional CRM systems record information. AVA Next helps organisations act on it — combining operational workflows, analytics, automation, and AI into intelligent business assistants that support teams, surface insights, and improve outcomes." }), children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8 h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Traditional CRM" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-2xl font-semibold", children: "Record-keeping software" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: traditional.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(XCircle, { className: "size-5 text-muted-foreground/60 shrink-0 mt-0.5" }),
        t
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxs("div", { className: "relative glass-strong rounded-2xl p-8 h-full overflow-hidden shadow-elegant", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 size-64 rounded-full opacity-30 blur-3xl bg-[var(--gradient-primary)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: "AVA Next" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 text-2xl font-semibold", children: "Intelligent business operations" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: ava.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] }) })
  ] }) });
}
function Roadmap() {
  const items = [{
    tag: "Today",
    title: "CRM + Automation",
    body: "Unified client management with workflow automation across teams."
  }, {
    tag: "Next",
    title: "AI Operations Assistant",
    body: "Embedded AI guidance, summaries, and recommendations."
  }, {
    tag: "Future",
    title: "Industry Operating Platforms",
    body: "Vertical-specific platforms that run entire operations."
  }, {
    tag: "Vision",
    title: "Autonomous Business Intelligence",
    body: "Self-improving systems that act on insights automatically."
  }];
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Looking ahead", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "The Future Is ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Intelligent" })
  ] }), description: "Our long-term vision is to create industry operating platforms that continuously learn, automate routine work, surface meaningful insights, and help businesses make better decisions.", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-7 hidden md:block h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-4", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "flex md:justify-center", children: /* @__PURE__ */ jsx("div", { className: "size-14 rounded-full glass-strong flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsx(CircleDot, { className: "size-5 text-accent" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 glass rounded-2xl p-5 text-center hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: it.tag }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 font-semibold", children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.body })
      ] })
    ] }) }, it.tag)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx(Section, { id: "contact", centered: true, eyebrow: "Contact", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Let's Build The ",
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Future Together" })
  ] }), description: "Interested in learning more about AVA Next and our vision for intelligent business operations? Contact our team to discuss opportunities, partnerships, and early platform access.", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(ContactForm, { className: "relative left-1/2 w-[min(calc(100vw-3rem),105rem)] -translate-x-1/2" }) }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(WhoWeAre, {}),
      /* @__PURE__ */ jsx(Vision, {}),
      /* @__PURE__ */ jsx(Platform, {}),
      /* @__PURE__ */ jsx(Industries, {}),
      /* @__PURE__ */ jsx(Difference, {}),
      /* @__PURE__ */ jsx(Roadmap, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
