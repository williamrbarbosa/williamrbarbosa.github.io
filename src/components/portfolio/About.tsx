import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title={t.about.heading} />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {t.about.p1[0]}
              <span className="text-foreground">{t.about.p1[1]}</span>
              {t.about.p1[2]}
            </p>
            <p>{t.about.p2}</p>
            <p>
              {t.about.p3[0]}
              <span className="text-foreground">{t.about.p3[1]}</span>
              {t.about.p3[2]}
            </p>
            <p>{t.about.p4}</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {t.about.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-surface/50 backdrop-blur p-5"
              >
                <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-primary text-sm">{number}.</span>
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border ml-2 max-w-xs" />
    </div>
  );
}
