import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const InfrastructureSection = dynamic(
  () => import("@/components/sections/InfrastructureSection").then((m) => m.InfrastructureSection),
  { loading: () => <InfrastructureFallback /> }
);
const SecuritySection = dynamic(
  () => import("@/components/sections/SecuritySection").then((m) => m.SecuritySection),
  { loading: () => <SecurityFallback /> }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { loading: () => <ContactFallback /> }
);

function InfrastructureFallback() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Industrial infrastructure"
          title="Loading machinery grid…"
          description="Preparing secure, high-volume infrastructure details."
        />
      </div>
    </section>
  );
}

function SecurityFallback() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Security-first operations"
          title="Loading security pipeline…"
          description="Verifying controlled access and validated workflow steps."
        />
      </div>
    </section>
  );
}

function ContactFallback() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          title="Loading secure request form…"
          description="Preparing a secure contact workflow."
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <InfrastructureSection />
        <ServicesSection />
        <SecuritySection />
        <IndustriesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
