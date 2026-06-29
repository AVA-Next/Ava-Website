import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-BH6Qkfnn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AVA Next — The Future of Intelligent Business Operations" },
      { name: "description", content: "AVA Next builds intelligent business platforms that combine CRM, automation, analytics, and AI into one unified operating environment." },
      { name: "author", content: "AVA Next" },
      { property: "og:title", content: "AVA Next — The Future of Intelligent Business Operations" },
      { property: "og:description", content: "Intelligent operating platforms that unify CRM, workflow automation, analytics, and AI." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AVA Next" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AVA Next — The Future of Intelligent Business Operations" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AVA Next — The Future of Intelligent Business Operations" },
      { name: "twitter:description", content: "Intelligent operating platforms that unify CRM, workflow automation, analytics, and AI." },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "theme-color", content: "#0F172A" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./vision-CUQy7-2a.js");
const Route$6 = createFileRoute("/vision")({
  head: () => ({
    meta: [{
      title: "Vision — AVA Next"
    }, {
      name: "description",
      content: "Our vision: software should think with you. The roadmap to autonomous business intelligence."
    }, {
      property: "og:title",
      content: "Vision — AVA Next"
    }, {
      property: "og:description",
      content: "From CRM + automation today to autonomous business intelligence tomorrow."
    }],
    links: [{
      rel: "canonical",
      href: "/vision"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./solutions-C7aZjey7.js");
const Route$5 = createFileRoute("/solutions")({
  head: () => ({
    meta: [{
      title: "Solutions — AVA Next"
    }, {
      name: "description",
      content: "Industry operating platforms for insurance, financial services, professional services, and beyond."
    }, {
      property: "og:title",
      content: "Solutions — AVA Next"
    }, {
      property: "og:description",
      content: "Built for industry-specific excellence."
    }],
    links: [{
      rel: "canonical",
      href: "/solutions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const BASE_URL = "";
const paths = ["/", "/platform", "/solutions", "/vision", "/about", "/contact"];
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          (p) => `  <url>
    <loc>${BASE_URL}${p}</loc>
    <changefreq>weekly</changefreq>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./platform-TgTRRwbv.js");
const Route$3 = createFileRoute("/platform")({
  head: () => ({
    meta: [{
      title: "Platform — AVA Next"
    }, {
      name: "description",
      content: "CRM, workflow automation, analytics, AI assistance, portals, and integrations — in one intelligent platform."
    }, {
      property: "og:title",
      content: "Platform — AVA Next"
    }, {
      property: "og:description",
      content: "Everything you need in one intelligent operating platform."
    }],
    links: [{
      rel: "canonical",
      href: "/platform"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CdOJwQu2.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — AVA Next"
    }, {
      name: "description",
      content: "Contact AVA Next to discuss opportunities, partnerships, and early platform access."
    }, {
      property: "og:title",
      content: "Contact — AVA Next"
    }, {
      property: "og:description",
      content: "Let's build the future together."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Cpl1thDA.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — AVA Next"
    }, {
      name: "description",
      content: "AVA Next builds intelligent operating platforms that unify CRM, automation, analytics, and AI."
    }, {
      property: "og:title",
      content: "About — AVA Next"
    }, {
      property: "og:description",
      content: "Building the next generation of business platforms."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Cw0xYvIC.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AVA Next — The Future of Intelligent Business Operations"
    }, {
      name: "description",
      content: "AVA Next builds intelligent business platforms that combine CRM, automation, analytics, and AI into one unified operating environment."
    }, {
      property: "og:title",
      content: "AVA Next — The Future of Intelligent Business Operations"
    }, {
      property: "og:description",
      content: "Reduce administration. Improve decision-making. Empower your people."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VisionRoute = Route$6.update({
  id: "/vision",
  path: "/vision",
  getParentRoute: () => Route$7
});
const SolutionsRoute = Route$5.update({
  id: "/solutions",
  path: "/solutions",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const PlatformRoute = Route$3.update({
  id: "/platform",
  path: "/platform",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PlatformRoute,
  SitemapDotxmlRoute,
  SolutionsRoute,
  VisionRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
