import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
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

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(".cert-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="certifications">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-heading font-semibold tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Certifications
          </h2>
        </div>

        {/* Certifications list */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cert-card fade-up stagger-${index + 1} glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 group block`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
