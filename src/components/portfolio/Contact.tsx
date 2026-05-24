import { Mail, Linkedin, MapPin, Github } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">{t.contact.eyebrow}</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-gradient">{t.contact.heading}</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t.contact.body}</p>

        <a
          href="mailto:williampgm@gmail.com"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary"
        >
          <Mail className="w-5 h-5" />
          {t.contact.cta}
        </a>

        <div className="mt-14 flex flex-wrap justify-center items-center gap-8 text-sm font-mono text-muted-foreground">
          <a
            href="mailto:williampgm@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> williampgm@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/williamrbarbosa/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" /> /williamrbarbosa
          </a>
          <a
            href="https://github.com/williamrbarbosa"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" /> /williamrbarbosa
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {t.contact.location}
          </span>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {t.contact.footer} · © {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
