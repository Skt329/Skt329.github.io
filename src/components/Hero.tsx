import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Package, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Mesh + grid */}
      <div className="mesh-gradient absolute inset-0 -z-10" />
      <div className="dot-grid absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* ── SPLIT LAYOUT ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN */}
          <div>
            {/* Status badge */}
            <div className="reveal stagger-1 flex flex-wrap items-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-emerald-400/90 tracking-wide">Open to work</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/55 font-mono">
                <MapPin className="w-3 h-3" />
                Bengaluru, India
              </div>
            </div>

            {/* BIG NAME */}
            <h1 className="reveal stagger-2 font-heading font-extrabold leading-[0.88] tracking-tight mb-6">
              <span className="block text-[clamp(3.5rem,9vw,7rem)] text-foreground">
                Saurabh
              </span>
              <span className="block text-[clamp(3.5rem,9vw,7rem)] text-gradient">
                Tiwari
              </span>
            </h1>

            {/* Title tag */}
            <div className="reveal stagger-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface/60 font-mono text-sm text-muted-foreground">
                <span className="text-primary">~/</span>
                AI Engineer · Agentic Systems · RAG · LLM Integration
              </span>
            </div>

            {/* Bio */}
            <p className="reveal stagger-4 max-w-xl text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-10">
              Building production-grade AI — independently shipped{" "}
              <span className="text-foreground font-semibold">6 apps</span> since graduation.
              From a{" "}
              <a href="https://www.npmjs.com/package/semantic-recall" target="_blank" rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
                published npm package
              </a>{" "}
              to a{" "}
              <span className="text-foreground font-semibold">15-tool agentic PWA</span>{" "}
              with live Swiggy MCP commerce.
            </p>

            {/* CTAs */}
            <div className="reveal stagger-5 flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1XVWXvlxU5R8PVge5lEtQM27rHmyn9sS7/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a
                href="https://www.npmjs.com/package/semantic-recall"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/20 text-sm font-heading font-semibold text-primary/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Package className="w-4 h-4" />
                npm
              </a>
            </div>

            {/* Socials row */}
            <div className="reveal stagger-6 flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Skt329", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/saurabht0", label: "LinkedIn" },
                { icon: Mail, href: "mailto:st108113@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="ml-2 text-xs text-muted-foreground/40 font-mono">st108113@gmail.com</span>
            </div>
          </div>

          {/* RIGHT COLUMN — Photo card */}
          <div className="reveal-right stagger-2 hidden lg:flex flex-col items-center gap-5">

            {/* Avatar */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/20 to-accent/20 blur-xl opacity-60" />
              <div className="relative w-64 xl:w-72 aspect-square rounded-3xl overflow-hidden border border-primary/20">
                <img
                  src="/avatar.jpg"
                  alt="Saurabh Tiwari — AI Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                Available
              </div>
            </div>

            {/* Stat cards below photo */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {[
                { value: "6+", label: "Apps shipped" },
                { value: "15+", label: "AI tools" },
                { value: "1", label: "npm package" },
                { value: "2024", label: "MCA grad" },
              ].map((stat) => (
                <div key={stat.label} className="skill-card rounded-xl p-3 text-center">
                  <div className="stat-number text-xl">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick link to LinkedIn */}
            <a
              href="https://linkedin.com/in/saurabht0"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors font-mono"
            >
              <Linkedin className="w-3 h-3" />
              linkedin.com/in/saurabht0
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Mobile photo (shows below text on mobile) */}
        <div className="lg:hidden mt-12 flex justify-center reveal stagger-6">
          <div className="relative w-48 aspect-square rounded-3xl overflow-hidden border border-primary/20">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/15 to-accent/15 blur-lg opacity-60" />
            <img
              src="/avatar.jpg"
              alt="Saurabh Tiwari"
              className="relative w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
