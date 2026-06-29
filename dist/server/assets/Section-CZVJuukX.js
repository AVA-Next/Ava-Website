import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
const nav = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/vision", label: "Vision" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("div", { className: "relative size-8 rounded-lg bg-[var(--gradient-primary)] shadow-glow", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-[3px] rounded-md bg-background/60 flex items-center justify-center text-[10px] font-bold gradient-text", children: "AN" }) }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg font-semibold tracking-tight", children: [
              "AVA",
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: " Next" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: nav.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              activeOptions: { exact: n.to === "/" },
              className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition",
              activeProps: {
                className: "px-3 py-2 text-sm text-accent font-semibold border-b-2 border-accent rounded-none"
              },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition",
              children: "Request a Demo"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden p-2 text-foreground",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden glass-strong border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-1", children: [
          nav.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground",
              children: "Request a Demo"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-border", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "size-8 rounded-lg bg-[var(--gradient-primary)] shadow-glow" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold", children: "AVA Next" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground", children: "The Future of Intelligent Business Operations." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-4", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/platform", className: "hover:text-foreground transition", children: "Platform" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "hover:text-foreground transition", children: "Solutions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/vision", className: "hover:text-foreground transition", children: "Vision" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-4", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-foreground transition", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-foreground transition", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:admin@avanext.ai", className: "hover:text-foreground transition", children: "admin@avanext.ai" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 AVA Next. All rights reserved." }),
      /* @__PURE__ */ jsx("span", { children: "Built for the next era of work." })
    ] }) })
  ] });
}
function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  centered = false
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `relative py-24 md:py-32 ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    (eyebrow || title || description) && /* @__PURE__ */ jsxs("div", { className: `max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-14`, children: [
      eyebrow && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-accent mb-5", children: [
        /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent animate-pulse-glow" }),
        eyebrow
      ] }),
      title && /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: description })
    ] }),
    children
  ] }) });
}
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      style: {
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      },
      children
    }
  );
}
export {
  Footer as F,
  Header as H,
  Reveal as R,
  Section as S
};
