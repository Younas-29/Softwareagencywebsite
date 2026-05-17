import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    items: ["AI & Machine Learning", "SaaS Development", "Cloud & DevOps", "Cybersecurity", "UI/UX Design", "Digital Marketing"],
  },
  {
    label: "Industries",
    items: ["Healthcare", "FinTech", "E-commerce", "Education", "Logistics", "Gaming"],
  },
  { label: "Case Studies" },
  { label: "Company" },
  { label: "Careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,250,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
            >
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-[15px] tracking-tight"
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, color: "#0F172A" }}
            >
              Nexus<span style={{ color: "#2563EB" }}>AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.items && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13.5px] transition-all duration-200 hover:bg-slate-100"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#475569" }}
                >
                  {link.label}
                  {link.items && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </button>
                {link.items && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 rounded-2xl p-1.5 shadow-xl"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(226,232,240,0.8)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                    }}
                  >
                    {link.items.map((item) => (
                      <button
                        key={item}
                        className="w-full text-left px-3 py-2 rounded-xl text-[13px] transition-colors duration-150 hover:bg-slate-50"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 450, color: "#475569" }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-[14px] text-[13.5px] transition-all duration-200 hover:bg-slate-100"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#475569" }}
            >
              Sign in
            </button>
            <button
              className="px-4 py-2 rounded-[14px] text-[13.5px] text-white transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                boxShadow: "0 4px 14px rgba(79,70,229,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(79,70,229,0.4)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 14px rgba(79,70,229,0.3)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#0F172A" }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(250,250,250,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(226,232,240,0.8)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="block w-full text-left py-3 text-[15px] border-b"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "#475569",
                borderColor: "rgba(226,232,240,0.5)",
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              className="w-full py-3 rounded-[14px] text-[14px] text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
