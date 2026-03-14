import { ExternalLink, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Synth News",
    period: "Jul 2025 — Present",
    tech: ["React", "Supabase", "Gemini AI", "RAG"],
    link: "https://synthnews.vercel.app/",
    description:
      "AI-powered news aggregation processing 1,000+ daily articles from 15+ publishers with vector embeddings and semantic clustering. Cost-optimized from $15/day to $5/day via batch API and hybrid search.",
    highlight: true,
  },
  {
    title: "Audiobook Creator",
    period: "Aug 2025 — Present",
    tech: ["Python", "Chatterbox TTS", "Local AI"],
    link: "https://github.com/Skt329/pdf-audiobook",
    description:
      "Windows desktop app converting PDFs to audiobooks using 350M-parameter Chatterbox Turbo TTS, running entirely on local CPU/GPU with zero-shot voice cloning from 10-second reference audio.",
    highlight: true,
  },
  {
    title: "AI Chrome Extension",
    period: "Mar 2025 — Jul 2025",
    tech: ["JavaScript", "Ollama", "Chrome API"],
    link: "https://github.com/Skt329/AI-Chrome-Extension",
    description:
      "Privacy-first Chrome extension integrating Ollama's local inference for webpage summarization and chat. Supports any locally-hosted open-source model with custom system prompt configuration.",
  },
  {
    title: "Phoenix AI Telegram Bot",
    period: "Oct 2024 — Jan 2025",
    tech: ["Node.js", "Puppeteer", "Hugging Face"],
    link: "https://t.me/phoenix_7ai_bot",
    description:
      "Multi-model AI assistant supporting 3 API providers with YouTube transcript scraping via Puppeteer, Stable Diffusion XL image generation, and Whisper speech-to-text processing.",
  },
  {
    title: "BVote",
    period: "Feb 2024 — May 2024",
    tech: ["Solidity", "Ethereum", "Hardhat", "Web3.js"],
    link: "https://github.com/Skt329/BVote",
    description:
      "Decentralized voting system on Ethereum blockchain with smart contracts in Solidity. Meta-transaction relaying improved UX with 30% increase in user engagement.",
  },
  {
    title: "Image Resizer",
    period: "Apr 2025 — May 2025",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://image-resizer-henna.vercel.app/",
    description:
      "Professional web app for image processing — resize, compress, and convert formats (JPEG/PNG) to meet application form requirements. Built with responsive design and smooth animations.",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-heading font-semibold tracking-widest uppercase mb-3 block">
            Work
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card fade-up stagger-${index + 1} glass-card glass-card-hover rounded-2xl p-6 flex flex-col ${
                project.highlight ? "md:col-span-1 ring-1 ring-primary/10" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1 group">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="tag-pill text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
