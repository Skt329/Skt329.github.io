import { GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

const education = [
  {
    university: "Babasaheb Bhimrao Ambedkar University",
    degree: "Master of Computer Application",
    location: "Lucknow (U.P.), India",
    period: "Aug 2022 — May 2024",
  },
  {
    university: "Ram Manohar Lohia Awadh University",
    degree: "Bachelor of Science",
    location: "Ayodhya (U.P.), India",
    period: "Aug 2018 — May 2021",
  },
];

const Education = () => {
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
    const items = sectionRef.current?.querySelectorAll(".edu-item");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-heading font-semibold tracking-widest uppercase mb-3 block">
            Background
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.university}
                className={`edu-item fade-up stagger-${index + 1} relative sm:pl-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background hidden sm:block" />

                <div className="glass-card glass-card-hover rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {edu.university}
                      </h3>
                      <p className="text-primary/80 font-medium text-sm mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {edu.location}
                      </p>
                      <p className="text-muted-foreground/60 text-xs mt-2 font-medium tracking-wide">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;