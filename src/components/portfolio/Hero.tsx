import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-primary mb-6 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-gradient leading-[0.95]"
        >
          William Barbosa.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-3xl sm:text-5xl md:text-6xl font-bold text-muted-foreground leading-[1.05]"
        >
          I build reliable systems<br className="hidden sm:block" /> for the modern web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Senior Full Stack Engineer with 7+ years building scalable platforms across ERP,
          healthcare, logistics, and sports. Currently shipping production systems with
          <span className="text-foreground"> Node.js, NestJS, Next.js</span> and a stack
          that scales to 80k+ concurrent users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-primary"
          >
            View my work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="mailto:williampgm@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground hover:bg-surface transition-colors"
          >
            <Mail className="w-4 h-4" />
            williampgm@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-5 text-muted-foreground"
        >
          <a
            href="https://www.linkedin.com/in/williamrbarbosa/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <div className="h-px w-16 bg-border" />
          <span className="font-mono text-xs">Óbidos, Portugal</span>
        </motion.div>
      </div>
    </section>
  );
}
