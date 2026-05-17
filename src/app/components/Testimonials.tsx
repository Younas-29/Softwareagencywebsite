import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaPay",
    companyType: "FinTech · Series C",
    quote:
      "NexusAI transformed our entire transaction processing infrastructure. Within 8 months, we went from a fragile monolith to a cloud-native system processing $4B in monthly volume. Their AI fraud detection module alone saved us $18M in the first year. The engineering quality is unlike anything I've seen from an external partner.",
    results: ["$18M fraud savings", "4B monthly volume", "99.99% uptime"],
    rating: 5,
    initials: "SC",
    accent: "#2563EB",
  },
  {
    id: 2,
    name: "Dr. James Okonkwo",
    role: "Chief Digital Officer",
    company: "Meridian Health",
    companyType: "Healthcare · Enterprise",
    quote:
      "The HIPAA-compliant AI platform NexusAI built handles 2.4 million patient records with zero security incidents since launch. Their team operated like true partners — embedding with our clinical staff, understanding our workflows, and delivering a product that our physicians actually want to use. The diagnostic AI has improved early detection rates by 62%.",
    results: ["62% earlier detection", "2.4M patients", "HIPAA compliant"],
    rating: 5,
    initials: "JO",
    accent: "#059669",
  },
  {
    id: 3,
    name: "Alexandra Müller",
    role: "VP Engineering",
    company: "Luxora Commerce",
    companyType: "E-commerce · Global",
    quote:
      "We challenged NexusAI to rebuild our entire personalization engine in 6 months ahead of peak season. Not only did they deliver on time, the system now serves 50M+ recommendations daily with a 340% conversion improvement. The scalability they built in has held through Black Friday with zero downtime. Genuinely impressed.",
    results: ["340% conversion lift", "50M daily recs", "Zero downtime"],
    rating: 5,
    initials: "AM",
    accent: "#7C3AED",
  },
  {
    id: 4,
    name: "Marcus Rivera",
    role: "CEO",
    company: "LogiFleet",
    companyType: "Logistics · Series B",
    quote:
      "The route optimization AI NexusAI built reduced our fleet's fuel costs by 40% and cut delivery times by 28% across 12 markets. What's remarkable is how quickly they understood our domain — within weeks, their team was proposing optimizations our own engineers hadn't considered. The ROI was visible within the first quarter.",
    results: ["40% cost reduction", "28% faster delivery", "12 markets"],
    rating: 5,
    initials: "MR",
    accent: "#0891B2",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  const prev = () => setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-32" style={{ background: "#F5F7FA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[12px] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
          >
            Client Stories
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
            Trusted by Industry
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Leaders Worldwide
            </span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div
          className="relative rounded-3xl overflow-hidden mb-6 transition-all duration-400"
          style={{
            background: "rgba(255,255,255,0.95)",
            border: `1px solid ${active.accent}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.07)",
          }}
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Quote section */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center justify-between mb-8">
                <StarRating count={active.rating} />
                <Quote
                  className="w-8 h-8 opacity-10"
                  style={{ color: active.accent }}
                />
              </div>

              <blockquote
                className="mb-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.8vw, 19px)",
                  lineHeight: "1.75",
                  color: "#1E293B",
                  letterSpacing: "-0.01em",
                }}
              >
                "{active.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    {active.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0F172A",
                    }}
                  >
                    {active.name}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748B" }}
                  >
                    {active.role} · {active.company}
                  </p>
                </div>
                <div
                  className="ml-auto px-3 py-1.5 rounded-full"
                  style={{
                    background: `${active.accent}08`,
                    border: `1px solid ${active.accent}18`,
                  }}
                >
                  <span
                    className="text-[11.5px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: active.accent }}
                  >
                    {active.companyType}
                  </span>
                </div>
              </div>
            </div>

            {/* Results panel */}
            <div
              className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between"
              style={{
                background: `${active.accent}06`,
                borderLeft: `1px solid ${active.accent}15`,
              }}
            >
              <div>
                <p
                  className="text-[12px] uppercase tracking-wider mb-6"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#94A3B8" }}
                >
                  Results Achieved
                </p>
                <div className="space-y-4">
                  {active.results.map((result) => (
                    <div
                      key={result}
                      className="p-4 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: `1px solid ${active.accent}18`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontWeight: 800,
                          fontSize: "22px",
                          color: active.accent,
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {result.split(" ")[0]}
                      </p>
                      <p
                        className="text-[12.5px] mt-1"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748B" }}
                      >
                        {result.split(" ").slice(1).join(" ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: i === activeIdx ? "20px" : "6px",
                        height: "6px",
                        background: i === activeIdx ? active.accent : "rgba(226,232,240,0.8)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(226,232,240,0.6)",
                    }}
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-500" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: `${active.accent}12`,
                      border: `1px solid ${active.accent}20`,
                    }}
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: active.accent }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIdx(i)}
              className="p-4 rounded-2xl text-left transition-all duration-200"
              style={{
                background: i === activeIdx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                border: i === activeIdx ? `1px solid ${t.accent}25` : "1px solid rgba(226,232,240,0.5)",
                boxShadow: i === activeIdx ? "0 4px 16px rgba(0,0,0,0.05)" : "none",
              }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)` }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "10px",
                      color: "white",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[12px] leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#0F172A" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#94A3B8" }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
