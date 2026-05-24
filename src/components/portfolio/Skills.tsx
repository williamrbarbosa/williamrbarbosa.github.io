import { motion } from "motion/react";
import { SectionHeading } from "./About";

const groups = [
  {
    title: "Front-end",
    icon: "🖥️",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Angular", "Sass", "Bootstrap", "jQuery", "Axios"],
  },
  {
    title: "Back-end",
    icon: "⚙️",
    items: ["Node.js", "NestJS", "PHP", "Laravel", "Symfony", "OAuth", "JWT", "RabbitMQ", "BullMQ"],
  },
  {
    title: "Data",
    icon: "🛢️",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "MongoDB", "SQL Server", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: ["AWS EC2", "AWS ECS", "AWS EKS", "AWS Lambda", "AWS RDS", "AWS SQS / SNS", "Docker", "Nginx", "PM2", "GitHub Actions", "GitLab CI", "Linux"],
  },
  {
    title: "Quality & Testing",
    icon: "🧪",
    items: ["Jest", "Playwright", "Supertest", "Swagger", "ESLint", "Prettier", "Husky"],
  },
  {
    title: "Observability",
    icon: "🔭",
    items: ["Sentry", "Datadog", "AWS CloudWatch"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Skills & tools" />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="group rounded-xl border border-border bg-surface/40 backdrop-blur p-6 hover:border-primary/40 hover:bg-surface/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{g.icon}</span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {t}
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
