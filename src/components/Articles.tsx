import { BookOpen, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const mediumArticles = [
  {
    title: "Behind the Screen: How Computer Code Actually Works",
    url: "https://medium.com/@thedotopinion/behind-the-screen-how-computer-code-actually-works-5346039fe152",
    date: "April 2025",
    desc: "A deep dive into the world of computer programming and how machines interpret human-written code.",
  },
  {
    title: "Inside the Internet: What Happens After You Click?",
    url: "https://medium.com/@thedotopinion/inside-the-internet-what-happens-after-you-click-fa9bff10c6e5",
    date: "December 2024",
    desc: "Journey through the internet's infrastructure — from DNS resolution to server response.",
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
    const cards = sectionRef.current?.querySelectorAll(".article-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="articles">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-heading font-semibold tracking-widest uppercase mb-3 block">
            Writing
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
            Articles
          </h2>
        </div>

        {/* Article cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {mediumArticles.map((article, index) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`article-card fade-up stagger-${index + 1} glass-card glass-card-hover rounded-2xl p-6 group block`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {article.desc}
              </p>
              <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">
                {article.date}
              </span>
            </a>
          ))}
        </div>

        {/* Medium CTA */}
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@thedotopinion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
          >
            Read more on Medium
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
