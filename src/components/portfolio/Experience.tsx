import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./About";
import { useLang } from "@/i18n/LanguageContext";

const meta = [
  {
    company: "Janela Digital",
    url: "https://www.linkedin.com/company/janela-digital",
    period: { en: "May 2026 — Present", pt: "Mai 2026 — Atual" },
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    company: "MayTech.ia",
    url: "https://www.linkedin.com/company/106960496/",
    period: { en: "Aug 2025 — May 2026", pt: "Ago 2025 — Mai 2026" },
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ", "WhatsApp API"],
  },
  {
    company: "Independent Contractor",
    url: "https://www.linkedin.com/in/williamrbarbosa/",
    period: { en: "Dec 2024 — Aug 2025", pt: "Dez 2024 — Ago 2025" },
    stack: ["PHP", "AngularJS", "NestJS", "Next.js", "MySQL", "PostgreSQL", "Redis", "Docker"],
  },
  {
    company: "Rx Redefined",
    url: "https://www.linkedin.com/company/34745071/",
    period: { en: "May 2022 — Nov 2024", pt: "Mai 2022 — Nov 2024" },
    stack: ["Scrum", "Node.js", "React", "PostgreSQL", "Datadog", "CI/CD"],
  },
  {
    company: "Recebe Digital",
    url: "https://recebedigital.com.br/#/home",
    period: { en: "Mar 2021 — May 2022", pt: "Mar 2021 — Mai 2022" },
    stack: ["Node.js", "NestJS", "PHP", "Angular", "Next.js", "Jest"],
  },
  {
    company: "DFranquias",
    url: "https://www.linkedin.com/company/dfranquias-group/posts/?feedView=all",
    period: { en: "Oct 2021 — Apr 2022", pt: "Out 2021 — Abr 2022" },
    stack: ["PHP", "Symfony", "MySQL", "Docker", "REST"],
  },
  {
    company: "I-SINC",
    url: "https://www.linkedin.com/company/isincoficial",
    period: { en: "Jan 2019 — Nov 2021", pt: "Jan 2019 — Nov 2021" },
    stack: ["Node.js", "PHP", "Angular", "RabbitMQ", "AWS", "Docker"],
  },
];

export function Experience() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const m = meta[active];
  const j = t.jobs[active];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03" title={t.experience.heading} />

        <div className="mt-12 grid md:grid-cols-[240px_1fr] gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {meta.map((mm, i) => (
              <button
                key={mm.company}
                onClick={() => setActive(i)}
                className={`relative text-left whitespace-nowrap md:whitespace-normal px-4 py-3 font-mono text-sm transition-all ${
                  active === i
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                }`}
              >
                <span
                  className={`absolute md:left-0 md:top-0 md:bottom-0 md:w-0.5 bottom-0 left-0 right-0 h-0.5 md:h-auto transition-all ${
                    active === i ? "bg-primary" : "bg-transparent"
                  }`}
                />
                {mm.company}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-display font-semibold">
                {j.role}{" "}
                <a href={m.url} className="text-primary" target="_blank" rel="noopener noreferrer">
                  @ {m.company}
                </a>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                {m.period[lang]} · {j.location}
              </p>
              <ul className="mt-6 space-y-3">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {m.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
