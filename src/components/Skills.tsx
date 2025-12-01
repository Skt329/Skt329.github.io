
import { useEffect, useRef } from "react";
import { Database, Code, Terminal, Settings, Github, FileCode } from "lucide-react";

const skillCardGradients = [
  // vibrant pastel glassy gradients
  {
    normal: "from-purple-200/70 via-pink-200/60 to-blue-200/60",
    hover: "hover:from-purple-300/90 hover:via-pink-200/90 hover:to-blue-200/90",
    border: "border-pink-200",
  },
  {
    normal: "from-blue-100/70 via-green-100/80 to-yellow-100/60",
    hover: "hover:from-blue-200/90 hover:via-green-100/90 hover:to-yellow-100/90",
    border: "border-blue-200",
  },
  {
    normal: "from-yellow-100/60 via-pink-100/40 to-purple-100/70",
    hover: "hover:from-yellow-200/90 hover:via-pink-200/90 hover:to-purple-200/90",
    border: "border-yellow-200",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.skill-card');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++"],
    },
    {
      category: "Frontend Technologies",
      icon: <Code className="w-6 h-6 text-purple-600" />,
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & APIs",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
    },
    {
      category: "Blockchain Development",
      icon: <FileCode className="w-6 h-6 text-violet-600" />,
      skills: ["Solidity", "Ethereum", "Hardhat", "Remix", "Web3.js"],
    },
    {
      category: "AI/ML & Automation",
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      skills: ["OpenAI API", "Google Gemini", "LangChain", "LangGraph", "RAG", "N8N", "Hugging Face"],
    },
    {
      category: "Tools & Platforms",
      icon: <Github className="w-6 h-6 text-fuchsia-600" />,
      skills: ["Git", "VS Code", "Supabase", "Puppeteer", "Cursor", "Lovable"],
    }
  ];

  return (
    <section ref={sectionRef} className="py-10 px-4 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3 gradient-text">Technical Skills</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => {
          const grad = skillCardGradients[index % skillCardGradients.length];
          return (
            <div
              key={category.category}
              className={`skill-card fade-up glass-card p-6 rounded-2xl transform transition-all duration-500
                bg-gradient-to-br ${grad.normal} ${grad.hover} border-2 ${grad.border} hover:shadow-2xl 
                hover:scale-105 animate-fade-in group`}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-purple-700 transition-colors">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/60 text-gray-700 rounded-full text-sm 
                      font-medium transition-all duration-300 hover:bg-pink-200/80 hover:text-purple-800
                      hover:shadow-md hover:-translate-y-1 border border-white/40 hover:border-pink-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
