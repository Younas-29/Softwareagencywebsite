import { Heart, DollarSign, ShoppingBag, GraduationCap, Truck, Gamepad2, Building2, Layers, ArrowRight } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    icon: DollarSign,
    name: "FinTech",
    description: "Payment infrastructure, trading platforms, risk analytics, and regulatory compliance systems for global financial institutions.",
    solutions: ["Core Banking", "Risk Analytics", "RegTech", "Trading Systems"],
    accent: "#2563EB",
    stat: "$140B+",
    statLabel: "Transactions processed",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "HIPAA-compliant AI diagnostics, EHR integrations, telemedicine platforms, and clinical workflow automation.",
    solutions: ["AI Diagnostics", "EHR Integration", "Telemedicine", "Clinical AI"],
    accent: "#059669",
    stat: "2.4M+",
    statLabel: "Patients served",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    description: "High-traffic commerce platforms, ML-driven personalization engines, and omnichannel retail infrastructure.",
    solutions: ["Commerce Platform", "Personalization", "Inventory AI", "Analytics"],
    accent: "#7C3AED",
    stat: "$2.1B+",
    statLabel: "Annual revenue driven",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Adaptive learning platforms, LMS architecture, AI tutoring systems, and educational content delivery networks.",
    solutions: ["LMS Platform", "Adaptive Learning", "AI Tutoring", "Analytics"],
    accent: "#D97706",
    stat: "5M+",
    statLabel: "Learners impacted",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Real-time fleet intelligence, route optimization AI, supply chain visibility, and warehouse automation systems.",
    solutions: ["Route Optimization", "Fleet Intelligence", "Supply Chain", "WMS"],
    accent: "#0891B2",
    stat: "40%",
    statLabel: "Cost reduction avg",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "Multiplayer backend infrastructure, game economy systems, anti-cheat AI, and cross-platform game development.",
    solutions: ["Game Backend", "Economy Systems", "Anti-Cheat AI", "Live Ops"],
    accent: "#9333EA",
    stat: "100M+",
    statLabel: "Active players",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "PropTech platforms, AI valuation models, smart building systems, and digital transaction infrastructure.",
    solutions: ["PropTech Platform", "AI Valuation", "Smart Buildings", "CRM"],
    accent: "#DC2626",
    stat: "$8B+",
    statLabel: "Properties analyzed",
  },
  {
    icon: Layers,
    name: "SaaS",
    description: "Multi-tenant architecture, billing infrastructure, developer tools, and enterprise-grade SaaS platform engineering.",
    solutions: ["Multi-tenancy", "Billing Systems", "Developer Tools", "APIs"],
    accent: "#4F46E5",
    stat: "500+",
    statLabel: "SaaS products built",
  },
];

export function Industries() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <p
              className="text-[12px] tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
            >
              Industries
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
              Deep Domain Expertise
              <br />
              Across Every Vertical
            </h2>
          </div>
          <p
            className="max-w-[360px] lg:text-right"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#64748B",
            }}
          >
            We don't generalize — we've built production systems in every major
            industry vertical with specialized teams for each.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isHovered = hoveredId === industry.name;

            return (
              <div
                key={industry.name}
                className="relative p-6 rounded-3xl cursor-pointer transition-all duration-300"
                style={{
                  background: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${isHovered ? `${industry.accent}25` : "rgba(226,232,240,0.7)"}`,
                  boxShadow: isHovered ? "0 20px 50px rgba(0,0,0,0.07)" : "0 4px 16px rgba(0,0,0,0.03)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredId(industry.name)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: isHovered ? `${industry.accent}12` : "rgba(241,245,249,0.8)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: isHovered ? industry.accent : "#64748B" }} />
                </div>

                {/* Name */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    letterSpacing: "-0.01em",
                    color: "#0F172A",
                  }}
                >
                  {industry.name}
                </h3>

                {/* Description */}
                <p
                  className="mb-5 text-[13.5px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#64748B", lineHeight: "1.65" }}
                >
                  {industry.description}
                </p>

                {/* Solutions */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {industry.solutions.map((sol) => (
                    <span
                      key={sol}
                      className="px-2.5 py-1 rounded-full text-[11px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        background: `${industry.accent}08`,
                        color: industry.accent,
                        border: `1px solid ${industry.accent}18`,
                      }}
                    >
                      {sol}
                    </span>
                  ))}
                </div>

                {/* Stat */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(226,232,240,0.5)" }}
                >
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: industry.accent,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {industry.stat}
                  </p>
                  <p
                    className="text-[11.5px] mt-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                  >
                    {industry.statLabel}
                  </p>
                </div>

                {isHovered && (
                  <div
                    className="absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: `${industry.accent}12` }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: industry.accent }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
