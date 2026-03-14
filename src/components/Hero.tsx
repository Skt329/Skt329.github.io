import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const socials = [
  { icon: Github, href: "https://github.com/Skt329", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saurabht0", label: "LinkedIn" },
  { icon: Mail, href: "mailto:st108113@gmail.com", label: "Email" },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-12 overflow-hidden fade-up"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo/3 blur-[150px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(240 6% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(240 6% 30%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Status badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Available for opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-6">
        Saurabh{" "}
        <span className="text-gradient">Tiwari</span>
      </h1>

      {/* Tagline */}
      <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 font-body">
        AI Engineer & full-stack developer specializing in{" "}
        <span className="text-foreground font-medium">LLM integration</span>,{" "}
        <span className="text-foreground font-medium">RAG pipelines</span>, and{" "}
        <span className="text-foreground font-medium">local AI inference</span>
        . Building production applications with optimized architecture.
      </p>

      {/* Social links */}
      <div className="flex items-center gap-4 mb-8">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="group w-12 h-12 flex items-center justify-center rounded-xl border border-border bg-surface/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>

      {/* Resume button */}
      <a
        href="https://drive.google.com/file/d/11mLcVV-otGPPiDeUGBe9bu6HSQbw0int/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
      >
        <Download className="w-4 h-4 group-hover:animate-bounce" />
        Download Resume
      </a>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-6 h-6 animate-scroll-bounce" />
      </a>
    </section>
  );
};

export default Hero;
