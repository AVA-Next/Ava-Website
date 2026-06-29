import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Users, Workflow, BarChart3, Sparkles, ArrowRight } from "lucide-react";
import { H as Header, S as Section, R as Reveal, F as Footer } from "./Section-CZVJuukX.js";
import { F as FeatureCard } from "./FeatureCard-DGKb1uHm.js";
import "react";
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(Section, { centered: true, eyebrow: "About AVA Next", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Building the Next Generation of ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Business Platforms" })
    ] }), description: /* @__PURE__ */ jsx(Fragment, { children: "AVA Next develops intelligent operating platforms that bring together customer management, workflow automation, analytics, and AI into one unified environment. Our mission is to help organisations eliminate repetitive administration, streamline operations, and unlock smarter decision-making through technology." }), children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(FeatureCard, { icon: Users, title: "Intelligent CRM", children: "A single source of truth for every relationship and interaction." }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsx(FeatureCard, { icon: Workflow, title: "Workflow Automation", children: "Remove busywork and accelerate operations." }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsx(FeatureCard, { icon: BarChart3, title: "Business Analytics", children: "Real-time visibility into what matters most." }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsx(FeatureCard, { icon: Sparkles, title: "AI Assistance", children: "Guidance and intelligence embedded in every workflow." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition", children: [
        "Get in touch ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
