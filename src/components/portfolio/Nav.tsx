import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          william<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <span className="text-primary text-xs">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
