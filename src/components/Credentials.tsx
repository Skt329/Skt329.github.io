import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "Building with the Claude API", issuer: "Anthropic", date: "Mar 2026", link: "http://verify.skilljar.com/c/um2f65d8wfp2" },
  { title: "Claude Code in Action", issuer: "Anthropic", date: "Mar 2026", link: "http://verify.skilljar.com/c/48vf53o95jzm" },
  { title: "Introduction to LangChain", issuer: "LangChain Academy", date: "Mar 2026", link: "https://academy.langchain.com/certificates/2kllefhgct" },
];

const education = [
  { degree: "Master of Computer Application", university: "Babasaheb Bhimrao Ambedkar University", location: "Lucknow, India", period: "2022 — 2024" },
  { degree: "Bachelor of Science", university: "Ram Manohar Lohia Awadh University", location: "Ayodhya, India", period: "2018 — 2021" },
];

const Credentials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }); },
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="credentials">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <span className="reveal text-primary text-sm font-heading font-semibold tracking-[0.2em] uppercase block mb-3">Credentials</span>
          <h2 className="reveal font-heading font-bold text-3xl sm:text-4xl text-foreground mb-10">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer"
                className={`reveal stagger-${i + 1} group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 bg-surface/30 hover:bg-surface/60 transition-all duration-300 block`}>
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{cert.title}</h4>
                  <span className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="education">
          <span className="reveal text-primary text-sm font-heading font-semibold tracking-[0.2em] uppercase block mb-3">Background</span>
          <h2 className="reveal font-heading font-bold text-3xl sm:text-4xl text-foreground mb-10">Education</h2>
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={edu.degree} className={`reveal stagger-${i + 1} relative pl-14`}>
                  <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <h4 className="font-heading font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{edu.university}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground/60">
                    <span>{edu.location}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
