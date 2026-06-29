import { jsxs, jsx } from "react/jsx-runtime";
function FeatureCard({
  icon: Icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group relative glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        style: { background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), color-mix(in oklab, var(--accent) 18%, transparent), transparent 60%)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex size-11 items-center justify-center rounded-xl bg-[var(--gradient-primary)] shadow-glow", children: /* @__PURE__ */ jsx(Icon, { className: "size-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children })
    ] })
  ] });
}
export {
  FeatureCard as F
};
