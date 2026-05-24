import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = typeof en;

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    greeting: "Hi, I am",
    tagline1: "Building reliable systems",
    tagline2: "for the modern web.",
    intro:
      "Senior Full Stack Engineer with 10+ years building scalable platforms. Currently shipping production systems with",
    introHighlight: "Node.js, NestJS, React, Next.js",
    introTail: ".",
    viewWork: "View my work",
    location: "Leiria, Portugal",
  },
  about: {
    heading: "About me",
    p1: [
      "I'm a Full Stack Developer with solid experience building and maintaining web applications using ",
      "Node.js, React, NestJS, PHP, SQL",
      ", and modern frontend/backend architectures.",
    ],
    p2: "Over the years I've worked across industries — ERP, education, healthcare, logistics, factories, and sports platforms — which sharpened my adaptability, business sense, and ability to deliver practical solutions in dynamic environments.",
    p3: [
      "My focus is building ",
      "reliable, scalable, and maintainable systems",
      ", collaborating closely with product, design, and engineering teams. I have hands-on experience with REST APIs, database design, integrations, bug fixing, performance work, and end-to-end feature delivery.",
    ],
    p4: "I'm always looking to grow technically, contribute to strong teams, and build products that create real impact.",
    stats: [
      { value: "7+", label: "Years building" },
      { value: "80k+", label: "Concurrent users served" },
      { value: "6", label: "Industries shipped to" },
      { value: "40%", label: "Avg perf gains" },
    ],
  },
  skills: {
    heading: "Skills & tools",
    groups: [
      { title: "Front-end" },
      { title: "Back-end" },
      { title: "Data" },
      { title: "Cloud & DevOps" },
      { title: "Quality & Testing" },
      { title: "Observability" },
    ],
  },
  experience: {
    heading: "Where I've worked",
    present: "Present",
    onsite: "On-site",
    remote: "Remote",
  },
  contact: {
    eyebrow: "04. What's next?",
    heading: "Get in touch",
    body: [
      "Building scalable products, backend systems and high-traffic applications is what I enjoy most.",
      "If you're hiring, building something ambitious, or just want to exchange ideas about software architecture, distributed systems or product engineering — feel free to reach out.",
    ],
    cta: "Say hello",
    location: "Leiria, Portugal",
    footer: "Designed & built by William Barbosa",
  },
  jobs: [
    {
      role: "Full Stack Engineer",
      location: "Óbidos, Portugal · On-site",
      bullets: [
        "Building and maintaining full stack features across the company's product suite.",
        "Collaborating with engineering and product teams on new initiatives.",
      ],
    },
    {
      role: "Full Stack Engineer",
      location: "Remote · Brazil",
      bullets: [
        "Developed backend services and APIs using NestJS with PostgreSQL and Redis.",
        "Built frontend dashboards in Next.js for operations and sales teams.",
        "Implemented BullMQ background jobs for automated lead and overdue payment workflows.",
        "Integrated the Meta Official WhatsApp API for high-volume messaging and template management.",
        "Built a Kanban-style CRM dashboard improving overdue payment tracking and team productivity.",
        "Integrated insurance provider APIs to sync customer, policy, and billing data.",
      ],
    },
    {
      role: "Full Stack Engineer",
      location: "Remote · Brazil",
      bullets: [
        "Built a road race management platform serving 80k+ simultaneous users during peak registrations.",
        "Improved performance with Redis caching, drastically reducing DB load under heavy traffic.",
        "Delivered features for registrations, payments, rankings, and automated certificate generation.",
        "Developed an insurance collection & CRM platform with NestJS, Next.js, PostgreSQL, Redis, and BullMQ.",
        "Built a sales commission system integrated with Protheus ERP, automating complex calculations.",
        "Set up CI/CD, managed Linux servers (Nginx, Docker, PM2, SSL, Cloudflare).",
      ],
    },
    {
      role: "Technical Project Manager",
      location: "Remote",
      bullets: [
        "Led projects from planning to delivery, translating business needs into technical priorities.",
        "Coordinated Agile teams using Scrum to improve execution and on-time delivery.",
        "Supported release processes and CI/CD improvements.",
        "Contributed to observability initiatives using Datadog.",
        "Shipped features and fixes in Node.js, React, and PostgreSQL during high-demand periods.",
      ],
    },
    {
      role: "Full Stack Developer",
      location: "Remote · Brazil",
      bullets: [
        "Built features for a white-label multi-tenant sports platform (running, cycling, MTB).",
        "Developed backend and frontend in Node.js, PHP, Angular, Next.js, TypeScript.",
        "Integrated payment systems and financial tools for subscription and event monetization.",
        "Built APIs for automated WhatsApp athlete notifications.",
        "Implemented Jest unit testing to improve reliability.",
      ],
    },
    {
      role: "Full Stack Developer",
      location: "Remote",
      bullets: [
        "Built ERP features across financial, inventory, and sales workflows.",
        "Developed high-performance Point-of-Sale modules for retail.",
        "Integrated Brazilian electronic invoicing (NF-e) with automated tax compliance.",
        "Worked with PHP, Symfony, MySQL, Docker, and REST APIs.",
      ],
    },
    {
      role: "Full Stack Developer",
      location: "Brazil",
      bullets: [
        "Designed tax analysis and compliance solutions for retail systems.",
        "Built RESTful APIs in Node.js and web apps in PHP + Angular, containerized with Docker.",
        "Implemented event-driven architecture with RabbitMQ for async processing.",
        "Migrated and maintained AWS infrastructure (EC2, S3, RDS, Lambda).",
        "Reduced response times by approximately 40% through perf optimization.",
      ],
    },
  ],
};

