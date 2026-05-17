const logos = [
  { name: "Stripe", abbr: "STR" },
  { name: "Airbnb", abbr: "AIR" },
  { name: "Notion", abbr: "NTN" },
  { name: "Vercel", abbr: "VCL" },
  { name: "Linear", abbr: "LNR" },
  { name: "Figma", abbr: "FGM" },
  { name: "Shopify", abbr: "SPF" },
  { name: "Atlassian", abbr: "ATL" },
  { name: "Twilio", abbr: "TWL" },
  { name: "Datadog", abbr: "DDG" },
  { name: "Snowflake", abbr: "SNW" },
  { name: "HashiCorp", abbr: "HSH" },
];

const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "$2.4B+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "40+", label: "Countries Served" },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-6 py-3 mx-3 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.8)",
        border: "1px solid rgba(226,232,240,0.6)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #F1F5F9, #E2E8F0)" }}
      >
        <span
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 800,
            fontSize: "9px",
            color: "#475569",
            letterSpacing: "0.04em",
          }}
        >
          {abbr}
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          color: "#64748B",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export function LogoCloud() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="py-20"
      style={{ background: "#F5F7FA", borderTop: "1px solid rgba(226,232,240,0.6)", borderBottom: "1px solid rgba(226,232,240,0.6)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-[13px] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
          >
            Trusted by world-class teams
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #F5F7FA, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #F5F7FA, transparent)" }}
          />
          <div
            className="flex items-center"
            style={{
              animation: "marquee 35s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} abbr={logo.abbr} />
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(226,232,240,0.6)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="leading-none mb-2"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "36px",
                  color: "#0F172A",
                  letterSpacing: "-0.02em",
                }}
              >
                {metric.value}
              </p>
              <p
                className="text-[13.5px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748B" }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
