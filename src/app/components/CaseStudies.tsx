import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    id: 1,
    industry: "FinTech",
    title: "AI-Powered Risk Intelligence Platform",
    client: "Global Investment Bank",
    description:
      "Architected a real-time risk assessment platform processing 2M+ daily transactions using custom ML models, reducing fraud losses by 84% and enabling same-day compliance reporting.",
    metrics: [
      { icon: TrendingUp, value: "84%", label: "Fraud reduction" },
      { icon: Clock, value: "0.8ms", label: "Decision latency" },
      { icon: Users, value: "$140M", label: "Losses prevented" },
    ],
    stack: ["Python", "Kubernetes", "Kafka", "TensorFlow", "AWS"],
    accent: "#2563EB",
    bgAccent: "rgba(37,99,235,0.04)",
    visualBg: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(79,70,229,0.06))",
  },
  {
    id: 2,
    industry: "Healthcare",
    title: "Enterprise Patient Intelligence Suite",
    client: "Leading US Hospital Network",
    description:
      "Built a HIPAA-compliant AI diagnostic platform integrating EHR data, imaging AI, and predictive analytics — enabling physicians to improve early detection rates across 47 hospital sites.",
    metrics: [
      { icon: TrendingUp, value: "62%", label: "Earlier detection" },
      { icon: Users, value: "2.4M", label: "Patients served" },
      { icon: Clock, value: "4.2s", label: "AI response time" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "PyTorch", "GCP"],
    accent: "#059669",
    bgAccent: "rgba(5,150,105,0.04)",
    visualBg: "linear-gradient(135deg, rgba(5,150,105,0.08), rgba(6,182,212,0.06))",
  },
  {
    id: 3,
    industry: "E-commerce",
    title: "Hyper-Personalization Commerce Engine",
    client: "Top-10 Global Retailer",
    description:
      "Engineered an ML-driven personalization engine serving 50M+ daily product recommendations, resulting in a 340% increase in conversion rate and $2.1B in annual incremental revenue.",
    metrics: [
      { icon: TrendingUp, value: "340%", label: "Conversion lift" },
      { icon: Users, value: "$2.1B", label: "Revenue impact" },
      { icon: Clock, value: "50M+", label: "Daily recommendations" },
    ],
    stack: ["Next.js", "Go", "Redis", "Apache Spark", "Azure"],
    accent: "#7C3AED",
    bgAccent: "rgba(124,58,237,0.04)",
    visualBg: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(219,39,119,0.06))",
  },
];

function DashboardVisual({ caseItem }: { caseItem: typeof cases[0] }) {
  const widths = [88, 65, 72, 50, 90];
  const colors = [caseItem.accent, `${caseItem.accent}88`, `${caseItem.accent}60`, `${caseItem.accent}44`, `${caseItem.accent}30`];

  return (
    <div
      className="w-full h-full min-h-[280px] lg:min-h-0 rounded-2xl flex flex-col justify-between p-6"
      style={{ background: caseItem.visualBg, border: `1px solid ${caseItem.accent}18` }}
    >
      {/* Top metrics */}
      <div className="flex gap-3 mb-4">
        {caseItem.metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="flex-1 p-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(226,232,240,0.6)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  color: caseItem.accent,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.value}
              </p>
              <p
                className="mt-1 text-[10.5px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748B" }}
              >
                {m.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bar chart */}
      <div
        className="p-4 rounded-xl flex-1"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(226,232,240,0.5)",
        }}
      >
        <p
          className="text-[11px] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
        >
          Performance Overview
        </p>
        <div className="space-y-2.5">
          {["Q1", "Q2", "Q3", "Q4", "YTD"].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className="w-6 text-[10px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
              >
                {label}
              </span>
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ background: "rgba(226,232,240,0.5)", height: "6px" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${widths[i]}%`, background: colors[i] }}
                />
              </div>
              <span
                className="text-[10px] w-8 text-right"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#475569" }}
              >
                {widths[i]}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32" style={{ background: "#F5F7FA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <p
              className="text-[12px] tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
            >
              Case Studies
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
              Engineering Results
              <br />
              at Global Scale
            </h2>
          </div>
          <button
            className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-[14px] text-[13.5px] transition-all duration-200 hover:bg-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#475569",
              border: "1px solid rgba(226,232,240,0.8)",
            }}
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case study cards */}
        <div className="space-y-6">
          {cases.map((cs, idx) => (
            <div
              key={cs.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: hoveredId === cs.id ? `1px solid ${cs.accent}30` : "1px solid rgba(226,232,240,0.7)",
                boxShadow: hoveredId === cs.id ? "0 20px 60px rgba(0,0,0,0.07)" : "0 4px 20px rgba(0,0,0,0.04)",
                transform: hoveredId === cs.id ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredId(cs.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                {/* Text content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="px-3 py-1 rounded-full text-[12px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          background: `${cs.accent}10`,
                          color: cs.accent,
                          border: `1px solid ${cs.accent}20`,
                        }}
                      >
                        {cs.industry}
                      </span>
                      <span
                        className="text-[13px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                      >
                        {cs.client}
                      </span>
                    </div>

                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                        letterSpacing: "-0.02em",
                        color: "#0F172A",
                        lineHeight: "1.2",
                      }}
                    >
                      {cs.title}
                    </h3>

                    <p
                      className="mb-8"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: "#64748B",
                      }}
                    >
                      {cs.description}
                    </p>
                  </div>

                  {/* Stack chips */}
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-wider mb-3"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
                    >
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-xl text-[12px]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            background: "rgba(241,245,249,0.8)",
                            color: "#475569",
                            border: "1px solid rgba(226,232,240,0.6)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      className="inline-flex items-center gap-2 text-[13.5px] transition-all duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        color: cs.accent,
                      }}
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Visual side */}
                <div
                  className="p-6 flex items-stretch"
                  style={{ background: cs.bgAccent }}
                >
                  <DashboardVisual caseItem={cs} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