const pt: Dict = {
  nav: {
    about: "Sobre",
    skills: "Skills",
    experience: "Experiência",
    contact: "Contato",
    cta: "Falar comigo",
  },
  hero: {
    greeting: "Olá, eu sou",
    tagline1: "Construindo sistemas confiáveis",
    tagline2: "para a web moderna.",
    intro:
      "Engenheiro Full Stack Sênior com mais de 10 anos de experiência construindo plataformas escaláveis. Atualmente entregando sistemas em produção com",
    introHighlight: "Node.js, NestJS, React, Next.js",
    introTail: ".",
    viewWork: "Ver meu trabalho",
    location: "Leiria, Portugal",
  },
  about: {
    heading: "Sobre mim",
    p1: [
      "Sou Desenvolvedor Full Stack com sólida experiência construindo e mantendo aplicações web usando ",
      "Node.js, React, NestJS, PHP, SQL",
      " e arquiteturas modernas de frontend e backend.",
    ],
    p2: "Ao longo dos anos atuei em diversos setores — ERP, educação, saúde, logística, indústria e plataformas esportivas — o que afiou minha adaptabilidade, visão de negócio e capacidade de entregar soluções práticas em ambientes dinâmicos.",
    p3: [
      "Meu foco é construir ",
      "sistemas confiáveis, escaláveis e fáceis de manter",
      ", colaborando de perto com produto, design e engenharia. Tenho experiência prática com APIs REST, modelagem de banco de dados, integrações, correção de bugs, performance e entrega de features de ponta a ponta.",
    ],
    p4: "Estou sempre buscando crescer tecnicamente, contribuir com times fortes e construir produtos que gerem impacto real.",
    stats: [
      { value: "7+", label: "Anos construindo" },
      { value: "80k+", label: "Usuários simultâneos atendidos" },
      { value: "6", label: "Setores entregues" },
      { value: "40%", label: "Ganhos médios de performance" },
    ],
  },
  skills: {
    heading: "Skills & ferramentas",
    groups: [
      { title: "Front-end" },
      { title: "Back-end" },
      { title: "Dados" },
      { title: "Cloud & DevOps" },
      { title: "Qualidade & Testes" },
      { title: "Observabilidade" },
    ],
  },
  experience: {
    heading: "Onde eu trabalhei",
    present: "Atual",
    onsite: "Presencial",
    remote: "Remoto",
  },
  contact: {
    eyebrow: "04. E agora?",
    heading: "Entre em contato.",
    body: [
      "O que mais me dá prazer é desenvolver produtos escaláveis, sistemas de back-end e aplicações de alto tráfego.",
      "Se você está contratando, construindo algo ambicioso ou simplesmente quer trocar ideias sobre arquitetura de software, sistemas distribuídos ou engenharia de produto — sinta-se à vontade para entrar em contato.",
    ],
    cta: "Diga oi",
    location: "Leiria, Portugal",
    footer: "Projetado e desenvolvido por William Barbosa",
  },
  jobs: [
    {
      role: "Engenheiro Full Stack",
      location: "Óbidos, Portugal · Presencial",
      bullets: [
        "Construindo e mantendo features full stack em todo o portfólio de produtos da empresa.",
        "Colaborando com times de engenharia e produto em novas iniciativas.",
      ],
    },
    {
      role: "Engenheiro Full Stack",
      location: "Remoto · Brasil",
      bullets: [
        "Desenvolvi serviços de backend e APIs em NestJS com PostgreSQL e Redis.",
        "Construí dashboards frontend em Next.js para times de operações e vendas.",
        "Implementei jobs em background com BullMQ para fluxos automatizados de leads e cobranças em atraso.",
        "Integrei a API Oficial do WhatsApp (Meta) para envio em alto volume e gestão de templates.",
        "Construí um CRM estilo Kanban melhorando o acompanhamento de inadimplência e a produtividade do time.",
        "Integrei APIs de seguradoras para sincronizar dados de clientes, apólices e cobrança.",
      ],
    },
    {
      role: "Engenheiro Full Stack",
      location: "Remoto · Brasil",
      bullets: [
        "Construí uma plataforma de gestão de corridas de rua atendendo mais de 80k usuários simultâneos no pico das inscrições.",
        "Melhorei a performance com estratégias de cache em Redis, reduzindo drasticamente a carga do banco em momentos de pico.",
        "Entreguei features de inscrição, pagamentos, rankings e geração automática de certificados.",
        "Desenvolvi uma plataforma de cobrança e CRM em seguros com NestJS, Next.js, PostgreSQL, Redis e BullMQ.",
        "Construí um sistema de comissões de vendas integrado ao ERP Protheus, automatizando cálculos complexos.",
        "Configurei CI/CD e administrei servidores Linux (Nginx, Docker, PM2, SSL, Cloudflare).",
      ],
    },
    {
      role: "Gerente Técnico de Projetos",
      location: "Remoto",
      bullets: [
        "Conduzi projetos do planejamento à entrega, traduzindo necessidades de negócio em prioridades técnicas claras.",
        "Coordenei times ágeis usando Scrum para melhorar execução e entregas no prazo.",
        "Apoiei processos de release e melhorias de CI/CD.",
        "Contribui com iniciativas de observabilidade usando Datadog.",
        "Entreguei features e correções em Node.js, React e PostgreSQL em períodos de alta demanda.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      location: "Remoto · Brasil",
      bullets: [
        "Construí features para uma plataforma esportiva multi-tenant white-label (corrida, ciclismo, MTB).",
        "Desenvolvi backend e frontend em Node.js, PHP, Angular, Next.js e TypeScript.",
        "Integrei sistemas de pagamento e ferramentas financeiras para assinaturas e monetização de eventos.",
        "Construí APIs para notificações automatizadas de atletas via WhatsApp.",
        "Implementei testes unitários com Jest para melhorar a confiabilidade.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      location: "Remoto",
      bullets: [
        "Construí features de ERP cobrindo fluxos financeiros, de estoque e vendas.",
        "Desenvolvi módulos de PDV de alta performance para o varejo.",
        "Integrei NF-e (nota fiscal eletrônica) com automação de cálculo tributário e conformidade.",
        "Trabalhei com PHP, Symfony, MySQL, Docker e APIs REST.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack",
      location: "Brasil",
      bullets: [
        "Projetei soluções de análise tributária e compliance para sistemas de varejo.",
        "Construí APIs REST em Node.js e aplicações web em PHP + Angular, containerizadas com Docker.",
        "Implementei arquitetura orientada a eventos com RabbitMQ para processamento assíncrono.",
        "Migrei e mantive infraestrutura AWS (EC2, S3, RDS, Lambda).",
        "Reduzi tempos de resposta em aproximadamente 40% através de otimizações.",
      ],
    },
  ],
};

const dicts: Record<Lang, Dict> = { en, pt };

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
