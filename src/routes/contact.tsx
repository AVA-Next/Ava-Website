import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Reveal } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AVA Next" },
      {
        name: "description",
        content:
          "Contact AVA Next to discuss opportunities, partnerships, and early platform access.",
      },
      { property: "og:title", content: "Contact — AVA Next" },
      { property: "og:description", content: "Let's build the future together." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          eyebrow="Contact"
          title={
            <>
              Let's Build The <span className="gradient-text">Future Together</span>
            </>
          }
          description="Interested in learning more about AVA Next? Contact our team to discuss opportunities, partnerships, and early platform access."
        >
          <Reveal>
            <ContactForm className="relative left-1/2 w-[min(calc(100vw-3rem),105rem)] -translate-x-1/2" />
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
