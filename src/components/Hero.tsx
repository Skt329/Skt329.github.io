import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight, MapPin } from "lucide-react";
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

  /* Cursor glow effect */
  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      hero.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10 mesh-gradient" />

      {/* Cursor glow */}
      <div
        className="absolute -z-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07] hidden lg:block"
        style={{
          top: "calc(var(--mouse-y, 50%) - 250px)",
          left: "calc(var(--mouse-x, 50%) - 250px)",
          background: "radial-gradient(circle, hsl(11 100% 64%) 0%, transparent 70%)",
          transition: "top 0.15s ease-out, left 0.15s ease-out",
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(11 100% 64% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(11 100% 64% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Top bar — status + socials */}
        <div className="reveal stagger-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Open to opportunities
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <MapPin className="w-3 h-3" />
              Bengaluru India · Open to remote
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

        {/* Main content */}
        <div className="max-w-4xl">
          {/* Name label */}
          <p className="reveal stagger-1 text-sm font-heading font-semibold text-primary tracking-[0.2em] uppercase mb-6">
            Saurabh Tiwari
          </p>

          {/* Headline */}
          <h1 className="font-heading font-extrabold tracking-tight text-foreground leading-[0.92] mb-8">
            <span className="reveal stagger-2 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              I ship AI systems
            </span>
            <span className="reveal stagger-3 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              that solve{" "}
              <span className="text-gradient">real problems.</span>
            </span>
          </h1>

          {/* Body */}
          <p className="reveal stagger-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
            AI Engineer specializing in agentic systems, RAG pipelines, and LLM integration.
            Shipped{" "}
            <span className="text-foreground font-medium">4 production AI apps</span> since
            graduation — including NeutriAI, a PWA with{" "}
            <span className="text-foreground font-medium">15+ orchestrated tools</span> and live
            Swiggy MCP commerce.
          </p>

          <p className="reveal stagger-4 text-xs text-muted-foreground/50 mb-10">
            Currently building with{" "}
            <span className="text-muted-foreground">agentic workflows</span>,{" "}
            <span className="text-muted-foreground">MCP integrations</span>, and{" "}
            <span className="text-muted-foreground">semantic memory</span>.
          </p>

          {/* CTAs */}
          <div className="reveal stagger-5 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1XVWXvlxU5R8PVge5lEtQM27rHmyn9sS7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#metrics"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
      </a>
    </section>
  );
};

export default Hero;
