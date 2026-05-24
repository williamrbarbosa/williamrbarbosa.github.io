import { motion } from "motion/react";

const stats = [
  { value: "7+", label: "Years building" },
  { value: "80k+", label: "Concurrent users served" },
  { value: "6", label: "Industries shipped to" },
  { value: "40%", label: "Avg perf gains" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="About me" />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Full Stack Developer with solid experience building and maintaining web
              applications using <span className="text-foreground">Node.js, React, NestJS, PHP, SQL</span>,
              and modern frontend/backend architectures.
            </p>
            <p>
              Over the years I've worked across industries — ERP, education, healthcare,
              logistics, factories, and sports platforms — which sharpened my adaptability,
              business sense, and ability to deliver practical solutions in dynamic environments.
            </p>
            <p>
              My focus is building <span className="text-foreground">reliable, scalable, and
              maintainable systems</span>, collaborating closely with product, design, and
              engineering teams. I have hands-on experience with REST APIs, database design,
              integrations, bug fixing, performance work, and end-to-end feature delivery.
            </p>
            <p>
              I'm always looking to grow technically, contribute to strong teams, and build
              products that create real impact.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
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
