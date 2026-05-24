import { useLang, type Lang } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  const opts: Lang[] = ["en", "pt"];
  return (
    <div className="inline-flex items-center rounded-md border border-border bg-surface/50 backdrop-blur p-0.5 font-mono text-xs">
      {opts.map((o) => (
        <button
          key={o}
          onClick={() => setLang(o)}
          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
            lang === o
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === o}
        >
          {o.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
