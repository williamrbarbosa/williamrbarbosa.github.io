import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./About";

const jobs = [
  {
    company: "Janela Digital",
    role: "Full Stack Engineer",
    period: "May 2026 — Present",
    location: "Óbidos, Portugal · On-site",
    bullets: [
      "Building and maintaining full stack features across the company's product suite.",
      "Collaborating with engineering and product teams on new initiatives.",
    ],
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    company: "MayTech.ia",
    role: "Full Stack Engineer",
    period: "Aug 2025 — May 2026",
    location: "Remote · Brazil",
    bullets: [
      "Developed backend services and APIs using NestJS with PostgreSQL and Redis.",
      "Built frontend dashboards in Next.js for operations and sales teams.",
      "Implemented BullMQ background jobs for automated lead and overdue payment workflows.",
      "Integrated the Meta Official WhatsApp API for high-volume messaging and template management.",
      "Built a Kanban-style CRM dashboard improving overdue payment tracking and team productivity.",
      "Integrated insurance provider APIs to sync customer, policy, and billing data.",
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "BullMQ", "WhatsApp API"],
  },
  {
    company: "Independent Contractor",
    role: "Full Stack Engineer",
    period: "Dec 2024 — Aug 2025",
    location: "Remote · Brazil",
    bullets: [
      "Built a road race management platform serving 80k+ simultaneous users during peak registrations.",
      "Improved performance with Redis caching, drastically reducing DB load under heavy traffic.",
      "Delivered features for registrations, payments, rankings, and automated certificate generation.",
      "Developed an insurance collection & CRM platform with NestJS, Next.js, PostgreSQL, Redis, and BullMQ.",
      "Built a sales commission system integrated with Protheus ERP, automating complex calculations.",
      "Set up CI/CD, managed Linux servers (Nginx, Docker, PM2, SSL, Cloudflare).",
    ],
    stack: ["PHP", "AngularJS", "NestJS", "Next.js", "MySQL", "PostgreSQL", "Redis", "Docker"],
  },
  {
    company: "Rx Redefined",
    role: "Technical Project Manager",
    period: "May 2022 — Nov 2024",
    location: "Remote",
    bullets: [
      "Led projects from planning to delivery, translating business needs into technical priorities.",
      "Coordinated Agile teams using Scrum to improve execution and on-time delivery.",
      "Supported release processes and CI/CD improvements.",
      "Contributed to observability initiatives using Datadog.",
      "Shipped features and fixes in Node.js, React, and PostgreSQL during high-demand periods.",
    ],
    stack: ["Scrum", "Node.js", "React", "PostgreSQL", "Datadog", "CI/CD"],
  },
  {
    company: "Recebe Digital",
    role: "Full Stack Developer",
    period: "Mar 2021 — May 2022",
    location: "Remote · Brazil",
    bullets: [
      "Built features for a white-label multi-tenant sports platform (running, cycling, MTB).",
      "Developed backend and frontend in Node.js, PHP, Angular, Next.js, TypeScript.",
      "Integrated payment systems and financial tools for subscription and event monetization.",
      "Built APIs for automated WhatsApp athlete notifications.",
      "Implemented Jest unit testing to improve reliability.",
    ],
    stack: ["Node.js", "NestJS", "PHP", "Angular", "Next.js", "Jest"],
  },
  {
    company: "DFranquias",
    role: "Full Stack Developer",
    period: "Oct 2021 — Apr 2022",
    location: "Remote",
    bullets: [
      "Built ERP features across financial, inventory, and sales workflows.",
      "Developed high-performance Point-of-Sale modules for retail.",
      "Integrated Brazilian electronic invoicing (NF-e) with automated tax compliance.",
      "Worked with PHP, Symfony, MySQL, Docker, and REST APIs.",
    ],
    stack: ["PHP", "Symfony", "MySQL", "Docker", "REST"],
  },
  {
    company: "I-SINC",
    role: "Full Stack Developer",
    period: "Jan 2019 — Nov 2021",
    location: "Brazil",
    bullets: [
      "Designed tax analysis and compliance solutions for retail systems.",
      "Built RESTful APIs in Node.js and web apps in PHP + Angular, containerized with Docker.",
      "Implemented event-driven architecture with RabbitMQ for async processing.",
      "Migrated and maintained AWS infrastructure (EC2, S3, RDS, Lambda).",
      "Reduced response times by approximately 40% through perf optimization.",
    ],
    stack: ["Node.js", "PHP", "Angular", "RabbitMQ", "AWS", "Docker"],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03" title="Where I've worked" />

        <div className="mt-12 grid md:grid-cols-[240px_1fr] gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {jobs.map((j, i) => (
              <button
                key={j.company}
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
                {j.company}
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
                {job.role}{" "}
                <span className="text-primary">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                {job.period} · {job.location}
              </p>
              <ul className="mt-6 space-y-3">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((s) => (
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
