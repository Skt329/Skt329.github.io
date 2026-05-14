import { useEffect, useRef } from "react";
import { Terminal, Code, Database, Brain, Wrench, HardDrive } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  color: string;
  colorBg: string;
  skills: string[];
  gridArea: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    icon: Brain,
    color: "text-blue-400",
    colorBg: "bg-blue-400/10",
    skills: ["OpenAI API", "Azure OpenAI", "Gemini", "LangChain", "LangGraph", "RAG", "MCP", "Hugging Face", "Ollama", "Vercel AI SDK"],
    gridArea: "ai",
  },
  {
    category: "Languages",
    icon: Terminal,
    color: "text-violet-400",
    colorBg: "bg-violet-400/10",
    skills: ["JavaScript", "TypeScript", "Python", "Rust"],
    gridArea: "lang",
  },
  {
    category: "Frontend",
    icon: Code,
    color: "text-cyan-400",
    colorBg: "bg-cyan-400/10",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    gridArea: "front",
  },
  {
    category: "Backend & APIs",
    icon: Database,
    color: "text-amber-400",
    colorBg: "bg-amber-400/10",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    gridArea: "back",
  },
  {
    category: "Databases",
    icon: HardDrive,
    color: "text-emerald-400",
    colorBg: "bg-emerald-400/10",
    skills: ["PostgreSQL", "Supabase", "pgvector", "ChromaDB", "SQLite-vec", "MongoDB"],
    gridArea: "db",
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "text-rose-400",
    colorBg: "bg-rose-400/10",
    skills: ["Git", "Vercel", "N8N", "Claude Code", "Cursor", "Tauri", "Docker"],
    gridArea: "tools",
  },
];

const SkillCard = ({ group, className = "" }: { group: SkillGroup; className?: string }) => {
  const Icon = group.icon;
  return (
    <div
      className={`reveal skill-card rounded-2xl p-5 sm:p-6 ${className}`}
      style={{ gridArea: group.gridArea }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-xl ${group.colorBg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-[18px] h-[18px] ${group.color}`} />
        </div>
        <h3 className="font-heading font-semibold text-[15px] text-foreground">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="tag-pill"
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
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="reveal stagger-1 block text-primary text-sm font-mono font-medium tracking-[0.2em] uppercase mb-4">
            Toolkit
          </span>
          <h2 className="reveal stagger-2 font-heading font-bold text-4xl sm:text-5xl text-foreground max-w-xl">
            Technologies I work with
          </h2>
          <p className="reveal stagger-3 text-muted-foreground text-sm mt-4 max-w-lg">
            Comfortable across the full stack — from React frontends and Python AI pipelines to vector databases and Rust desktop apps.
          </p>
        </div>

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

        <style>{`
          @media (max-width: 640px) {
            .grid[style] {
              grid-template-columns: 1fr !important;
              grid-template-areas: "ai" "lang" "front" "back" "db" "tools" !important;
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
