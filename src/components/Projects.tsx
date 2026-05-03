import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Calendar, ChevronDown } from "lucide-react";

/* ── Featured Projects ── */
const featured = [
  {
    title: "NeutriAI",
    link: "https://skt329-neutri-ai.vercel.app",
    period: "Jan 2026 — Present",
    tech: ["Next.js", "TypeScript", "Azure OpenAI", "Supabase", "pgvector", "Swiggy MCP"],
    tagline: "Agentic nutrition assistant with live commerce integration",
    description:
      "Mobile-first PWA with an agentic core: meal logging via natural language, pantry management, recipe generation, and Swiggy food ordering. 15+ tools orchestrated through Vercel AI SDK with streaming tool-calling loops.",
    stats: [
      { value: "15+", label: "Tools orchestrated", sub: "Vercel AI SDK" },
      { value: "<2s", label: "Chat latency", sub: "semantic memory" },
      { value: "1024", label: "Dim embeddings", sub: "NVIDIA NeMo" },
      { value: "0.92", label: "Dedup threshold", sub: "cosine similarity" },
    ],
  },
  {
    title: "Synth News",
    link: "https://synthnews.vercel.app/",
    period: "Jul 2025 — Present",
    tech: ["React", "Supabase", "Gemini AI", "RAG", "N8N"],
    tagline: "AI news aggregation that cuts costs 67%",
    description:
      "Processes 1,000+ articles daily from 15+ publishers using vector embeddings and semantic clustering. Hybrid search combines vector-based semantic search with external news APIs at sub-second response times.",
    stats: [
      { value: "$5/day", label: "Operating cost", sub: "down from $15/day" },
      { value: "67%", label: "Cost reduction", sub: "via batch processing" },
      { value: "15+", label: "News publishers", sub: "aggregated daily" },
      { value: "<1s", label: "Search response", sub: "sub-second queries" },
    ],
  },
  {
    title: "Audiobook Creator",
    link: "https://github.com/Skt329/pdf-audiobook",
    period: "Aug 2025 — Present",
    tech: ["Python", "Chatterbox TTS", "Local Inference"],
    tagline: "PDF to audiobook, entirely on your machine",
    description:
      "Windows desktop app powered by the 350M-parameter Chatterbox Turbo TTS model. Zero cloud dependency, including zero-shot voice cloning from a 10-second reference sample.",
    stats: [
      { value: "350M", label: "TTS parameters", sub: "Chatterbox Turbo" },
      { value: "0", label: "Cloud dependency", sub: "fully local" },
      { value: "10s", label: "Voice clone input", sub: "zero-shot cloning" },
      { value: "24kHz", label: "Audio quality", sub: "WAV output" },
    ],
  },
];

/* ── More AI Projects ── */
const aiProjects = [
  {
    title: "AI Chrome Extension",
    period: "Mar — Jul 2025",
    tech: ["JavaScript", "Ollama", "Chrome API"],
    link: "https://github.com/Skt329/AI-Chrome-Extension",
    description:
      "Privacy-first extension integrating Ollama for local AI-powered webpage summarization, chat, and custom prompt config. Zero data leaves the device.",
  },
  {
    title: "Phoenix AI Telegram Bot",
    period: "Oct 2024 — Jan 2025",
    tech: ["Node.js", "Puppeteer", "Hugging Face"],
    link: "https://t.me/phoenix_7ai_bot",
    description:
      "Multi-model assistant with 3 API providers, YouTube transcript scraping, Stable Diffusion XL image gen, and Whisper speech-to-text.",
  },
];

/* ── Experiments ── */
const experiments = [
  {
    title: "Monopoly Deals",
    period: "2025",
    tech: ["Next.js", "Supabase", "TypeScript"],
    link: "https://monopoly-deals.vercel.app",
    description:
      "Web version of the Monopoly Deal card game with real-time multiplayer, game state management, and interactive card mechanics.",
  },
  {
    title: "BVote",
    period: "Feb — May 2024",
    tech: ["Solidity", "Ethereum", "Hardhat"],
    link: "https://github.com/Skt329/BVote",
    description: "Decentralized voting on Ethereum with meta-transaction relaying. Led team, 30% UX improvement.",
  },
  {
    title: "Image Resizer",
    period: "Apr — May 2025",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://image-resizer-henna.vercel.app/",
    description: "Web app for image resize, compress, and format conversion for application forms.",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showExperiments, setShowExperiments] = useState(false);

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
      { threshold: 0.04 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span className="reveal stagger-1 text-primary text-sm font-heading font-semibold tracking-[0.2em] uppercase block mb-4">
            Featured Work
          </span>
          <h2 className="reveal stagger-2 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-foreground max-w-3xl leading-tight">
            Projects that ship,{" "}
            <span className="text-gradient">not just demos.</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-10 mb-20">
          {featured.map((project, idx) => (
            <div
              key={project.title}
              className={`reveal stagger-${Math.min(idx + 1, 3)} featured-card rounded-3xl overflow-hidden`}
            >
              <div className="p-8 sm:p-10 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-primary/80 font-heading font-medium text-sm">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-10">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-surface/60 border border-border p-4 text-center"
                    >
                      <div className="font-heading font-extrabold text-xl sm:text-2xl text-primary mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-foreground font-medium">{stat.label}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More AI Projects */}
        <div className="mb-12">
          <h3 className="reveal font-heading font-bold text-2xl sm:text-3xl text-foreground mb-8">
            More AI projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiProjects.map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal stagger-${i + 1} bento-card rounded-2xl p-6 sm:p-8 group block`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-pill text-[10px]">{t}</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Experiments (collapsible) */}
        <div className="reveal">
          <button
            onClick={() => setShowExperiments(!showExperiments)}
            className="group flex items-center gap-2 text-sm font-heading font-semibold text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${showExperiments ? "rotate-180" : ""}`}
            />
            Experiments & side projects
          </button>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ${
              showExperiments ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {experiments.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card rounded-2xl p-6 group block"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-pill text-[10px]">{t}</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
