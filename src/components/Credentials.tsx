import { useEffect, useRef } from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "Mar 2026",
    link: "http://verify.skilljar.com/c/um2f65d8wfp2",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    link: "http://verify.skilljar.com/c/48vf53o95jzm",
  },
  {
    title: "Introduction to LangChain",
    issuer: "LangChain Academy",
    date: "Mar 2026",
    link: "https://academy.langchain.com/certificates/2kllefhgct",
  },
];

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Babashaheb Bhimrao Ambedkar University",
    location: "Lucknow, India",
    period: "Aug 2022 – May 2024",
  },
  {
    degree: "Bachelor of Science",
    institution: "Ram Manohar Lohia Awadh University",
    location: "Ayodhya, India",
    period: "Aug 2018 – May 2021",
  },
];

const Credentials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="credentials">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="reveal stagger-1 block text-primary text-sm font-mono font-medium tracking-[0.2em] uppercase mb-4">
            Background
          </span>
          <h2 className="reveal stagger-2 font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Education &{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="reveal font-heading font-semibold text-xl text-foreground flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal stagger-${i + 1} bento-card flex items-center justify-between p-5 rounded-2xl group block`}
                >
                  <div>
                    <div className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                      {cert.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="reveal font-heading font-semibold text-xl text-foreground flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={`reveal stagger-${i + 1} skill-card rounded-2xl p-5`}
                >
                  <div className="font-heading font-semibold text-sm text-foreground mb-1">{edu.degree}</div>
                  <div className="text-xs text-primary/70 mb-1">{edu.institution}</div>
                  <div className="text-xs text-muted-foreground">
                    {edu.location} · {edu.period}
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
