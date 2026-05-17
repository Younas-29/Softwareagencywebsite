import { Brain, Cpu, Network, Zap, ArrowRight, CheckCircle2, Activity } from "lucide-react";

const capabilities = [
  "Large Language Model Fine-tuning & Deployment",
  "RAG Pipelines & Knowledge Graph Systems",
  "Computer Vision & Image Recognition",
  "Real-time AI Inference at Scale",
  "Multi-modal AI Application Development",
  "AutoML & Hyperparameter Optimization",
  "Responsible AI & Bias Mitigation",
  "Edge AI & On-Device Inference",
];

const llmIntegrations = [
  { name: "GPT-4", provider: "OpenAI", status: "Active", load: 82 },
  { name: "Claude 3.5", provider: "Anthropic", status: "Active", load: 91 },
  { name: "Gemini Pro", provider: "Google", status: "Active", load: 67 },
  { name: "Llama 3", provider: "Meta", status: "Active", load: 74 },
];

const workflowNodes = [
  { label: "Data Ingestion", icon: Activity, x: 8, y: 40 },
  { label: "Preprocessing", icon: Cpu, x: 30, y: 20 },
  { label: "Model Training", icon: Brain, x: 55, y: 40 },
  { label: "Evaluation", icon: Network, x: 77, y: 20 },
  { label: "Deployment", icon: Zap, x: 92, y: 40 },
];

export function AICapability() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#0B1120" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 w-[900px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(79,70,229,0.4) 0%, transparent 70%)",
          transform: "translate(-50%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.3) 0%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(79,70,229,0.12)",
              border: "1px solid rgba(79,70,229,0.25)",
            }}
          >
            <Brain className="w-3.5 h-3.5" style={{ color: "#818CF8" }} />
            <span
              className="text-[12px] tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#818CF8" }}
            >
              AI-FIRST ENGINEERING
            </span>
          </div>
          <h2
            className="max-w-[700px] mx-auto"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              lineHeight: "1.1",
            }}
          >
            Enterprise AI at
            <span
              style={{
                background: "linear-gradient(135deg, #818CF8, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Production Scale
            </span>
          </h2>
          <p
            className="max-w-[560px] mx-auto mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "1.7",
              color: "rgba(248,250,252,0.55)",
            }}
          >
            From LLM orchestration to custom model deployment — we build the AI backbone
            that transforms enterprise operations at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — Capabilities */}
          <div className="space-y-6">
            {/* AI workflow diagram */}
            <div
              className="p-6 rounded-3xl relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-[12px] uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.4)" }}
              >
                AI Pipeline
              </p>

              {/* Workflow nodes */}
              <div className="relative h-24 mb-2">
                {/* Connector line */}
                <div
                  className="absolute top-1/2 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, rgba(79,70,229,0.4), rgba(6,182,212,0.4))", top: "44px" }}
                />
                {workflowNodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.label}
                      className="absolute flex flex-col items-center gap-2"
                      style={{ left: `${node.x}%`, top: `${node.y - 10}%`, transform: "translateX(-50%)" }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{
                          background: i === 2
                            ? "linear-gradient(135deg, rgba(79,70,229,0.5), rgba(6,182,212,0.3))"
                            : "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          boxShadow: i === 2 ? "0 0 20px rgba(79,70,229,0.4)" : "none",
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: i === 2 ? "#A5B4FC" : "rgba(248,250,252,0.5)" }} />
                      </div>
                      <span
                        className="text-[10px] whitespace-nowrap text-center"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(248,250,252,0.45)" }}
                      >
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LLM integrations */}
            <div
              className="p-6 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-[12px] uppercase tracking-widest mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.4)" }}
              >
                LLM Integrations
              </p>
              <div className="space-y-3">
                {llmIntegrations.map((llm) => (
                  <div key={llm.name} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <Brain className="w-4 h-4" style={{ color: "rgba(129,140,248,0.8)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-[13px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#F8FAFC" }}
                        >
                          {llm.name}
                        </span>
                        <span
                          className="text-[11px]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(248,250,252,0.4)" }}
                        >
                          {llm.provider}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${llm.load}%`,
                            background: "linear-gradient(90deg, #4F46E5, #06B6D4)",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1 px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.2)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span
                        className="text-[10px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#4ADE80" }}
                      >
                        {llm.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Capabilities list */}
          <div className="space-y-6">
            <div
              className="p-6 lg:p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-[12px] uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.4)" }}
              >
                Core AI Capabilities
              </p>
              <div className="space-y-4">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#06B6D4" }}
                    />
                    <span
                      className="text-[14.5px] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "rgba(248,250,252,0.7)" }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live metrics */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "99.9%", label: "Model Uptime" },
                { value: "<12ms", label: "Avg Latency" },
                { value: "1B+", label: "Daily Inferences" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: "rgba(79,70,229,0.1)",
                    border: "1px solid rgba(79,70,229,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#A5B4FC",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1.5 text-[11px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(248,250,252,0.4)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[14px] text-[14px] transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, rgba(79,70,229,0.9), rgba(6,182,212,0.7))",
                color: "#F8FAFC",
                border: "1px solid rgba(79,70,229,0.4)",
              }}
            >
              Explore AI Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
