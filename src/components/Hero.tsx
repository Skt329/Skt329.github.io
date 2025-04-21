
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section 
      ref={sectionRef}
      className="min-h-[86vh] flex flex-col justify-center items-center text-center px-4 fade-up"
    >
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/70 via-purple-100/80 to-blue-100/90 
        glass-card border-2 border-pink-200 shadow-2xl p-8 rounded-3xl animate-fade-in transition-all duration-500 hover:scale-[1.02] relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Saurabh Tiwari</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
          Blockchain and AI developer with expertise in designing and implementing decentralized applications and intelligent systems.
        </p>
        <div className="flex gap-6 mb-8 justify-center">
          <a
            href="https://github.com/Skt329"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-purple-200/60 hover:shadow-md transition-all hover:scale-110"
          >
            <Github className="w-7 h-7 text-purple-600" />
          </a>
          <a
            href="https://linkedin.com/in/saurabht0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-blue-200/50 hover:shadow-md transition-all hover:scale-110"
          >
            <Linkedin className="w-7 h-7 text-blue-700" />
          </a>
          <a
            href="mailto:st10813@gmail.com"
            className="p-3 rounded-full hover:bg-green-200/40 hover:shadow-md transition-all hover:scale-110"
          >
            <Mail className="w-7 h-7 text-green-600" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1D94HtyhIdNmizvSUv8V1p5edTu_uCxuR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 mb-6 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 
            text-white rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 transition-all 
            animate-scale-in font-semibold text-lg z-10"
        >
          <Download className="w-6 h-6" />
          Download Resume
        </a>
        <div className="text-base text-gray-500">
          <p>+91-9721405709 | st10813@gmail.com</p>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl" style={{
          background: "linear-gradient(135deg, rgba(247,206,249,0.25) 0%, rgba(189,224,254,0.15) 100%)"
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
