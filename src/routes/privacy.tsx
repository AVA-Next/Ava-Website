import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AVA Next" },
      { name: "description", content: "Privacy Policy for AVA Next." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Section
          centered
          title="Privacy Policy"
          description="Last updated: June 2026"
        >
          <div className="mx-auto max-w-3xl text-left text-muted-foreground prose prose-invert">
            <p className="mt-6 text-foreground font-semibold">1. Introduction</p>
            <p className="mt-2">
              At AVA Next, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <p className="mt-6 text-foreground font-semibold">2. The data we collect about you</p>
            <p className="mt-2">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>

            <p className="mt-6 text-foreground font-semibold">3. How we use your personal data</p>
            <p className="mt-2">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <p className="mt-6 text-foreground font-semibold">4. Data security</p>
            <p className="mt-2">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <p className="mt-6 text-foreground font-semibold">5. Contact us</p>
            <p className="mt-2">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:admin@avanext.ai" className="text-white hover:underline transition">admin@avanext.ai</a>.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
