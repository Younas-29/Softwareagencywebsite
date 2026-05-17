import { useState } from "react";
import { Monitor, Server, Cloud, Brain, Smartphone, GitBranch } from "lucide-react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    accent: "#2563EB",
    techs: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 97 },
      { name: "TypeScript", level: 98 },
      { name: "Vue.js", level: 88 },
      { name: "Tailwind CSS", level: 97 },
      { name: "Three.js", level: 82 },
      { name: "WebGL", level: 78 },
      { name: "Svelte", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    accent: "#4F46E5",
    techs: [
      { name: "Node.js", level: 97 },
      { name: "Python", level: 98 },
      { name: "Go", level: 92 },
      { name: "Rust", level: 85 },
      { name: "Java", level: 90 },
      { name: "GraphQL", level: 94 },
      { name: "PostgreSQL", level: 96 },
      { name: "Redis", level: 93 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    accent: "#0891B2",
    techs: [
      { name: "AWS", level: 97 },
      { name: "GCP", level: 94 },
      { name: "Azure", level: 91 },
      { name: "Kubernetes", level: 95 },
      { name: "Terraform", level: 93 },
      { name: "Docker", level: 98 },
      { name: "Helm", level: 90 },
      { name: "Pulumi", level: 85 },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
    accent: "#7C3AED",
    techs: [
      { name: "PyTorch", level: 96 },
      { name: "TensorFlow", level: 94 },
      { name: "LangChain", level: 95 },
      { name: "OpenAI API", level: 98 },
      { name: "Hugging Face", level: 93 },
      { name: "Vertex AI", level: 90 },
      { name: "Apache Spark", level: 88 },
      { name: "MLflow", level: 89 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    accent: "#D97706",
    techs: [
      { name: "React Native", level: 96 },
      { name: "Flutter", level: 92 },
      { name: "iOS (Swift)", level: 90 },
      { name: "Android (Kotlin)", level: 89 },
      { name: "Expo", level: 94 },
      { name: "Capacitor", level: 86 },
      { name: "PWA", level: 95 },
      { name: "App Clips", level: 82 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: GitBranch,
    accent: "#059669",
    techs: [
      { name: "GitHub Actions", level: 97 },
      { name: "ArgoCD", level: 91 },
      { name: "Prometheus", level: 93 },
      { name: "Grafana", level: 94 },
      { name: "Datadog", level: 92 },
      { name: "PagerDuty", level: 88 },
      { name: "Vault", level: 89 },
      { name: "Istio", level: 86 },
    ],
  },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const active = categories.find((c) => c.id === activeCategory)!;

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
              Technology Stack
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
              Built on Best-in-Class
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Modern Technology
              </span>
            </h2>
          </div>
          <p
            className="max-w-[340px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#64748B",
            }}
          >
            We stay current with every major technology advancement and select
            the right tools for each specific challenge.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Category tabs — left */}
          <div className="lg:col-span-3 space-y-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.9)" : "transparent",
                    border: isActive ? `1px solid ${cat.accent}20` : "1px solid transparent",
                    boxShadow: isActive ? "0 4px 16px rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: isActive ? `${cat.accent}12` : "rgba(241,245,249,0.5)",
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: isActive ? cat.accent : "#94A3B8" }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "14px",
                      color: isActive ? "#0F172A" : "#64748B",
                    }}
                  >
                    {cat.label}
                  </span>
                  {isActive && (
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ background: cat.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tech display — right */}
          <div className="lg:col-span-9">
            <div
              className="p-6 lg:p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: `1px solid ${active.accent}15`,
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)` }}
                >
                  <active.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#0F172A",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {active.label} Technologies
                  </h3>
                  <p
                    className="text-[12.5px]"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#94A3B8", fontWeight: 500 }}
                  >
                    {active.techs.length} technologies · Expert proficiency
                  </p>
                </div>
              </div>

              {/* Tech grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.techs.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-200 hover:shadow-sm"
                    style={{
                      background: "rgba(248,250,252,0.8)",
                      border: "1px solid rgba(226,232,240,0.5)",
                      animation: `techFade 0.25s ease ${i * 0.04}s both`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${active.accent}10` }}
                    >
                      <span
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontWeight: 800,
                          fontSize: "9px",
                          color: active.accent,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tech.name.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-[13.5px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#0F172A" }}
                        >
                          {tech.name}
                        </span>
                        <span
                          className="text-[11px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: active.accent }}
                        >
                          {tech.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(226,232,240,0.6)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${tech.level}%`,
                            background: `linear-gradient(90deg, ${active.accent}, ${active.accent}88)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chips summary */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6" style={{ borderTop: "1px solid rgba(226,232,240,0.5)" }}>
                {active.techs.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-full text-[12px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      background: `${active.accent}08`,
                      color: active.accent,
                      border: `1px solid ${active.accent}18`,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes techFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
