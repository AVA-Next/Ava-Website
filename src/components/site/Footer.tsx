import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-[var(--gradient-primary)] shadow-glow" />
            <span className="font-display text-lg font-semibold">AVA Next</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The Future of Intelligent Business Operations.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/platform" className="hover:text-foreground transition">Platform</Link></li>
            <li><Link to="/solutions" className="hover:text-foreground transition">Solutions</Link></li>
            <li><Link to="/vision" className="hover:text-foreground transition">Vision</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
            <li><a href="mailto:admin@avanext.ai" className="hover:text-foreground transition">admin@avanext.ai</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <span>© 2026 AVA Next. All rights reserved.</span>
          <span>Built for the next era of work.</span>
        </div>
      </div>
    </footer>
  );
}
