import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — branding */}
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-lg text-foreground">
            ST<span className="text-primary">.</span>
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saurabh Tiwari
          </span>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-3">
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
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
