import { motion } from "motion/react";
import { SectionHeading } from "./About";
import { useLang } from "@/i18n/LanguageContext";

const techGroups = [
  [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Angular",
    "Sass",
    "Bootstrap",
    "jQuery",
    "Axios",
  ],
  ["Node.js", "NestJS", "PHP", "Laravel", "Symfony", "OAuth", "JWT", "RabbitMQ", "BullMQ"],
  ["PostgreSQL", "MySQL", "MariaDB", "Redis", "MongoDB", "SQL Server", "SQLite"],
  [
    "AWS EC2",
    "AWS ECS",
    "AWS EKS",
    "AWS Lambda",
    "AWS RDS",
    "AWS SQS / SNS",
    "Docker",
    "Nginx",
    "PM2",
    "GitHub Actions",
    "GitLab CI",
    "Linux",
  ],
  ["Jest", "Playwright", "Supertest", "Swagger", "ESLint", "Prettier", "Husky"],
  ["Sentry", "Datadog", "AWS CloudWatch"],
];

const icons = ["🖥️", "⚙️", "🛢️", "☁️", "🧪", "🔭"];

export function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title={t.skills.heading} />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {t.skills.groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="group rounded-xl border border-border bg-surface/40 backdrop-blur p-6 hover:border-primary/40 hover:bg-surface/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{icons[i]}</span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techGroups[i].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
