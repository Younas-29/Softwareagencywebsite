import { useState } from "react";
import { Search, Compass, Palette, Code2, CheckSquare, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    id: 1,
    phase: "01",
    title: "Discovery",
    icon: Search,
    duration: "1–2 Weeks",
    description:
      "Deep-dive stakeholder interviews, technical landscape analysis, competitive benchmarking, and requirement documentation to align all teams before a single line of code is written.",
    deliverables: ["Requirements Document", "Stakeholder Map", "Technical Audit", "Risk Assessment"],
    accent: "#2563EB",
  },
  {
    id: 2,
    phase: "02",
    title: "Strategy",
    icon: Compass,
    duration: "1–2 Weeks",
    description:
      "Architecture blueprinting, technology selection, team composition planning, sprint roadmap design, and budget/timeline alignment with leadership.",
    deliverables: ["Architecture Blueprint", "Tech Stack Decision", "Sprint Roadmap", "Resource Plan"],
    accent: "#4F46E5",
  },
  {
    id: 3,
    phase: "03",
    title: "Design",
    icon: Palette,
    duration: "2–3 Weeks",
    description:
      "UX research, information architecture, interactive prototyping, design system creation, and stakeholder validation across all user journeys.",
    deliverables: ["Design System", "Prototypes", "User Flows", "Design Handoff"],
    accent: "#7C3AED",
  },
  {
    id: 4,
    phase: "04",
    title: "Development",
    icon: Code2,
    duration: "6–24 Weeks",
    description:
      "Agile sprint-based engineering with weekly demos, continuous integration, code reviews, and transparent progress tracking through your dedicated portal.",
    deliverables: ["Sprint Releases", "CI/CD Pipeline", "API Documentation", "Code Reviews"],
    accent: "#0891B2",
  },
  {
    id: 5,
    phase: "05",
    title: "QA & Testing",
    icon: CheckSquare,
    duration: "2–4 Weeks",
    description:
      "Automated test coverage, performance benchmarking, security penetration testing, accessibility audits, and user acceptance testing with real stakeholders.",
    deliverables: ["Test Reports", "Bug Resolution", "Performance Audit", "Security Report"],
    accent: "#059669",
  },
  {
    id: 6,
    phase: "06",
    title: "Deployment",
    icon: Rocket,
    duration: "1–2 Weeks",
    description:
      "Zero-downtime production deployment, infrastructure provisioning, monitoring setup, runbook documentation, and team handoff with comprehensive knowledge transfer.",
    deliverables: ["Production Deploy", "Monitoring Setup", "Runbooks", "Team Handoff"],
    accent: "#D97706",
  },
  {
    id: 7,
    phase: "07",
    title: "Scale",
    icon: TrendingUp,
    duration: "Ongoing",
    description:
      "Continuous performance optimization, feature iteration based on real user data, infrastructure scaling, and long-term engineering partnership for compounding product growth.",
    deliverables: ["Growth Roadmap", "Performance OKRs", "Scaling Plan", "Ongoing Support"],
    accent: "#DC2626",
  },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];
  const Icon = active.icon;

  return (
    <section className="py-32" style={{ background: "#F5F7FA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[12px] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
          >
            Engineering Process
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
            How We Deliver
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Exceptional Products
            </span>
          </h2>
          <p
            className="max-w-[500px] mx-auto mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#64748B",
            }}
          >
            A proven 7-phase methodology refined across 500+ enterprise projects,
            designed for predictability and quality at every stage.
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="flex items-center overflow-x-auto gap-0 mb-10 pb-2">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;
            const isPast = idx < activeStep;

            return (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-2 transition-all duration-200"
                  style={{ minWidth: "90px" }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)`
                        : isPast
                        ? `${step.accent}15`
                        : "rgba(255,255,255,0.8)",
                      border: isActive
                        ? `2px solid ${step.accent}`
                        : `1px solid ${isPast ? `${step.accent}30` : "rgba(226,232,240,0.7)"}`,
                      boxShadow: isActive ? `0 8px 24px ${step.accent}30` : "none",
                    }}
                  >
                    <StepIcon
                      className="w-4.5 h-4.5"
                      style={{
                        width: "18px",
                        height: "18px",
                        color: isActive ? "white" : isPast ? step.accent : "#94A3B8",
                      }}
                    />
                  </div>
                  <span
                    className="text-[12px] text-center"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? step.accent : "#94A3B8",
                    }}
                  >
                    {step.title}
                  </span>
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className="flex-1 mx-2 mt-[-16px]"
                    style={{
                      height: "2px",
                      minWidth: "32px",
                      background: idx < activeStep
                        ? `linear-gradient(90deg, ${steps[idx].accent}60, ${steps[idx + 1].accent}60)`
                        : "rgba(226,232,240,0.5)",
                      borderRadius: "99px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Active step detail */}
        <div
          className="grid lg:grid-cols-5 gap-6 rounded-3xl overflow-hidden transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${active.accent}20`,
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          {/* Content */}
          <div className="lg:col-span-3 p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)`,
                  boxShadow: `0 8px 24px ${active.accent}30`,
                }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p
                  className="text-[12px] uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
                >
                  Phase {active.phase}
                </p>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    letterSpacing: "-0.02em",
                    color: "#0F172A",
                    lineHeight: 1.2,
                  }}
                >
                  {active.title}
                </h3>
              </div>
              <div
                className="ml-auto px-3 py-1.5 rounded-full"
                style={{
                  background: `${active.accent}10`,
                  border: `1px solid ${active.accent}20`,
                }}
              >
                <span
                  className="text-[12px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: active.accent }}
                >
                  {active.duration}
                </span>
              </div>
            </div>

            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#475569",
              }}
            >
              {active.description}
            </p>

            <div className="flex gap-3">
              {activeStep < steps.length - 1 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-5 py-2.5 rounded-[14px] text-[13.5px] text-white transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)`,
                  }}
                >
                  Next Phase →
                </button>
              )}
            </div>
          </div>

          {/* Deliverables */}
          <div
            className="lg:col-span-2 p-8 lg:p-10"
            style={{
              background: `${active.accent}06`,
              borderLeft: `1px solid ${active.accent}15`,
            }}
          >
            <p
              className="text-[12px] uppercase tracking-wider mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
            >
              Key Deliverables
            </p>
            <div className="space-y-3">
              {active.deliverables.map((d, i) => (
                <div
                  key={d}
                  className="flex items-center gap-3 p-3.5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: `1px solid ${active.accent}15`,
                    animation: `fadeSlide 0.3s ease ${i * 0.05}s both`,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${active.accent}12` }}
                  >
                    <span
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        color: active.accent,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="text-[14px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0F172A" }}
                  >
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
