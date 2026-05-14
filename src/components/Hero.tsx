import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Package, ExternalLink } from "lucide-react";
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
      { threshold: 0.03 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="mesh-gradient absolute inset-0 -z-10" />
      <div className="dot-grid absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* ===== SPLIT LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-center min-h-[calc(100vh-10rem)]">

          {/* LEFT — Text content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Status + location row */}
            <div className="reveal stagger-1 flex flex-wrap items-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-emerald-400/90 tracking-wide">Open to opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/50 font-mono">
                <MapPin className="w-3 h-3" />
                Bengaluru, India · Remote-friendly
              </div>
            </div>

            {/* ===== NAME — BIG ===== */}
            <div className="mb-6">
              <h1 className="font-heading font-extrabold tracking-tight text-foreground leading-[0.88]">
                <span className="reveal stagger-1 block" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
                  Saurabh
                </span>
                <span className="reveal stagger-2 block" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
                  Tiwari
                </span>
              </h1>
              <div className="reveal stagger-3 flex items-center gap-3 mt-4">
                <div className="h-px w-10 bg-primary/40" />
                <span className="font-mono text-sm font-medium tracking-[0.25em] text-primary/70 uppercase">
                  AI Engineer
                </span>
              </div>
            </div>

            {/* Tagline */}
            <h2
              className="reveal stagger-3 font-heading font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)' }}
            >
              Building AI that{" "}
              <span className="text-gradient">actually ships.</span>
            </h2>

            {/* Description */}
            <p className="reveal stagger-4 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              Independently building production-grade agentic systems, RAG pipelines, and MCP
              integrations since MCA graduation. Shipped{" "}
              <span className="text-foreground font-semibold">6 production apps</span> including a
              published{" "}
              <a
                href="https://www.npmjs.com/package/semantic-recall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
              >
                npm package
              </a>{" "}
              and an agentic PWA with{" "}
              <span className="text-foreground font-semibold">15+ orchestrated tools.</span>
            </p>

            <p className="reveal stagger-4 text-[11px] text-muted-foreground/40 font-mono mb-10">
              Next.js · Python · FastAPI · Vercel AI SDK · pgvector · ChromaDB · Tauri/Rust
            </p>

            {/* CTAs */}
            <div className="reveal stagger-5 flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1XVWXvlxU5R8PVge5lEtQM27rHmyn9sS7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a
                href="https://www.npmjs.com/package/semantic-recall"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/20 text-sm font-heading font-semibold text-primary/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Package className="w-4 h-4" />
                semantic-recall
              </a>
            </div>

            {/* Social + Stat strip */}
            <div className="reveal stagger-6 flex items-center gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
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
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-6">
                {[
                  { value: "6+", label: "Apps shipped" },
                  { value: "15+", label: "AI tools" },
                  { value: "1", label: "npm pkg" },
                ].map((s) => (
                  <div key={s.label} className="text-left">
                    <div className="font-heading font-bold text-lg text-foreground">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Avatar card */}
          <div className="reveal-right stagger-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Avatar card */}
              <div className="relative w-64 sm:w-72 lg:w-80 xl:w-[340px] rounded-3xl overflow-hidden border border-border/60 shadow-2xl shadow-black/50">
                <img
                  src="/avatar.jpg"
                  alt="Saurabh Tiwari — AI Engineer"
                  className="w-full aspect-square object-cover object-top"
                  width={340}
                  height={340}
                  loading="eager"
                />
                {/* Gradient overlay on bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5"
                  style={{
                    background: 'linear-gradient(to top, hsl(222 47% 4%) 0%, transparent 100%)',
                  }}
                />
                {/* Name card floating at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading font-bold text-foreground text-lg leading-tight">Saurabh Tiwari</p>
                  <p className="text-primary/80 font-mono text-xs mt-0.5">AI Engineer · Bengaluru</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl border border-primary/20 bg-background/90 backdrop-blur-sm shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-mono text-emerald-400">Available</span>
              </div>

              {/* Floating badge — bottom left */}
              <a
                href="https://www.npmjs.com/package/semantic-recall"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background/90 backdrop-blur-sm shadow-lg hover:border-primary/30 transition-colors group"
              >
                <Package className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] font-heading font-semibold text-foreground">semantic-recall</div>
                  <div className="text-[9px] font-mono text-muted-foreground">npm · open source</div>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
