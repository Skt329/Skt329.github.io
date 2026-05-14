import { useEffect, useRef } from "react";

const metrics = [
  { value: "6+", label: "Production AI apps shipped", desc: "agentic PWAs, desktop tools, npm packages" },
  { value: "15+", label: "AI tools orchestrated", desc: "in a single agentic turn via Vercel AI SDK" },
  { value: "67%", label: "Cost reduction", desc: "Synth News — $15/day to $5/day via batch processing" },
  { value: "95%", label: "Search cost savings", desc: "hybrid vector + API search on Synth News" },
  { value: "<2s", label: "Chat response latency", desc: "with semantic memory on NeutriAI" },
  { value: "0", label: "Cloud dependencies", desc: "Audiobook Creator — fully local inference" },
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
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="metrics" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="reveal stagger-1 block text-primary text-sm font-mono font-medium tracking-[0.2em] uppercase mb-4">
            Impact
          </span>
          <h2 className="reveal stagger-2 font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Numbers that{" "}
            <span className="text-gradient">speak for themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`reveal stagger-${Math.min(i + 1, 6)} bento-card rounded-2xl p-6 sm:p-8 group`}
            >
              <div className="stat-number text-3xl sm:text-4xl mb-2">{m.value}</div>
              <div className="text-sm font-heading font-semibold text-foreground mb-1">{m.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
