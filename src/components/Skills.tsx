import { useEffect, useRef } from "react";
import {
  Terminal,
  Code,
  Database,
  Brain,
  Wrench,
  HardDrive,
} from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: Code,
    skills: ["React.js", "HTML", "CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: ["Express.js", "Node.js", "REST APIs"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    skills: ["OpenAI API", "Google Gemini", "LangChain", "LangGraph", "RAG"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "VS Code", "Cursor", "Claude Code", "N8N"],
  },
  {
    category: "Database",
    icon: HardDrive,
    skills: ["MongoDB", "MySQL"],
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
    const cards = sectionRef.current?.querySelectorAll(".skill-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-heading font-semibold tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Technical Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`skill-card fade-up stagger-${index + 1} glass-card glass-card-hover rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
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
