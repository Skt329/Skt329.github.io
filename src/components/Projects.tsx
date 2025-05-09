
import { Calendar, Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Chrome Extension",
      period: "March 2025 - Present",
      tech: "Html, CSS, Javascript, Ollama, Chrome web api",
      link: "https://github.com/Skt329/AI-Chrome-Extension",
      description: [
        "Developed a Chrome extension integrating with Ollama for AI-driven webpage summarization, chat, and form assistance.",
        "Implemented side panel integration with live content extraction and real-time AI chat powered by local models.",
        "Configured custom system prompts and model selection for adaptive AI behavior.",
      ],
    },
    {
      title: "Phoenix AI Telegram Bot",
      period: "Oct 2024 - Jan 2025",
      tech: "Javascript, Node.js, Rest Api, Huggingface, Puppeteer",
      link: "https://t.me/phoenix_7ai_bot",
      description: [
        "Developed an advanced multi-model AI assistant Telegram bot supporting multiple large language models.",
        "Integrated Stable Diffusion XL 3.5 from Hugging Face for high-quality image generation.",
        "Built a backend server using Node.js with node-telegram-bot-api for a scalable architecture.",
      ],
    },
    {
      title: "BVote",
      period: "Feb 2024 - May 2024",
      tech: "Solidity, Ethereum, Hardhat, Node.js, Web3.js",
      link: "https://github.com/Skt329/BVote",
      description: [
        "Led a team to develop a decentralized voting system using Ethereum",
        "Designed and deployed smart contracts using Solidity and Remix",
        "Created a relayering system using meta transaction that improved user experience",
      ],
    },
  ];

  // Array of card backgrounds to alternate for even more color
  const cardGradients = [
    "from-pink-100/70 via-purple-100/50 to-blue-100/70",
    "from-yellow-100/60 via-pink-100/40 to-purple-100/70",
    "from-blue-100/60 via-pink-200/30 to-green-100/60",
  ];

  return (
    <section ref={sectionRef} className="py-10 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className={`project-card fade-up rounded-2xl bg-gradient-to-br ${cardGradients[index % cardGradients.length]}
              shadow-xl backdrop-blur-sm border-2 border-white/50 hover:border-primary hover:scale-105 
              transition-all duration-400 hover:shadow-2xl animate-fade-in`}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl text-purple-700">{project.title}</span>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 hover:scale-110 transition-colors"
                  aria-label={`Project link for ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5 text-purple-500" />
                </a>
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {project.period}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-pink-700 mb-3 font-medium">{project.tech}</p>
              <ul className="text-sm space-y-2 text-gray-700">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
