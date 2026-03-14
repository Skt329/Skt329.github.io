import { useEffect, useRef } from "react";
import {
  Terminal,
  Code,
  Database,
  Brain,
  Wrench,
  HardDrive,
} from "lucide-react";

const skillGroups = [
  {
    category: "AI / ML",
    icon: Brain,
    accent: "text-primary",
    accentBg: "bg-primary/10",
    skills: ["OpenAI API", "Google Gemini", "LangChain", "LangGraph", "RAG", "Hugging Face", "Ollama"],
  },
  {
    category: "Languages",
    icon: Terminal,
    accent: "text-secondary",
    accentBg: "bg-secondary/10",
    skills: ["JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: Code,
    accent: "text-sky-400",
    accentBg: "bg-sky-400/10",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: HardDrive,
    accent: "text-rose-400",
    accentBg: "bg-rose-400/10",
    skills: ["MongoDB", "MySQL", "Supabase", "pgvector"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    accent: "text-violet-400",
    accentBg: "bg-violet-400/10",
    skills: ["Git", "VS Code", "Cursor", "Claude Code", "N8N", "Puppeteer"],
  },
];

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

        {/* Grouped skill cards — AI/ML first and largest */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const isAI = index === 0;
            return (
              <div
                key={group.category}
                className={`fade-up stagger-${index + 1} glass-card glass-card-hover rounded-2xl p-6 ${
                  isAI ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${group.accentBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${group.accent}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
