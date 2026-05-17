import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { LogoCloud } from "./components/LogoCloud";
import { ServicesBento } from "./components/ServicesBento";
import { CaseStudies } from "./components/CaseStudies";
import { Industries } from "./components/Industries";
import { AICapability } from "./components/AICapability";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Testimonials";
import { GlobalPresence } from "./components/GlobalPresence";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif", background: "#FAFAFA" }}
    >
      {/* H-00: Navigation */}
      <Navbar />

      {/* H-01: Premium Hero Section */}
      <HeroSection />

      {/* LP-01: Trusted By / Logo Cloud */}
      <LogoCloud />

      {/* SV-01: Services Bento Grid */}
      <ServicesBento />

      {/* CS-01: Featured Case Studies */}
      <CaseStudies />

      {/* IN-01: Industries */}
      <Industries />

      {/* AI-01: AI Capability Showcase */}
      <AICapability />

      {/* PR-01: Engineering Process Timeline */}
      <ProcessTimeline />

      {/* TX-01: Technology Stack */}
      <TechStack />

      {/* TS-01: Testimonials */}
      <Testimonials />

      {/* GP-01: Global Presence */}
      <GlobalPresence />

      {/* CTA-01: Primary Conversion CTA */}
      <CTASection />

      {/* FD-01: Premium Footer */}
      <Footer />
    </div>
  );
}
