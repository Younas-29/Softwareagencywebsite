import { Zap, Twitter, Linkedin, Github, Youtube, ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    "AI & Machine Learning",
    "SaaS Development",
    "Cloud & DevOps",
    "Cybersecurity",
    "UI/UX Design",
    "Mobile Development",
    "Custom Software",
    "IT Consulting",
  ],
  Industries: [
    "FinTech",
    "Healthcare",
    "E-commerce",
    "Education",
    "Logistics",
    "Gaming",
    "Real Estate",
    "SaaS",
  ],
  Company: [
    "About NexusAI",
    "Leadership Team",
    "Case Studies",
    "Engineering Blog",
    "Press & Media",
    "Partnerships",
    "Investors",
  ],
  Careers: [
    "Open Positions",
    "Engineering Roles",
    "Design Roles",
    "Why Join Us",
    "Benefits",
    "Life at NexusAI",
  ],
};

const certifications = ["ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA", "PCI DSS"];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060D1A" }}>
      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
              >
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#F8FAFC",
                }}
              >
                Nexus<span style={{ color: "#818CF8" }}>AI</span>
              </span>
            </div>

            <p
              className="mb-6 max-w-[260px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(248,250,252,0.45)",
              }}
            >
              Premier AI-first engineering company delivering enterprise software systems
              trusted by global companies.
            </p>

            {/* Social links */}
            <div className="flex gap-2 mb-8">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(79,70,229,0.2)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,70,229,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "rgba(248,250,252,0.5)" }} />
                  </button>
                );
              })}
            </div>

            {/* Newsletter */}
            <div>
              <p
                className="mb-3 text-[13px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.6)" }}
              >
                Get engineering insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="flex-1 px-3.5 py-2.5 rounded-[14px] text-[13px] outline-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#F8FAFC",
                  }}
                />
                <button
                  className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                className="mb-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#F8FAFC",
                  letterSpacing: "0.01em",
                }}
              >
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-[13px] transition-colors duration-150 text-left"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        color: "rgba(248,250,252,0.4)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(248,250,252,0.8)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(248,250,252,0.4)";
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 mb-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            {
              icon: MapPin,
              label: "Headquarters",
              value: "535 Mission St, San Francisco, CA 94105",
            },
            {
              icon: Mail,
              label: "Enterprise Inquiries",
              value: "enterprise@nexusai.com",
            },
            {
              icon: Phone,
              label: "Global Support",
              value: "+1 (415) 000-0000",
            },
          ].map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(79,70,229,0.15)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#818CF8" }} />
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-wider mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.3)" }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "rgba(248,250,252,0.6)" }}
                  >
                    {contact.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "rgba(248,250,252,0.4)" }}
                >
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <p
              className="text-[12.5px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "rgba(248,250,252,0.3)" }}
            >
              © 2026 NexusAI Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <button
                  key={link}
                  className="text-[12px] transition-colors duration-150"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: "rgba(248,250,252,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(248,250,252,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(248,250,252,0.3)";
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
