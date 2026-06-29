import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — AVA Next" },
      { name: "description", content: "Terms and Conditions for AVA Next." },
    ],
  }),
  component: TermsConditionsPage,
});

function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          title="Terms and Conditions"
          description="Last updated: June 2026"
        >
          <div className="mx-auto max-w-3xl text-left text-muted-foreground prose prose-invert">
            <p className="mt-6 text-foreground font-semibold">1. Agreement to Terms</p>
            <p className="mt-2">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AVA Next ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>

            <p className="mt-6 text-foreground font-semibold">2. Intellectual Property Rights</p>
            <p className="mt-2">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>

            <p className="mt-6 text-foreground font-semibold">3. User Representations</p>
            <p className="mt-2">
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
            </p>

            <p className="mt-6 text-foreground font-semibold">4. Prohibited Activities</p>
            <p className="mt-2">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

            <p className="mt-6 text-foreground font-semibold">5. Modifications and Interruptions</p>
            <p className="mt-2">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </p>
            
            <p className="mt-6 text-foreground font-semibold">6. Contact us</p>
            <p className="mt-2">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:admin@avanext.ai" className="text-white hover:underline transition">admin@avanext.ai</a>.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
