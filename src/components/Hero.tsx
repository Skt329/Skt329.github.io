
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-50 via-white to-white fade-up">
      <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Saurabh Tiwari
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
          Blockchain and AI developer with expertise in designing and implementing decentralized applications and intelligent systems.
        </p>
        <div className="flex gap-6 mb-8 justify-center">
          <a
            href="https://github.com/Skt329"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-purple-50 transition-all hover:scale-110"
          >
            <Github className="w-7 h-7 text-purple-600" />
          </a>
          <a
            href="https://linkedin.com/in/saurabht0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-purple-50 transition-all hover:scale-110"
          >
            <Linkedin className="w-7 h-7 text-purple-600" />
          </a>
          <a
            href="mailto:st10813@gmail.com"
            className="p-3 rounded-full hover:bg-purple-50 transition-all hover:scale-110"
          >
            <Mail className="w-7 h-7 text-purple-600" />
          </a>
        </div>
        <div className="text-base text-gray-500">
          <p>+91-9721405709 | st10813@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
