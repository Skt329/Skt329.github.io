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
    skills: ["OpenAI API", "Google Gemini", "LangChain", "LangGraph", "RAG", "Hugging Face", "Ollama"],
  },
  {
    category: "Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: Code,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: HardDrive,
    skills: ["MongoDB", "MySQL", "Supabase", "pgvector"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
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
        <div className="mb-16">
          <span className="fade-up stagger-1 text-primary text-sm font-heading font-semibold tracking-widest uppercase block mb-4">
            Toolkit
          </span>
          <h2 className="fade-up stagger-2 font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Technologies I work with
          </h2>
        </div>

        {/* Spec-sheet style: category label left, pills right */}
        <div className="space-y-0">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className={`fade-up stagger-${index + 1} flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 ${
                  index < skillGroups.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="font-heading font-semibold text-sm text-foreground">
                    {group.category}
                  </span>
                </div>

                {/* Skill pills */}
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
