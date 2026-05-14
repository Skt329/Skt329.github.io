import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border py-16 px-6">
    <div className="max-w-6xl mx-auto">
      {/* CTA block */}
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-primary/70 tracking-[0.2em] uppercase mb-4">Get in touch</p>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
          Let's build something{" "}
          <span className="text-gradient">together.</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          I'm actively looking for AI Engineer roles. If you're building something interesting with LLMs, agents, or RAG — reach out.
        </p>
        <a
          href="mailto:st108113@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          st108113@gmail.com
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
        <div className="text-sm font-heading font-bold text-foreground">
          <span className="text-gradient">Saurabh Tiwari</span>
          <span className="text-muted-foreground/50 font-normal ml-2">— AI Engineer, Bengaluru</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/Skt329", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/saurabht0", label: "LinkedIn" },
            { icon: Mail, href: "mailto:st108113@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/40">
          © {new Date().getFullYear()} Saurabh Tiwari
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
