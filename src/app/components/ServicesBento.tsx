import { Brain, Code2, Layers, Globe, Cloud, Shield, Lightbulb, Users, Palette, Gamepad2, Megaphone, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "LLM fine-tuning, computer vision, NLP pipelines, predictive analytics, and custom AI model development for enterprise-scale deployments.",
    tags: ["LLMs", "Computer Vision", "NLP", "MLOps"],
    accent: "#4F46E5",
    size: "large",
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Architecture & Development",
    description: "End-to-end SaaS platform architecture from multi-tenancy to payment infrastructure.",
    tags: ["Multi-tenant", "Scalable", "API-first"],
    accent: "#2563EB",
    size: "medium",
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke enterprise software engineered to your exact specifications and workflows.",
    tags: ["Enterprise", "Bespoke", "Agile"],
    accent: "#0891B2",
    size: "medium",
  },
  {
    id: "web-mobile",
    icon: Globe,
    title: "Enterprise Web & Mobile",
    description: "High-performance web platforms and cross-platform mobile applications at global scale.",
    tags: ["React", "React Native", "Next.js"],
    accent: "#7C3AED",
    size: "small",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native infrastructure, CI/CD pipelines, and Kubernetes orchestration for resilient systems.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
    accent: "#0369A1",
    size: "small",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise security audits, penetration testing, compliance frameworks, and zero-trust architecture implementation.",
    tags: ["SOC 2", "Pentesting", "Zero Trust"],
    accent: "#DC2626",
    size: "medium",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Strategic IT Consulting",
    description: "C-suite advisory, digital transformation roadmaps, and technology strategy for enterprise growth.",
    tags: ["CTO Advisory", "Roadmapping"],
    accent: "#D97706",
    size: "small",
  },
  {
    id: "teams",
    icon: Users,
    title: "Dedicated Engineering Teams",
    description: "Fully-managed, embedded engineering squads that integrate seamlessly with your organization.",
    tags: ["Staff Augmentation", "Managed Teams"],
    accent: "#059669",
    size: "small",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Premium product design, design systems, and user research for world-class digital experiences.",
    tags: ["Design Systems", "Research", "Figma"],
    accent: "#DB2777",
    size: "small",
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Game Development",
    description: "Cross-platform game development, real-time multiplayer systems, and game economy engineering.",
    tags: ["Unity", "Unreal", "Web3"],
    accent: "#7C3AED",
    size: "small",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven growth engineering, SEO architecture, and performance marketing systems.",
    tags: ["Growth", "SEO", "Analytics"],
    accent: "#EA580C",
    size: "small",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative p-6 rounded-3xl cursor-pointer transition-all duration-300 h-full"
      style={{
        background: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)",
        border: `1px solid ${hovered ? `${service.accent}25` : "rgba(226,232,240,0.7)"}`,
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.08)" : "0 4px 16px rgba(0,0,0,0.03)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
        style={{
          background: hovered ? `${service.accent}12` : "rgba(241,245,249,0.8)",
        }}
      >
        <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: hovered ? service.accent : "#64748B" }} />
      </div>

      <h3
        className="mb-2"
        style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 700,
          fontSize: service.size === "large" ? "20px" : "16px",
          color: "#0F172A",
          letterSpacing: "-0.01em",
          lineHeight: "1.3",
        }}
      >
        {service.title}
      </h3>

      <p
        className="mb-4"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "1.65",
          color: "#64748B",
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-[11px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              background: `${service.accent}08`,
              color: service.accent,
              border: `1px solid ${service.accent}18`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow on hover */}
      {hovered && (
        <div
          className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: `${service.accent}12` }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: service.accent }} />
        </div>
      )}
    </div>
  );
}

export function ServicesBento() {
  return (
    <section className="py-32" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-[640px] mb-16">
          <p
            className="text-[12px] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
          >
            What We Build
          </p>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 4vw, 52px)",
              letterSpacing: "-0.03em",
              color: "#0F172A",
              lineHeight: "1.1",
            }}
          >
            Services Engineered
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Enterprise Scale
            </span>
          </h2>
          <p
            className="mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#64748B",
            }}
          >
            From AI systems to global SaaS platforms — we deliver the full spectrum of
            modern software engineering for companies that demand excellence.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Large card — AI/ML */}
          <div className="lg:col-span-2 xl:col-span-2 lg:row-span-1">
            <ServiceCard service={services[0]} />
          </div>

          {/* Medium card — SaaS */}
          <div className="xl:col-span-1">
            <ServiceCard service={services[1]} />
          </div>

          {/* Medium card — Custom */}
          <div className="xl:col-span-1">
            <ServiceCard service={services[2]} />
          </div>

          {/* Small cards row */}
          <div><ServiceCard service={services[3]} /></div>
          <div><ServiceCard service={services[4]} /></div>
          <div><ServiceCard service={services[5]} /></div>
          <div><ServiceCard service={services[6]} /></div>

          {/* Last row */}
          <div><ServiceCard service={services[7]} /></div>
          <div><ServiceCard service={services[8]} /></div>
          <div><ServiceCard service={services[9]} /></div>
          <div><ServiceCard service={services[10]} /></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[14px] text-[14.5px] transition-all duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#0F172A",
              border: "1px solid rgba(226,232,240,0.8)",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
