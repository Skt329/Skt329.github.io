import { useEffect, useRef } from "react";
import {
  Terminal,
  Code,
  Database,
  Brain,
  Wrench,
  HardDrive,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  accent: string;
  accentBg: string;
  skills: string[];
  gridArea: string;
}

/*
  Bento layout (3 cols):
  ┌──────────────────────┬───────────┐
  │   AI / ML            │ Languages │
  ├──────────┬───────────┼───────────┤
  │ Frontend │ Backend   │ Database  │
  ├──────────┴───────────┴───────────┤
  │        Tools & Platforms         │
  └──────────────────────────────────┘
*/

const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    icon: Brain,
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    skills: ["OpenAI API", "Google Gemini", "LangChain", "LangGraph", "RAG", "Hugging Face", "Ollama"],
    gridArea: "ai",
  },
  {
    category: "Languages",
    icon: Terminal,
    accent: "text-violet-400",
    accentBg: "bg-violet-400/10",
    skills: ["JavaScript", "Python"],
    gridArea: "lang",
  },
  {
    category: "Frontend",
    icon: Code,
    accent: "text-sky-400",
    accentBg: "bg-sky-400/10",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    gridArea: "front",
  },
  {
    category: "Backend & APIs",
    icon: Database,
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
    skills: ["Node.js", "Express.js", "REST APIs"],
    gridArea: "back",
  },
  {
    category: "Database",
    icon: HardDrive,
    accent: "text-rose-400",
    accentBg: "bg-rose-400/10",
    skills: ["MongoDB", "MySQL", "Supabase", "pgvector"],
    gridArea: "db",
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    accent: "text-teal-400",
    accentBg: "bg-teal-400/10",
    skills: ["Git", "VS Code", "Cursor", "Claude Code", "N8N", "Puppeteer"],
    gridArea: "tools",
  },
];

const SkillCard = ({ group, className = "" }: { group: SkillGroup; className?: string }) => {
  const Icon = group.icon;
  return (
    <div
      className={`fade-up rounded-2xl border border-border bg-surface/40 p-5 sm:p-6 transition-all duration-400 hover:bg-surface/70 hover:border-muted-foreground/20 hover:shadow-lg hover:shadow-black/20 ${className}`}
      style={{ gridArea: group.gridArea }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg ${group.accentBg} flex items-center justify-center`}>
          <Icon className={`w-[18px] h-[18px] ${group.accent}`} />
        </div>
        <h3 className="font-heading font-semibold text-[15px] text-foreground">
          {group.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="fade-up stagger-1 text-primary text-sm font-heading font-semibold tracking-widest uppercase block mb-4">
            Toolkit
          </span>
          <h2 className="fade-up stagger-2 font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Technologies I work with
          </h2>
          <p className="fade-up stagger-3 text-muted-foreground max-w-lg mx-auto">
            From React frontends to Python AI pipelines to Node.js backends.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateAreas: `
              "ai    ai    lang"
              "front back  db"
              "tools tools tools"
            `,
          }}
        >
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.category}
              group={group}
              className={`stagger-${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile fallback — single column */}
        <style>{`
          @media (max-width: 640px) {
            .grid[style] {
              grid-template-columns: 1fr !important;
              grid-template-areas:
                "ai"
                "lang"
                "front"
                "back"
                "db"
                "tools" !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1023px) {
            .grid[style] {
              grid-template-columns: 1fr 1fr !important;
              grid-template-areas:
                "ai    ai"
                "front lang"
                "back  db"
                "tools tools" !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
