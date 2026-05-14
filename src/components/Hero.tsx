import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight, MapPin, Package } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="mesh-gradient absolute inset-0 -z-10" />
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto w-full">

        {/* Top row — status badge + social links */}
        <div className="reveal stagger-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary/90 tracking-wide font-mono">Available for opportunities</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <MapPin className="w-3 h-3" />
              Bengaluru, India · Remote-friendly
            </div>
          </div>
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
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <p className="reveal stagger-1 text-sm font-mono font-medium text-primary/70 tracking-[0.25em] uppercase mb-5">
            Saurabh Tiwari · AI Engineer
          </p>

          <h1 className="font-heading font-extrabold tracking-tight text-foreground leading-[0.9] mb-8">
            <span className="reveal stagger-2 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6rem]">
              Building AI that
            </span>
            <span className="reveal stagger-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6rem]">
              <span className="text-gradient">actually ships.</span>
            </span>
          </h1>

          <p className="reveal stagger-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
            AI Engineer building production-grade agentic systems, RAG pipelines, and MCP integrations.
            Independently shipped{" "}
            <span className="text-foreground font-medium">6 production apps</span> since MCA graduation —
            including a published{" "}
            <a href="https://www.npmjs.com/package/semantic-recall" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">
              npm package (semantic-recall)
            </a>{" "}
            and an agentic PWA with{" "}
            <span className="text-foreground font-medium">15+ orchestrated tools.</span>
          </p>

          <p className="reveal stagger-4 text-xs text-muted-foreground/45 mb-12 font-mono">
            Stack:{" "}
            <span className="text-muted-foreground/70">Next.js</span> ·{" "}
            <span className="text-muted-foreground/70">Python</span> ·{" "}
            <span className="text-muted-foreground/70">FastAPI</span> ·{" "}
            <span className="text-muted-foreground/70">Vercel AI SDK</span> ·{" "}
            <span className="text-muted-foreground/70">pgvector</span> ·{" "}
            <span className="text-muted-foreground/70">ChromaDB</span> ·{" "}
            <span className="text-muted-foreground/70">Tauri/Rust</span>
          </p>

          {/* CTAs */}
          <div className="reveal stagger-5 flex flex-wrap items-center gap-3">
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
              npm package
            </a>
          </div>
        </div>

        {/* Quick stat strip */}
        <div className="reveal stagger-6 mt-20 pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
          {[
            { value: "6+", label: "Production apps" },
            { value: "15+", label: "AI tools orchestrated" },
            { value: "1", label: "Published npm package" },
            { value: "2024", label: "MCA Graduate" },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="stat-number text-2xl sm:text-3xl mb-0.5">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
      </a>
    </section>
  );
};

export default Hero;
