
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
      gradientClass: "from-purple-50/50 to-blue-50/50"
    },
    {
      category: "Programming Languages",
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      skills: ["Java", "Python", "C/C++", "Javascript"],
      gradientClass: "from-indigo-50/50 to-purple-50/50"
    },
    {
      category: "Backend & Infrastructure",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["Express.js", "Node.js", "MongoDB", "MySQL"],
      gradientClass: "from-blue-50/50 to-cyan-50/50"
    },
    {
      category: "AI & Cloud Platforms",
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      skills: ["Huggingface", "Google AI Studio"],
      gradientClass: "from-cyan-50/50 to-teal-50/50"
    },
    {
      category: "Development Tools",
      icon: <Github className="w-6 h-6 text-violet-600" />,
      skills: ["Git", "VS Code"],
      gradientClass: "from-violet-50/50 to-purple-50/50"
    },
    {
      category: "Web Automation",
      icon: <FileCode className="w-6 h-6 text-fuchsia-600" />,
      skills: ["Puppeteer", "Cheerio"],
      gradientClass: "from-fuchsia-50/50 to-pink-50/50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => (
          <div 
            key={category.category} 
            className={`skill-card fade-up glass-card p-6 rounded-xl transform transition-all duration-300 
              hover:scale-105 hover:shadow-xl bg-gradient-to-br ${category.gradientClass} 
              backdrop-blur-sm border border-white/20`}
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
                  className="px-3 py-1.5 bg-white/50 text-gray-700 rounded-full text-sm 
                    font-medium transition-all duration-300 hover:bg-white/80 
                    hover:shadow-md hover:-translate-y-1 border border-white/30"
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
