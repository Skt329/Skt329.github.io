import { useEffect, useRef } from "react";
import { BookOpen, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Behind the Screen: How Computer Code Actually Works",
    url: "https://medium.com/@thedotopinion/behind-the-screen-how-computer-code-actually-works-5346039fe152",
    date: "April 2025",
    desc: "A deep dive into how machines interpret and execute human-written code.",
  },
  {
    title: "Inside the Internet: What Happens After You Click?",
    url: "https://medium.com/@thedotopinion/inside-the-internet-what-happens-after-you-click-fa9bff10c6e5",
    date: "December 2024",
    desc: "From DNS resolution to server response — the hidden journey of every click.",
  },
];

const Articles = () => {
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
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="articles">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-28">
            <span className="fade-up text-primary text-sm font-heading font-semibold tracking-widest uppercase block mb-3">
              Writing
            </span>
            <h2 className="fade-up font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              I write about tech
            </h2>
            <p className="fade-up text-muted-foreground text-sm leading-relaxed mb-6">
              Breaking down complex technical concepts into approachable reads.
            </p>
            <a
              href="https://medium.com/@thedotopinion"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group inline-flex items-center gap-2 text-sm font-heading font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Read on Medium
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — article cards */}
          <div className="space-y-4">
            {articles.map((article, i) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fade-up stagger-${i + 1} group flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-primary/20 bg-surface/20 hover:bg-surface/50 transition-all duration-400 block`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-1.5 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {article.desc}
                  </p>
                  <span className="text-xs text-muted-foreground/50 font-medium">
                    {article.date}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
