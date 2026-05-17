import { ArrowRight, Sparkles, TrendingUp, Users, Globe, CheckCircle2 } from "lucide-react";

const metricCards = [
  { icon: TrendingUp, value: "98%", label: "Client Retention", color: "#2563EB" },
  { icon: Users, value: "500+", label: "Engineers", color: "#4F46E5" },
  { icon: Globe, value: "40+", label: "Countries", color: "#06B6D4" },
];

const dashboardItems = [
  { label: "Model Accuracy", value: "99.2%", delta: "+2.4%", positive: true },
  { label: "API Latency", value: "12ms", delta: "-8ms", positive: true },
  { label: "Deployments", value: "1,284", delta: "+156", positive: true },
  { label: "Uptime", value: "99.99%", delta: "30d avg", positive: true },
];

const badges = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant"];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          transform: "translate(-20%, 20%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                background: "rgba(79,70,229,0.04)",
                borderColor: "rgba(79,70,229,0.15)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#4F46E5" }} />
              <span
                className="text-[12.5px] tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#4F46E5" }}
              >
                AI-FIRST ENGINEERING COMPANY
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1
                className="leading-none tracking-tight"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(44px, 5.5vw, 72px)",
                  letterSpacing: "-0.04em",
                  color: "#0F172A",
                  lineHeight: 1.0,
                }}
              >
                Build the Future
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  with AI-Powered
                </span>
                <br />
                Engineering
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p
              className="max-w-[500px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.75",
                color: "#475569",
              }}
            >
              We architect and deliver enterprise-grade software systems, AI platforms,
              and scalable SaaS products trusted by global companies across 40+ countries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="group flex items-center gap-2 px-6 py-3.5 rounded-[14px] text-white text-[14.5px] transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  boxShadow: "0 8px 30px rgba(79,70,229,0.3)",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLElement;
                  btn.style.boxShadow = "0 12px 40px rgba(79,70,229,0.4)";
                  btn.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLElement;
                  btn.style.boxShadow = "0 8px 30px rgba(79,70,229,0.3)";
                  btn.style.transform = "translateY(0)";
                }}
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3.5 rounded-[14px] text-[14.5px] transition-all duration-200 hover:bg-slate-100"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  color: "#0F172A",
                  border: "1px solid rgba(226,232,240,0.8)",
                  background: "rgba(255,255,255,0.8)",
                }}
              >
                View Case Studies
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(226,232,240,0.8)",
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#16A34A" }} />
                  <span
                    className="text-[12px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#475569" }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Main dashboard card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(226,232,240,0.9)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Dashboard header */}
              <div
                className="px-5 py-3.5 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(226,232,240,0.6)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                </div>
                <span
                  className="text-[12px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                >
                  nexusai.platform / production
                </span>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(22,163,74,0.08)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#16A34A" }}
                  >
                    Live
                  </span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {dashboardItems.map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl"
                      style={{
                        background: "rgba(248,250,252,0.8)",
                        border: "1px solid rgba(226,232,240,0.5)",
                      }}
                    >
                      <p
                        className="text-[11px] mb-1"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[22px] leading-none"
                        style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, color: "#0F172A" }}
                      >
                        {item.value}
                      </p>
                      <p
                        className="text-[11px] mt-1"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          color: item.positive ? "#16A34A" : "#DC2626",
                        }}
                      >
                        {item.delta}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Activity bar */}
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(248,250,252,0.8)",
                    border: "1px solid rgba(226,232,240,0.5)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[12px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#0F172A" }}
                    >
                      AI Pipeline Activity
                    </span>
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                    >
                      Last 7 days
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-14">
                    {[65, 80, 55, 90, 70, 95, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm transition-all duration-200"
                        style={{
                          height: `${h}%`,
                          background: i === 5
                            ? "linear-gradient(180deg, #2563EB, #4F46E5)"
                            : "rgba(79,70,229,0.15)",
                          borderRadius: "3px",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Model status */}
                <div className="space-y-2">
                  {[
                    { name: "GPT-4 Turbo", status: "Active", load: 78, color: "#2563EB" },
                    { name: "Claude 3.5", status: "Active", load: 92, color: "#4F46E5" },
                    { name: "Gemini Pro", status: "Standby", load: 45, color: "#06B6D4" },
                  ].map((model) => (
                    <div key={model.name} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="text-[12px]"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#475569" }}
                          >
                            {model.name}
                          </span>
                          <span
                            className="text-[11px]"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: model.load > 80 ? "#16A34A" : "#94A3B8" }}
                          >
                            {model.load}%
                          </span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: "rgba(226,232,240,0.5)" }}
                        >
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${model.load}%`,
                              background: `linear-gradient(90deg, ${model.color}, ${model.color}88)`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            {metricCards.map((card, i) => {
              const positions = [
                { top: "-40px", right: "60px" },
                { bottom: "60px", right: "-50px" },
                { bottom: "-30px", left: "40px" },
              ];
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="absolute flex items-center gap-2.5 px-4 py-3 rounded-2xl"
                  style={{
                    ...positions[i],
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(226,232,240,0.8)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    backdropFilter: "blur(12px)",
                    zIndex: 10,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}12` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div>
                    <p
                      className="leading-none"
                      style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F172A" }}
                    >
                      {card.value}
                    </p>
                    <p
                      className="text-[11.5px] mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                    >
                      {card.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
