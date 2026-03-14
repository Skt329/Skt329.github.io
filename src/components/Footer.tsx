import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Big CTA */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Let's build something<br />
            <span className="text-gradient">together.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>

          {/* Visible contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:st108113@gmail.com"
              className="group flex items-center gap-2.5 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">st108113@gmail.com</span>
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <a
              href="tel:+919721405709"
              className="group flex items-center gap-2.5 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">+91 97214 05709</span>
            </a>
          </div>

          <a
            href="mailto:st108113@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold tracking-wide hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-lg text-foreground">
              ST<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground/50">
              © {new Date().getFullYear()} Saurabh Tiwari
            </span>
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
                className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground/40 hover:text-primary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
