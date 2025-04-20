
import { Calendar, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "AI Chrome Extension",
      period: "March 2025 - Present",
      tech: "Html, CSS, Javascript, Ollama, Chrome web api",
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
      description: [
        "Led a team to develop a decentralized voting system using Ethereum",
        "Designed and deployed smart contracts using Solidity and Remix",
        "Created a relayering system using meta transaction that improved user experience",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{project.title}</span>
                <Code className="w-5 h-5 text-purple-500" />
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {project.period}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-600 mb-3">{project.tech}</p>
              <ul className="text-sm space-y-2">
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
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
