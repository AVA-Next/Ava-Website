import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header, S as Section, R as Reveal, F as Footer } from "./Section-CZVJuukX.js";
import { C as ContactForm } from "./ContactForm-DRPlNbR4.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
function ContactPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsx(Section, { centered: true, eyebrow: "Contact", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Let's Build The ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Future Together" })
    ] }), description: "Interested in learning more about AVA Next? Contact our team to discuss opportunities, partnerships, and early platform access.", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(ContactForm, { className: "relative left-1/2 w-[min(calc(100vw-3rem),105rem)] -translate-x-1/2" }) }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
