import { useEffect, useRef } from "react";

const metrics = [
  { value: "15+", label: "Orchestrated AI tools", detail: "NeutriAI" },
  { value: "1K+", label: "Articles processed daily", detail: "Synth News" },
  { value: "67%", label: "Cost reduction achieved", detail: "via batch APIs" },
  { value: "4", label: "Production apps shipped", detail: "since 2024" },
];

const ImpactMetrics = () => {
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
      { threshold: 0.15 }
    );
    const cards = sectionRef.current?.querySelectorAll(".reveal");
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6" id="metrics">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`reveal stagger-${i + 1} stat-glow rounded-2xl p-6 sm:p-8 text-center border border-border bg-surface/50`}
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm text-foreground font-medium mb-1">{m.label}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
