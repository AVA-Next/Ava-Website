import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Landmark, Briefcase, Building2, Rocket, ArrowRight } from "lucide-react";
import { H as Header, S as Section, R as Reveal, F as Footer } from "./Section-CZVJuukX.js";
import "react";
const items = [{
  icon: Landmark,
  title: "Insurance",
  body: "Modernise broker, agency, and underwriting operations with intelligent workflows."
}, {
  icon: Briefcase,
  title: "Financial Services",
  body: "Empower advisors, wealth managers, and finance teams with unified client intelligence."
}, {
  icon: Building2,
  title: "Professional Services",
  body: "Bring consulting, legal, and knowledge-driven firms onto one operating platform."
}, {
  icon: Rocket,
  title: "Future Industry Platforms",
  body: "Operating platforms for tomorrow's verticals — designed to learn and adapt."
}];
function SolutionsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(Section, { centered: true, eyebrow: "Solutions", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Built For ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Industry-Specific Excellence" })
    ] }), description: "AVA Next is initially focused on professional service industries where client relationships, operational efficiency, and knowledge management are critical.", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full glass rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 size-56 rounded-full opacity-20 blur-3xl bg-[var(--gradient-primary)] group-hover:opacity-40 transition" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex size-12 items-center justify-center rounded-xl glass-strong", children: /* @__PURE__ */ jsx(it.icon, { className: "size-6 text-accent" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-semibold", children: it.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: it.body })
        ] })
      ] }) }, it.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition", children: [
        "Talk to our team ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  SolutionsPage as component
};
