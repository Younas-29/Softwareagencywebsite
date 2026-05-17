import { MapPin, Clock, Users, Globe } from "lucide-react";

const offices = [
  { city: "San Francisco", country: "USA", tz: "PST", role: "HQ & AI Lab", x: 12, y: 38, accent: "#2563EB" },
  { city: "New York", country: "USA", tz: "EST", role: "Enterprise Sales", x: 18, y: 35, accent: "#2563EB" },
  { city: "London", country: "UK", tz: "GMT", role: "Europe HQ", x: 46, y: 28, accent: "#4F46E5" },
  { city: "Berlin", country: "Germany", tz: "CET", role: "Engineering Hub", x: 50, y: 26, accent: "#4F46E5" },
  { city: "Dubai", country: "UAE", tz: "GST", role: "MENA Office", x: 57, y: 42, accent: "#0891B2" },
  { city: "Singapore", country: "Singapore", tz: "SGT", role: "APAC HQ", x: 75, y: 52, accent: "#059669" },
  { city: "Tokyo", country: "Japan", tz: "JST", role: "East Asia", x: 82, y: 33, accent: "#7C3AED" },
  { city: "Sydney", country: "Australia", tz: "AEST", role: "ANZ Office", x: 84, y: 68, accent: "#D97706" },
];

const regions = [
  { name: "North America", countries: 3, engineers: 180, flag: "🇺🇸" },
  { name: "Europe", countries: 12, engineers: 140, flag: "🇪🇺" },
  { name: "Middle East", countries: 6, engineers: 60, flag: "🌍" },
  { name: "Asia Pacific", countries: 14, engineers: 120, flag: "🌏" },
];

const stats = [
  { value: "40+", label: "Countries Served", icon: Globe },
  { value: "8", label: "Global Offices", icon: MapPin },
  { value: "500+", label: "Engineers Worldwide", icon: Users },
  { value: "24/7", label: "Support Coverage", icon: Clock },
];

export function GlobalPresence() {
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
              Global Footprint
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
              Delivering Excellence
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Across Every Timezone
              </span>
            </h2>
          </div>
          <p
            className="max-w-[360px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "1.7",
              color: "#64748B",
            }}
          >
            8 offices across 4 continents, 500+ engineers, and 24/7 delivery coverage
            ensuring your project never sleeps.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-5 rounded-2xl flex items-center gap-4"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(226,232,240,0.6)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,99,235,0.08)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#0F172A",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[12px] mt-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748B" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map + offices */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* SVG world map representation */}
          <div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(226,232,240,0.6)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              minHeight: "320px",
            }}
          >
            {/* Map background pattern */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 50% 40%, rgba(37,99,235,0.04) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Simplified world map SVG */}
            <div className="relative w-full h-full p-8 flex items-center justify-center" style={{ minHeight: "300px" }}>
              <svg
                viewBox="0 0 900 500"
                className="w-full h-full"
                style={{ maxHeight: "300px" }}
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Simplified continent shapes */}
                {/* North America */}
                <path
                  d="M 80 80 L 200 60 L 240 90 L 230 160 L 200 200 L 160 220 L 120 200 L 80 170 Z"
                  fill="rgba(37,99,235,0.08)"
                  stroke="rgba(37,99,235,0.15)"
                  strokeWidth="1.5"
                />
                {/* South America */}
                <path
                  d="M 170 230 L 220 220 L 240 280 L 230 350 L 190 380 L 160 360 L 150 290 Z"
                  fill="rgba(37,99,235,0.06)"
                  stroke="rgba(37,99,235,0.12)"
                  strokeWidth="1.5"
                />
                {/* Europe */}
                <path
                  d="M 390 60 L 490 55 L 510 90 L 490 130 L 440 140 L 390 120 L 370 90 Z"
                  fill="rgba(79,70,229,0.08)"
                  stroke="rgba(79,70,229,0.15)"
                  strokeWidth="1.5"
                />
                {/* Africa */}
                <path
                  d="M 410 150 L 490 145 L 520 200 L 510 300 L 460 360 L 400 320 L 380 240 L 390 180 Z"
                  fill="rgba(79,70,229,0.06)"
                  stroke="rgba(79,70,229,0.12)"
                  strokeWidth="1.5"
                />
                {/* Asia */}
                <path
                  d="M 510 40 L 750 30 L 790 100 L 770 180 L 700 200 L 620 180 L 560 160 L 510 120 Z"
                  fill="rgba(6,182,212,0.07)"
                  stroke="rgba(6,182,212,0.14)"
                  strokeWidth="1.5"
                />
                {/* Australia */}
                <path
                  d="M 710 310 L 800 290 L 830 360 L 790 400 L 720 390 L 690 350 Z"
                  fill="rgba(217,119,6,0.07)"
                  stroke="rgba(217,119,6,0.14)"
                  strokeWidth="1.5"
                />

                {/* Office markers */}
                {offices.map((office) => {
                  const cx = (office.x / 100) * 900;
                  const cy = (office.y / 100) * 500;
                  return (
                    <g key={office.city}>
                      {/* Pulse ring */}
                      <circle cx={cx} cy={cy} r="14" fill={`${office.accent}18`} />
                      <circle cx={cx} cy={cy} r="8" fill={`${office.accent}30`} />
                      <circle cx={cx} cy={cy} r="4" fill={office.accent} />
                      {/* City label */}
                      <text
                        x={cx}
                        y={cy - 16}
                        textAnchor="middle"
                        fill="#0F172A"
                        style={{
                          fontSize: "9px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {office.city}
                      </text>
                    </g>
                  );
                })}

                {/* Connection lines */}
                {offices.slice(0, -1).map((office, i) => {
                  const next = offices[i + 1];
                  const x1 = (office.x / 100) * 900;
                  const y1 = (office.y / 100) * 500;
                  const x2 = (next.x / 100) * 900;
                  const y2 = (next.y / 100) * 500;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(79,70,229,0.12)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                  );
                })}
              </svg>
            </div>

            <div
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
              style={{ padding: "0 16px" }}
            >
              <p
                className="text-[11px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
              >
                8 offices · 4 continents · 40+ countries served
              </p>
            </div>
          </div>

          {/* Regions panel */}
          <div className="space-y-3">
            {regions.map((region) => (
              <div
                key={region.name}
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(226,232,240,0.6)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{region.flag}</span>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0F172A",
                      }}
                    >
                      {region.name}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 800,
                        fontSize: "20px",
                        color: "#2563EB",
                        lineHeight: 1,
                      }}
                    >
                      {region.countries}+
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                    >
                      Countries
                    </p>
                  </div>
                  <div
                    className="w-px"
                    style={{ background: "rgba(226,232,240,0.5)" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 800,
                        fontSize: "20px",
                        color: "#4F46E5",
                        lineHeight: 1,
                      }}
                    >
                      {region.engineers}+
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                    >
                      Engineers
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Office list */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(226,232,240,0.6)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-wider mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
              >
                Key Offices
              </p>
              <div className="space-y-2">
                {offices.slice(0, 4).map((office) => (
                  <div key={office.city} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: office.accent }}
                      />
                      <span
                        className="text-[12.5px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#0F172A" }}
                      >
                        {office.city}
                      </span>
                    </div>
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                    >
                      {office.tz}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
