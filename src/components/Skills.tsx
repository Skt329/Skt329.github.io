
import { useEffect, useRef } from "react";
import { Database, Code, Terminal, Settings, Github, FileCode } from "lucide-react";

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
      category: "Blockchain Development",
      icon: <Code className="w-6 h-6 text-purple-600" />,
      skills: ["Solidity", "Web3.js", "Ether.js", "Hardhat", "Remix", "Ethereum"],
      gradientClass: "from-purple-400/20 to-blue-400/20",
      hoverGradient: "hover:from-purple-400/30 hover:to-blue-400/30"
    },
    {
      category: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      skills: ["Java", "Python", "C/C++", "Javascript"],
      gradientClass: "from-indigo-400/20 to-purple-400/20",
      hoverGradient: "hover:from-indigo-400/30 hover:to-purple-400/30"
    },
    {
      category: "Backend & Infrastructure",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["Express.js", "Node.js", "MongoDB", "MySQL"],
      gradientClass: "from-blue-400/20 to-cyan-400/20",
      hoverGradient: "hover:from-blue-400/30 hover:to-cyan-400/30"
    },
    {
      category: "AI & Cloud Platforms",
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      skills: ["Huggingface", "Google AI Studio"],
      gradientClass: "from-cyan-400/20 to-teal-400/20",
      hoverGradient: "hover:from-cyan-400/30 hover:to-teal-400/30"
    },
    {
      category: "Development Tools",
      icon: <Github className="w-6 h-6 text-violet-600" />,
      skills: ["Git", "VS Code"],
      gradientClass: "from-violet-400/20 to-purple-400/20",
      hoverGradient: "hover:from-violet-400/30 hover:to-purple-400/30"
    },
    {
      category: "Web Automation",
      icon: <FileCode className="w-6 h-6 text-fuchsia-600" />,
      skills: ["Puppeteer", "Cheerio"],
      gradientClass: "from-fuchsia-400/20 to-pink-400/20",
      hoverGradient: "hover:from-fuchsia-400/30 hover:to-pink-400/30"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3 gradient-text">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => (
          <div 
            key={category.category} 
            className={`skill-card fade-up p-6 rounded-xl transform transition-all duration-500 
              hover:scale-105 hover:shadow-xl bg-gradient-to-br ${category.gradientClass} ${category.hoverGradient}
              backdrop-blur-sm border border-white/30 hover:border-white/50`}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="font-semibold text-lg text-gray-800">
                {category.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/60 text-gray-700 rounded-full text-sm 
                    font-medium transition-all duration-300 hover:bg-white/90 
                    hover:shadow-md hover:-translate-y-1 hover:text-purple-700
                    border border-white/40 hover:border-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
