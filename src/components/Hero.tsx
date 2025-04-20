
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
        Saurabh Tiwari
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Blockchain and AI developer with expertise in designing and implementing decentralized applications and intelligent systems.
      </p>
      <div className="flex gap-4 mb-8">
        <a
          href="https://github.com/Skt329"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/saurabht0"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:st10813@gmail.com"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <div className="text-sm text-gray-500">
        <p>+91-9721405709 | st10813@gmail.com</p>
      </div>
    </section>
  );
};

export default Hero;
