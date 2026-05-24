import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "William Barbosa — Senior Full Stack Developer" },
      {
        name: "description",
        content:
          "Senior Full Stack Developer specializing in Node.js, NestJS, Next.js, React, and scalable cloud systems. 7+ years across ERP, healthcare, logistics, and sports platforms.",
      },
      { property: "og:title", content: "William Barbosa — Senior Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Senior Full Stack Developer building reliable, scalable systems with Node.js, NestJS, Next.js, and AWS.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
