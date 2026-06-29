import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Database, Brain, Target, Rocket, ArrowRight, CircleDot } from "lucide-react";
import { Fragment } from "react";
import { v as visionImg } from "./vision-flow-leWzgQCa.js";
import { H as Header, S as Section, R as Reveal, F as Footer } from "./Section-CZVJuukX.js";
import "@tanstack/react-router";
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
const roadmap = [{
  tag: "Today",
  title: "CRM + Automation"
}, {
  tag: "Next",
  title: "AI Operations Assistant"
}, {
  tag: "Future",
  title: "Industry Operating Platforms"
}, {
  tag: "Vision",
  title: "Autonomous Business Intelligence"
}];
function VisionPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
      /* @__PURE__ */ jsx(Section, { centered: true, eyebrow: "Our vision", title: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "Software Should ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Think With You" })
      ] }), description: "We believe software should do more than store information. It should actively assist, guide, and improve business outcomes.", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden glass-strong shadow-elegant", children: [
        /* @__PURE__ */ jsx("img", { src: visionImg, alt: "Neural intelligence network", width: 1400, height: 900, loading: "lazy", className: "w-full h-[280px] md:h-[420px] object-cover opacity-70" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-7 items-center gap-3 md:gap-2", children: steps.map((s, i) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex md:flex-col items-center gap-3 md:gap-2 glass rounded-2xl p-4 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex size-10 items-center justify-center rounded-xl bg-[var(--gradient-primary)] shadow-glow", children: /* @__PURE__ */ jsx(s.icon, { className: "size-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm md:text-base", children: s.label })
          ] }),
          i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center text-accent", children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" }) })
        ] }, s.label)) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Section, { centered: true, eyebrow: "Roadmap", title: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        "The Future Is ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Intelligent" })
      ] }), children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-4", children: roadmap.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex md:justify-center", children: /* @__PURE__ */ jsx("div", { className: "size-14 rounded-full glass-strong flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsx(CircleDot, { className: "size-5 text-accent" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 glass rounded-2xl p-5 text-center hover:-translate-y-1 transition", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: it.tag }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 font-semibold", children: it.title })
        ] })
      ] }) }, it.tag)) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  VisionPage as component
};
