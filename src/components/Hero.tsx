
import { Github, Linkedin, Mail, Download, CircleArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ICON_HOVERS = [
  "hover:bg-purple-200/80 hover:text-purple-800 hover:shadow-xl hover:border-purple-300",
  "hover:bg-blue-200/80 hover:text-blue-800 hover:shadow-xl hover:border-blue-300",
  "hover:bg-green-200/80 hover:text-green-800 hover:shadow-xl hover:border-green-300",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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
      className="min-h-[88vh] flex flex-col justify-center items-center text-center px-4 fade-up"
      style={{
        background: "linear-gradient(109.6deg, #dbeafe 11.2%, #efd6f8 91.1%)",
        position: "relative"
      }}
    >
      <div className="absolute left-[-80px] top-0 w-60 h-60 bg-gradient-to-br from-pink-200 via-orange-100 to-emerald-100 rounded-full blur-2xl opacity-60 z-0 pointer-events-none animate-pulse" />
      <div className="absolute right-[-100px] bottom-[-50px] w-72 h-48 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 rounded-full blur-2xl opacity-60 z-0 pointer-events-none animate-pulse" />

      {/* Name & Tagline */}
      <h1 className="relative z-10 mt-16 text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent pb-2 animate-gradient">
        Saurabh Tiwari
      </h1>
      <p className="relative z-10 text-2xl md:text-3xl font-semibold text-gray-700 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed animate-fade-in">
        Blockchain & AI developer — building decentralized applications and intelligent systems.
      </p>

      {/* Contact/Links */}
      <div className="relative z-10 flex gap-7 mb-8 justify-center animate-fade-in">
        <a
          href="https://github.com/Skt329"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple-300 bg-white/70 shadow hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[0]}
          `}
          aria-label="GitHub"
        >
          <Github className="w-7 h-7 group-hover:scale-125 transition-transform text-purple-700" />
        </a>
        <a
          href="https://linkedin.com/in/saurabht0"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-300 bg-white/70 shadow hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[1]}
          `}
          aria-label="LinkedIn"
        >
          <Linkedin className="w-7 h-7 group-hover:scale-125 transition-transform text-blue-700" />
        </a>
        <a
          href="mailto:st10813@gmail.com"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-green-300 bg-white/70 shadow hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[2]}
          `}
          aria-label="Email"
        >
          <Mail className="w-7 h-7 group-hover:scale-125 transition-transform text-green-700" />
        </a>
      </div>

      {/* Resume Download Button */}
      <a
        href="https://drive.google.com/file/d/1D94HtyhIdNmizvSUv8V1p5edTu_uCxuR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-600 transition-all duration-200 group animate-scale-in"
      >
        <Download className="w-6 h-6 group-hover:animate-bounce" />
        Download Resume
        <CircleArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-all" />
      </a>

      {/* Contact Info -- subtle underline */}
      <div className="mt-9 text-lg text-gray-500 flex flex-col items-center select-text relative z-10">
        <span className="font-medium transition-all flex items-center gap-1 hover:text-primary hover:underline">
          +91-9721405709
        </span>
        <span className="font-medium transition-all hover:text-primary hover:underline">
          st10813@gmail.com
        </span>
      </div>
    </section>
  );
};

export default Hero;
