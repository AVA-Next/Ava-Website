import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Users, Workflow, BarChart3, Bot, LayoutDashboard, Plug, ArrowRight } from "lucide-react";
import { H as Header, S as Section, R as Reveal, F as Footer } from "./Section-CZVJuukX.js";
import { F as FeatureCard } from "./FeatureCard-DGKb1uHm.js";
import "react";
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
function PlatformPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(Section, { centered: true, eyebrow: "Platform", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Everything You Need In ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "One Intelligent Platform" })
    ] }), description: "A unified operating environment for client management, automation, analytics, and AI — built to grow with your business.", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsx(FeatureCard, { icon: f.icon, title: f.title, children: f.body }) }, f.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition", children: [
        "Request a Demo ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PlatformPage as component
};
