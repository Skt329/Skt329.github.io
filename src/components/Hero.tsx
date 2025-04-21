
import { CircleUser, CircleArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ICON_HOVERS = [
  "hover:bg-purple-300/90 hover:text-purple-900 hover:shadow-lg hover:border-purple-400",
  "hover:bg-indigo-300/90 hover:text-indigo-900 hover:shadow-lg hover:border-indigo-400",
  "hover:bg-emerald-300/90 hover:text-emerald-900 hover:shadow-lg hover:border-emerald-400",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
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
        background:
          "linear-gradient(109.6deg, #f0e6ff 11.2%, #d9d1ff 50%, #bfb8ff 91.1%)",
        position: "relative",
      }}
    >
      <div className="absolute left-[-100px] top-0 w-64 h-64 bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-300 rounded-full blur-3xl opacity-70 z-0 pointer-events-none animate-pulse" />
      <div className="absolute right-[-120px] bottom-[-60px] w-72 h-56 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-200 rounded-full blur-3xl opacity-70 z-0 pointer-events-none animate-pulse" />

      {/* Name & Tagline */}
      <h1 className="relative z-10 mt-16 text-6xl md:text-7xl font-extrabold tracking-tight text-indigo-800 drop-shadow-sm animate-fade-in">
        Saurabh Tiwari
      </h1>
      <p className="relative z-10 text-2xl md:text-3xl font-semibold text-indigo-800 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed animate-fade-in">
        Blockchain & AI developer — building decentralized applications and intelligent systems.
      </p>

      {/* Contact/Links */}
      <div className="relative z-10 flex gap-7 mb-8 justify-center animate-fade-in">
        <a
          href="https://github.com/Skt329"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple-400 bg-white/90 shadow-md hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[0]}
          `}
          aria-label="GitHub"
        >
          <CircleUser className="w-7 h-7 group-hover:scale-125 transition-transform text-purple-800" />
        </a>
        <a
          href="https://linkedin.com/in/saurabht0"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-indigo-400 bg-white/90 shadow-md hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[1]}
          `}
          aria-label="LinkedIn"
        >
          <CircleUser className="w-7 h-7 group-hover:scale-125 transition-transform text-indigo-800" />
        </a>
        <a
          href="mailto:st10813@gmail.com"
          className={`
            group w-14 h-14 flex items-center justify-center rounded-full border-2 border-emerald-400 bg-white/90 shadow-md hover:scale-110 transition-all duration-200
            ${ICON_HOVERS[2]}
          `}
          aria-label="Email"
        >
          <CircleUser className="w-7 h-7 group-hover:scale-125 transition-transform text-emerald-800" />
        </a>
      </div>

      {/* Resume Download Button */}
      <a
        href="https://drive.google.com/file/d/1D94HtyhIdNmizvSUv8V1p5edTu_uCxuR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gradient-to-l hover:from-pink-600 hover:to-indigo-700 transition-all duration-300 group animate-scale-in hover:scale-105"
      >
        <CircleArrowRight className="w-6 h-6 group-hover:animate-bounce" />
        Download Resume
      </a>

      {/* Contact Info -- subtle underline */}
      <div className="mt-9 text-lg text-indigo-700 flex flex-col items-center select-text relative z-10">
        <span className="font-medium transition-all flex items-center gap-1 hover:text-indigo-900 hover:underline">
          +91-9721405709
        </span>
        <span className="font-medium transition-all hover:text-indigo-900 hover:underline">
          st10813@gmail.com
        </span>
      </div>
    </section>
  );
};

export default Hero;
