import { useEffect, useRef } from "react";

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

  const skills = {
    Languages: ["Solidity", "Java", "Python", "C/C++", "Javascript"],
    Frameworks: ["Express.js", "Node.js"],
    "Platform/Cloud": ["Huggingface", "Google AI Studio"],
    "Scraping/Automation": ["Puppeteer", "Cheerio"],
    "Developer Tools": ["Git", "VS Code", "Hardhat", "Remix", "Ethereum"],
    Libraries: ["Web3.js", "Ether.js"],
    Database: ["MongoDB", "MySQL"],
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-br from-purple-50/50 to-blue-50/50" id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Technical Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category} 
            className="skill-card fade-up glass-card p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-sm"
          >
            <h3 className="font-semibold text-xl mb-4 text-purple-700">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-purple-100 hover:shadow-md hover:-translate-y-1"
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
