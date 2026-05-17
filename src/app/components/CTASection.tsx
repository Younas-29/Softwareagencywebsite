import { ArrowRight, Calendar, FileText, Sparkles, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Free 60-minute strategy session",
  "No-commitment proposal",
  "Response within 24 hours",
  "NDA available on request",
];

export function CTASection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#0B1120" }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,70,229,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.5) 0%, transparent 70%)",
          transform: "translateY(-30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 70%)",
          transform: "translateY(30%)",
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
        <div className="max-w-[800px] mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(79,70,229,0.12)",
              border: "1px solid rgba(79,70,229,0.25)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "#818CF8" }} />
            <span
              className="text-[12px] tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#818CF8" }}
            >
              START YOUR PROJECT TODAY
            </span>
          </div>

          {/* Headline */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 5.5vw, 64px)",
              letterSpacing: "-0.04em",
              color: "#F8FAFC",
              lineHeight: "1.05",
            }}
          >
            Ready to Build Something
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #818CF8 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Extraordinary?
            </span>
          </h2>

          <p
            className="max-w-[560px] mx-auto mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.7",
              color: "rgba(248,250,252,0.55)",
            }}
          >
            Join 200+ enterprise companies that trust NexusAI to build their most critical
            software systems. Let's discuss your vision.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              className="group flex items-center gap-2.5 px-8 py-4 rounded-[14px] text-[15px] transition-all duration-200 w-full sm:w-auto justify-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                color: "white",
                boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(79,70,229,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(79,70,229,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Calendar className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
              Book a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              className="group flex items-center gap-2.5 px-8 py-4 rounded-[14px] text-[15px] transition-all duration-200 w-full sm:w-auto justify-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: "rgba(255,255,255,0.06)",
                color: "#F8FAFC",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <FileText className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
              Get a Proposal
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#06B6D4" }} />
                <span
                  className="text-[13px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: "rgba(248,250,252,0.5)",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
