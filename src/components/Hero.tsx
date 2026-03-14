import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const codeLines = [
  { indent: 0, text: '// saurabh tiwari ·', highlight: ' ai engineer', rest: '' },
  { indent: 0, text: '', highlight: '', rest: '' },
  { indent: 0, text: 'const', highlight: 'pipeline', rest: ' = new RAGPipeline({' },
  { indent: 1, text: 'embeddings:', highlight: '"gemini-embedding-001"', rest: ',' },
  { indent: 1, text: 'vectorStore:', highlight: '"supabase-pgvector"', rest: ',' },
  { indent: 1, text: 'similarity:', highlight: '0.82', rest: ',' },
  { indent: 1, text: 'batchSize:', highlight: '50', rest: ',' },
  { indent: 0, text: '});', highlight: '', rest: '' },
  { indent: 0, text: '', highlight: '', rest: '' },
  { indent: 0, text: 'const', highlight: 'results', rest: ' = await pipeline' },
  { indent: 1, text: '.ingest(', highlight: '"1000+ articles/day"', rest: ')' },
  { indent: 1, text: '.cluster()', highlight: '', rest: '' },
  { indent: 1, text: '.synthesize();', highlight: '', rest: '' },
  { indent: 0, text: '', highlight: '', rest: '' },
  { indent: 0, text: '// Cost:', highlight: ' $15/day → $5/day', rest: ' ✓' },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-up, .fade-left, .fade-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-[130px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(240 6% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(240 6% 30%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Top bar */}
        <div className="fade-up stagger-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Open to opportunities
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <MapPin className="w-3 h-3" />
              Bangalore, India · Open to remote
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

        {/* Main content: two columns */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — typographic statement */}
          <div>
            {/* Name */}
            <p className="fade-up stagger-1 text-sm font-heading font-semibold text-primary tracking-widest uppercase mb-6">
              Saurabh Tiwari
            </p>

            <h1 className="font-heading font-extrabold tracking-tight text-foreground leading-[0.92] mb-8">
              <span className="fade-up stagger-2 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                I build
              </span>
              <span className="fade-up stagger-3 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-gradient">
                intelligent
              </span>
              <span className="fade-up stagger-4 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                applications.
              </span>
            </h1>

            <p className="fade-up stagger-5 max-w-lg text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              AI engineer specializing in LLM integration, RAG pipelines, and local AI inference.
              Shipped <span className="text-foreground font-medium">4 production AI apps</span> since 2024 —
              including a news platform that cut costs by <span className="text-foreground font-medium">67%</span>.
            </p>

            <p className="fade-up stagger-5 text-sm text-muted-foreground/60 mb-8">
              Currently exploring <span className="text-muted-foreground">agentic workflows</span> and <span className="text-muted-foreground">MCP tool integrations</span>.
            </p>

            <div className="fade-up stagger-6 flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/file/d/11mLcVV-otGPPiDeUGBe9bu6HSQbw0int/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                See my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT — Code block */}
          <div className="fade-right stagger-4 hidden lg:block">
            <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[11px] text-muted-foreground/50 font-mono">pipeline.ts</span>
              </div>
              {/* Code */}
              <div className="px-5 py-5 font-mono text-[13px] leading-[1.85] overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 20}px` }} className="whitespace-nowrap">
                    {line.text && (
                      <span className="text-muted-foreground/70">{line.text} </span>
                    )}
                    {line.highlight && (
                      <span className="text-primary">{line.highlight}</span>
                    )}
                    {line.rest && (
                      <span className="text-muted-foreground/50">{line.rest}</span>
                    )}
                    {!line.text && !line.highlight && !line.rest && <br />}
                  </div>
                ))}
              </div>
            </div>
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
