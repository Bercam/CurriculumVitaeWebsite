import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import {
  SiSpring, SiSpringboot, SiHibernate, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiApachemaven, SiGit, SiGithub, SiSwagger,
  SiJavascript, SiNodedotjs, SiAngular, SiPython, SiHtml5, SiCss,
  SiJunit5,
} from "react-icons/si";
import { FaJava, FaLayerGroup, FaVial } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

/* ─── design tokens ─── */
const G = "rgba(74,222,128,";   // #4ade80 shorthand
const GREEN = "#4ade80";

type Lang = "pt" | "en";

/* ─── static maps ─── */
type IconComp = React.ComponentType<{ style?: React.CSSProperties; className?: string }>;

const TECH_ICON: Record<string, IconComp> = {
  "Java": FaJava, "Spring Boot": SiSpringboot, "Spring Web": SiSpring,
  "Spring Data JPA": SiSpring, "Hibernate": SiHibernate, "REST API": TbApi,
  "PostgreSQL": SiPostgresql, "MySQL": SiMysql, "Redis": SiRedis,
  "JUnit": SiJunit5, "Mockito": FaVial, "Testes Unitários": SiJunit5,
  "Unit Testing": SiJunit5, "Docker": SiDocker, "Maven": SiApachemaven,
  "Git": SiGit, "GitHub": SiGithub, "Swagger/OpenAPI": SiSwagger,
  "JavaScript": SiJavascript, "Node.js": SiNodedotjs, "Angular": SiAngular,
  "Python": SiPython, "HTML": SiHtml5, "CSS": SiCss, "JPA": FaLayerGroup,
};

function TechIcon({ name, style }: { name: string; style?: React.CSSProperties }) {
  const Icon = TECH_ICON[name];
  return Icon ? <Icon style={style} /> : null;
}

const PRINCIPLE_REPO: Record<string, string> = {
  "Clean Code": "https://github.com/Bercam/room-reservation-api",
  "SOLID": "https://github.com/Bercam/ApiDeFuncionarios",
  "DDD": "https://github.com/Bercam/room-reservation-api",
  "REST": "https://github.com/Bercam/room-reservation-api",
  "Automated Testing": "https://github.com/Bercam/room-reservation-api",
  "Testes Automatizados": "https://github.com/Bercam/room-reservation-api",
  "Layered Architecture": "https://github.com/Bercam/ApiDeFuncionarios",
  "Arquitetura em Camadas": "https://github.com/Bercam/ApiDeFuncionarios",
  "DTO Pattern": "https://github.com/Bercam/ApiDeFuncionarios",
  "Repository Pattern": "https://github.com/Bercam/ApiDeFuncionarios",
  "Exception Handling": "https://github.com/Bercam/room-reservation-api",
  "API Design": "https://github.com/Bercam/room-reservation-api",
  "Maintainability": "https://github.com/Bercam/room-reservation-api",
  "Manutenibilidade": "https://github.com/Bercam/room-reservation-api",
  "Scalability": "https://github.com/Bercam/BankCore",
  "Escalabilidade": "https://github.com/Bercam/BankCore",
};

const CONTENT = {
  pt: {
    nav: [
      { id: "hero", label: "Sobre" }, { id: "stack", label: "Stack" },
      { id: "projects", label: "Projetos" }, { id: "contact", label: "Contato" },
    ],
    hero: {
      subtitle: "Estudante de Ciência da Computação focado em construção de APIs REST robustas com Spring Boot, persistência JPA/Hibernate e arquitetura de software manutenível.",
      cta_projects: "Ver Projetos", cta_github: "GitHub",
    },
    about: {
      heading: "Sobre",
      body: "Estudante de Ciência da Computação no IFMG — Campus Ibirité, com foco em desenvolvimento Backend Java. Construo APIs REST estruturadas usando Spring Boot, com persistência via JPA/Hibernate e PostgreSQL, testes automatizados com JUnit e Mockito, e documentação com Swagger/OpenAPI. Busco oportunidades como estagiário ou desenvolvedor Backend Java júnior em Belo Horizonte, híbrido ou remoto.",
      available: "Disponível para", options: ["Estágio", "Entry-Level", "Posições Junior"],
      location: "Belo Horizonte, MG · Híbrido · Remoto",
    },
    stack: {
      heading: "Stack Técnica",
      categories: [
        { name: "Core Backend", items: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "Hibernate", "REST API"] },
        { name: "Banco de Dados", items: ["PostgreSQL", "MySQL", "Redis"] },
        { name: "Testes", items: ["JUnit", "Mockito", "Testes Unitários"] },
        { name: "DevOps & Ferramentas", items: ["Docker", "Maven", "Git", "GitHub", "Swagger/OpenAPI"] },
        { name: "Complementar", items: ["JavaScript", "Node.js", "Angular", "Python", "HTML", "CSS"] },
      ],
    },
    principles: {
      heading: "Engenharia",
      items: ["Clean Code", "SOLID", "DDD", "REST", "Testes Automatizados", "Arquitetura em Camadas", "DTO Pattern", "Repository Pattern", "Exception Handling", "API Design", "Manutenibilidade", "Escalabilidade"],
    },
    projects: {
      heading: "Projetos",
      items: [
        { name: "Room Reservation API 2.0", description: "API REST para reserva de salas com validação robusta, tratamento global de exceções e documentação Swagger. Foco em arquitetura backend limpa e escalável.", tags: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Docker", "Swagger/OpenAPI"], url: "https://github.com/Bercam/room-reservation-api" },
        { name: "API de Funcionários", description: "CRUD estruturado de funcionários e setores com DTOs, Records, JPA, relacionamentos entre entidades, validação e documentação Swagger/OpenAPI.", tags: ["Java", "Spring Boot", "PostgreSQL", "Swagger/OpenAPI", "JPA", "Hibernate"], url: "https://github.com/Bercam/ApiDeFuncionarios" },
        { name: "BankCore", description: "Sistema bancário backend com operações de conta, transações e persistência estruturada seguindo boas práticas de arquitetura.", tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"], url: "https://github.com/Bercam/BankCore" },
        { name: "Screenmatch", description: "Integração com a API externa OMDb para consumo, tratamento e persistência de dados de filmes e séries com Jackson e JSON.", tags: ["Java", "Spring Boot", "REST API", "JavaScript"], url: "https://github.com/Bercam" },
      ],
    },
    education: {
      heading: "Formação & Experiência",
      degree: "Bacharelado em Ciência da Computação", institution: "IFMG — Campus Ibirité", status: "Em andamento",
      exp_heading: "Experiência Profissional", exp_title: "Suporte Técnico", exp_company: "CiberFenix",
      exp_period: "Jan 2022 – Jan 2024",
      exp_desc: "Manutenção de hardware e impressoras, suporte técnico a clientes, resolução de problemas de rede. Estudo autodidata de Java, lógica de programação e estrutura de software.",
    },
    contact: { heading: "Contato", subtitle: "Disponível para novas oportunidades." },
    docs: {
      heading: "Documentos",
      resume: { label: "Currículo", desc: "Pedro Berçam — Versão PT-BR", url: "/Pedro_Bercam_Curriculo.pdf", filename: "Pedro_Bercam_Curriculo.pdf", modalLabel: "Currículo — PT-BR" },
      cover:  { label: "Carta de Apresentação", desc: "Pedro Berçam — Versão PT-BR", url: "/Carta_de_Apresentacao_Pedro_Bercam.pdf", filename: "Carta_de_Apresentacao_Pedro_Bercam.pdf", modalLabel: "Carta de Apresentação — PT-BR" },
    },
  },
  en: {
    nav: [
      { id: "hero", label: "About" }, { id: "stack", label: "Stack" },
      { id: "projects", label: "Projects" }, { id: "contact", label: "Contact" },
    ],
    hero: {
      subtitle: "Computer Science student focused on building robust REST APIs with Spring Boot, JPA/Hibernate persistence, and maintainable software architecture.",
      cta_projects: "View Projects", cta_github: "GitHub",
    },
    about: {
      heading: "About",
      body: "Computer Science student at IFMG — Campus Ibirité, focused on Backend Java development. I build structured REST APIs using Spring Boot, with JPA/Hibernate and PostgreSQL persistence, automated testing with JUnit and Mockito, and API documentation with Swagger/OpenAPI. Looking for Backend Java internship or junior opportunities in Belo Horizonte, hybrid or remote.",
      available: "Available for", options: ["Internship", "Entry-Level", "Junior positions"],
      location: "Belo Horizonte, MG · Hybrid · Remote",
    },
    stack: {
      heading: "Tech Stack",
      categories: [
        { name: "Core Backend", items: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "Hibernate", "REST API"] },
        { name: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
        { name: "Testing", items: ["JUnit", "Mockito", "Unit Testing"] },
        { name: "DevOps & Tools", items: ["Docker", "Maven", "Git", "GitHub", "Swagger/OpenAPI"] },
        { name: "Additional", items: ["JavaScript", "Node.js", "Angular", "Python", "HTML", "CSS"] },
      ],
    },
    principles: {
      heading: "Engineering",
      items: ["Clean Code", "SOLID", "DDD", "REST", "Automated Testing", "Layered Architecture", "DTO Pattern", "Repository Pattern", "Exception Handling", "API Design", "Maintainability", "Scalability"],
    },
    projects: {
      heading: "Projects",
      items: [
        { name: "Room Reservation API 2.0", description: "REST API for room reservations with robust validation, global exception handling, and Swagger documentation. Focus on clean, scalable backend architecture.", tags: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Docker", "Swagger/OpenAPI"], url: "https://github.com/Bercam/room-reservation-api" },
        { name: "Employee API", description: "Structured employee and department CRUD with DTOs, Records, JPA, entity relationships, validation, and Swagger/OpenAPI documentation.", tags: ["Java", "Spring Boot", "PostgreSQL", "Swagger/OpenAPI", "JPA", "Hibernate"], url: "https://github.com/Bercam/ApiDeFuncionarios" },
        { name: "BankCore", description: "Backend banking system with account operations, transactions, and structured persistence following architecture best practices.", tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"], url: "https://github.com/Bercam/BankCore" },
        { name: "Screenmatch", description: "External API integration with OMDb for fetching, processing, and persisting movie and TV series data using Jackson and JSON.", tags: ["Java", "Spring Boot", "REST API", "JavaScript"], url: "https://github.com/Bercam" },
      ],
    },
    education: {
      heading: "Education & Experience",
      degree: "Bachelor's in Computer Science", institution: "IFMG — Campus Ibirité", status: "Ongoing",
      exp_heading: "Professional Experience", exp_title: "Technical Support", exp_company: "CiberFenix",
      exp_period: "Jan 2022 – Jan 2024",
      exp_desc: "Hardware maintenance, technical support for clients, network troubleshooting. Self-taught study of Java, programming logic, and software structure.",
    },
    contact: { heading: "Contact", subtitle: "Open to new opportunities." },
    docs: {
      heading: "Documents",
      resume: { label: "Resume", desc: "Pedro Berçam — English version", url: "/Pedro_Bercam_Resume.pdf", filename: "Pedro_Bercam_Resume.pdf", modalLabel: "Resume — English" },
      cover:  { label: "Cover Letter", desc: "Pedro Berçam — English version", url: "/Cover_Letter_Pedro_Bercam.pdf", filename: "Cover_Letter_Pedro_Bercam.pdf", modalLabel: "Cover Letter — English" },
    },
  },
} as const;

/* ─── RAF throttle helper ─── */
function rafThrottle(fn: () => void) {
  let id = 0;
  return () => { cancelAnimationFrame(id); id = requestAnimationFrame(fn); };
}

/* ─── useFadeIn ─── */
function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); } },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── useActiveSection ─── */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.35, rootMargin: "-56px 0px 0px 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ─── useClosestToCenter: RAF-throttled, stable setRef via useMemo ─── */
function useClosestToCenter(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [closest, setClosest] = useState<number | null>(null);

  const stableSetRefs = useMemo(
    () => Array.from({ length: count }, (_, i) => (el: HTMLDivElement | null) => { refs.current[i] = el; }),
    [count]
  );

  useEffect(() => {
    const measure = () => {
      const mid = window.innerHeight / 2;
      let bestIdx = 0, bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs((r.top + r.bottom) / 2 - mid);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      });
      setClosest(bestDist < window.innerHeight * 0.6 ? bestIdx : null);
    };
    const throttled = rafThrottle(measure);
    window.addEventListener("scroll", throttled, { passive: true });
    measure();
    return () => window.removeEventListener("scroll", throttled);
  }, [count]);

  return { closest, stableSetRefs };
}

/* ─── GlassCard ─── */
const GlassCard = memo(function GlassCard({
  children, className = "", hover = false, lit = false,
}: { children: React.ReactNode; className?: string; hover?: boolean; lit?: boolean }) {
  return (
    <div
      className={`relative border p-0 transition-all duration-300 ${hover ? "cursor-pointer" : ""} ${className}`}
      style={{
        borderColor: lit ? `${G}0.35)` : "rgba(255,255,255,0.08)",
        background: lit
          ? `linear-gradient(135deg,${G}0.07) 0%,${G}0.02) 100%)`
          : "linear-gradient(135deg,rgba(255,255,255,.045) 0%,rgba(255,255,255,.012) 100%)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        boxShadow: lit
          ? `0 0 32px ${G}0.08),inset 0 1px 0 ${G}0.12)`
          : "0 2px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.06)",
      }}
    >
      {children}
    </div>
  );
});

/* ─── Logo ─── */
const Logo = memo(function Logo() {
  return (
    <div className="flex items-center gap-1 select-none group cursor-default">
      <span className="font-mono text-[13px] transition-colors duration-200" style={{ color: `${G}0.6)` }}>
        &lt;
      </span>
      <span className="font-fraunces text-white/65 text-sm group-hover:text-white transition-colors duration-200">/</span>
      <span className="font-mono text-[11px] text-white/55 tracking-[0.12em] group-hover:text-white/85 transition-colors duration-200">PB</span>
      <span className="font-mono text-[13px] transition-colors duration-200" style={{ color: `${G}0.6)` }}>
        &gt;
      </span>
    </div>
  );
});

/* ─── SectionHeading ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-fraunces text-2xl text-white/90 font-light tracking-tight">{children}</h2>
      <div className="mt-2 w-6 h-px" style={{ background: GREEN, opacity: 0.5 }} />
    </div>
  );
}

/* ─── Section ─── */
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity .55s ease,transform .55s ease" }}
      className={`py-20 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

function Divider() {
  return <div className="max-w-5xl mx-auto px-6"><div className="border-t border-white/5" /></div>;
}

/* ─── LangToggle ─── */
const LangToggle = memo(function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 px-3 py-1.5 transition-all duration-200 group shrink-0"
      style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.025)", backdropFilter: "blur(8px)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${G}0.35)`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.08)"; }}
      aria-label="Toggle language"
    >
      <span className="font-mono text-[10px] tracking-widest transition-colors duration-200" style={{ color: lang === "pt" ? GREEN : "rgba(255,255,255,0.25)" }}>PT</span>
      <span className="font-mono text-[10px] text-white/15">/</span>
      <span className="font-mono text-[10px] tracking-widest transition-colors duration-200" style={{ color: lang === "en" ? GREEN : "rgba(255,255,255,0.25)" }}>EN</span>
    </button>
  );
});

/* ─── DocCard: both always green ─── */
const DocCard = memo(function DocCard({ label, desc, onOpen }: { label: string; desc: string; onOpen: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="block text-left w-full"
    >
      <GlassCard lit={hov} className="p-6" hover>
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-9 h-9 flex items-center justify-center border transition-colors duration-300"
            style={{ borderColor: hov ? `${G}0.5)` : `${G}0.2)` }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              style={{ color: hov ? GREEN : `${G}0.7)`, transition: "color .3s" }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
            </svg>
          </div>
          <span
            className="font-mono text-[10px] transition-colors duration-300"
            style={{ color: hov ? GREEN : `${G}0.4)` }}
          >
            visualizar →
          </span>
        </div>
        <h3
          className="font-fraunces text-[1.05rem] mb-1 transition-colors duration-300"
          style={{ color: hov ? GREEN : "rgba(255,255,255,0.9)" }}
        >
          {label}
        </h3>
        <p className="font-mono text-[10px] text-white/25">{desc}</p>
      </GlassCard>
    </button>
  );
});

/* ─── PDF Modal ─── */
const PdfModal = memo(function PdfModal({ url, filename, label, onClose }: {
  url: string; filename: string; label: string; onClose: () => void;
}) {
  const shareSupported = typeof navigator !== "undefined" && "share" in navigator;

  const handleShare = useCallback(async () => {
    try {
      if (shareSupported) await navigator.share({ title: label, url: window.location.origin + url });
      else await navigator.clipboard.writeText(window.location.origin + url);
    } catch {}
  }, [url, label, shareSupported]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col animate-fade"
      style={{ background: "rgba(4,4,4,0.93)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="flex items-center justify-between px-5 py-3 shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,.025)" }}>
        <div className="flex items-center gap-3 min-w-0">
          <Logo />
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] truncate">{label}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-4">
          {/* Share */}
          <button onClick={handleShare} title={shareSupported ? "Compartilhar" : "Copiar link"}
            className="w-8 h-8 flex items-center justify-center border border-white/8 text-white/35 hover:border-white/25 hover:text-white/75 transition-all duration-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
          {/* Download — green, consistent with DocCard */}
          <a href={url} download={filename} title="Download"
            className="w-8 h-8 flex items-center justify-center transition-all duration-200"
            style={{ border: `1px solid ${G}0.25)`, color: `${G}0.7)` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${G}0.6)`; (e.currentTarget as HTMLElement).style.color = GREEN; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${G}0.25)`; (e.currentTarget as HTMLElement).style.color = `${G}0.7)`; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
          {/* Close */}
          <button onClick={onClose} title="Fechar (Esc)"
            className="w-8 h-8 flex items-center justify-center border border-white/8 text-white/35 hover:border-white/25 hover:text-white/80 transition-all duration-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-3 md:p-5">
        <iframe src={`${url}#toolbar=0&navpanes=0&scrollbar=1`} className="w-full h-full border-0"
          style={{ background: "#fff" }} title={label} loading="lazy" />
      </div>
    </div>
  );
});

/* ─── Orbs ─── */
const Orbs = memo(function Orbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      <div className="absolute rounded-full" style={{ width: 640, height: 640, top: -220, left: -180, background: `radial-gradient(circle,${G}0.05) 0%,transparent 70%)` }} />
      <div className="absolute rounded-full" style={{ width: 520, height: 520, bottom: 80, right: -220, background: `radial-gradient(circle,${G}0.032) 0%,transparent 70%)` }} />
    </div>
  );
});

/* ─── StackSection ─── */
function StackSection({ lang, categories, heading }: {
  lang: Lang;
  categories: readonly { name: string; items: readonly string[] }[];
  heading: string;
}) {
  const { closest, stableSetRefs } = useClosestToCenter(categories.length);
  const [hovered, setHovered] = useState<number | null>(null);
  const activeIdx = hovered !== null ? hovered : closest;

  return (
    <Section id="stack">
      <div key={lang} className="animate-fade-slide">
        <SectionHeading>{heading}</SectionHeading>
        <div className="space-y-4">
          {categories.map((cat, i) => {
            const lit = activeIdx === i;
            const core = i === 0;
            return (
              <div key={cat.name} ref={stableSetRefs[i]}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <GlassCard lit={lit} className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3 transition-colors duration-300"
                    style={{ color: lit ? GREEN : `${G}0.6)` }}>
                    {cat.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const hasIcon = !!TECH_ICON[item];
                      return (
                        <span key={item}
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 border transition-all duration-300"
                          style={{
                            borderColor: lit ? (core ? `${G}0.5)` : `${G}0.2)`) : (core ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"),
                            color: lit ? (core ? GREEN : "rgba(255,255,255,0.8)") : (core ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"),
                            background: lit && core ? `${G}0.06)` : undefined,
                          }}>
                          {hasIcon && (
                            <span className="text-[13px] transition-colors duration-300"
                              style={{ color: lit ? `${G}0.9)` : (core ? `${G}0.7)` : "rgba(255,255,255,0.2)") }}>
                              <TechIcon name={item} />
                            </span>
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pdfModal, setPdfModal] = useState<{ url: string; filename: string; label: string } | null>(null);

  const t = CONTENT[lang];
  const navIds = useMemo(() => t.nav.map((n) => n.id), [t.nav]);
  const activeSection = useActiveSection(navIds);

  useEffect(() => {
    const update = rafThrottle(() => setScrolled(window.scrollY > 40));
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openPdf = useCallback((url: string, filename: string, label: string) => setPdfModal({ url, filename, label }), []);
  const closePdf = useCallback(() => setPdfModal(null), []);
  const toggleLang = useCallback(() => setLang((l) => (l === "pt" ? "en" : "pt")), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#e2e2e2] font-outfit relative">
      {pdfModal && <PdfModal {...pdfModal} onClose={closePdf} />}
      <Orbs />

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? { borderBottom: "1px solid rgba(255,255,255,.05)", background: "rgba(8,8,8,.92)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" } : {}}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero"><Logo /></a>
          <div className="hidden md:flex items-center gap-6">
            <div key={lang} className="flex items-center gap-1 animate-fade-slide">
              {t.nav.map(({ id, label }) => (
                <a key={id} href={`#${id}`}
                  className="font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 border transition-all duration-200"
                  style={activeSection === id
                    ? { borderColor: `${G}0.3)`, color: GREEN, background: `${G}0.05)` }
                    : { borderColor: "transparent", color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => { if (activeSection !== id) { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; } }}
                  onMouseLeave={(e) => { if (activeSection !== id) { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; } }}
                >
                  {label}
                </a>
              ))}
            </div>
            <LangToggle lang={lang} onToggle={toggleLang} />
          </div>
          <div className="flex md:hidden items-center gap-3">
            <LangToggle lang={lang} onToggle={toggleLang} />
            <button onClick={() => setMobileOpen((o) => !o)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] border border-white/8 hover:border-white/20 transition-all duration-200"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
              <span className={`block h-px w-4 bg-white/50 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px w-4 bg-white/50 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-white/50 transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden animate-fade" style={{ background: "rgba(8,8,8,.97)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <div key={lang} className="flex flex-col px-6 py-4 gap-1 animate-fade-slide">
              {t.nav.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={closeMobile}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] px-4 py-3 border transition-all duration-200"
                  style={activeSection === id
                    ? { borderColor: `${G}0.25)`, color: GREEN, background: `${G}0.05)` }
                    : { borderColor: "transparent", color: "rgba(255,255,255,0.4)" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10">

        {/* ── Hero ── */}
        <section id="hero" className="pt-36 pb-28 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_160px] gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: GREEN }}>Backend Java Developer</p>
              </div>
              <h1 className="font-fraunces font-light text-[clamp(3rem,8vw,5.5rem)] text-white leading-[1.02] tracking-tight mb-7">
                Pedro<br /><span className="italic text-white/65">Berçam</span>
              </h1>
              <p key={lang} className="animate-fade-slide text-white/45 text-base leading-relaxed max-w-md mb-10">{t.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects"
                  className="font-mono text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 transition-colors duration-200"
                  style={{ background: GREEN, color: "#000" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${G}0.85)`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = GREEN; }}>
                  {t.hero.cta_projects}
                </a>
                <a href="https://github.com/Bercam" target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 border transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${G}0.35)`; (e.currentTarget as HTMLElement).style.color = GREEN; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  {t.hero.cta_github}
                </a>
              </div>
            </div>

            {/* Hero right tech pills — hover green */}
            <div className="hidden md:flex flex-col gap-2 pt-2">
              {(["Java", "Spring Boot", "PostgreSQL", "Docker", "JUnit"] as const).map((item) => (
                <HeroPill key={item} item={item} />
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── About ── */}
        <Section id="about">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.about.heading}</SectionHeading>
            <GlassCard className="p-7">
              <p className="text-white/60 leading-relaxed text-[0.9375rem] mb-7 max-w-xl">{t.about.body}</p>
              <div className="border-t border-white/5 pt-5">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-3">{t.about.available}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.about.options.map((o) => (
                    <span key={o} className="font-mono text-[10px] tracking-wider px-3 py-1 border transition-all duration-200 hover:border-green-400/50 hover:text-green-400"
                      style={{ borderColor: `${G}0.25)`, color: GREEN }}>{o}</span>
                  ))}
                </div>
                <p className="font-mono text-[10px] text-white/30">{t.about.location}</p>
              </div>
            </GlassCard>
          </div>
        </Section>

        <Divider />

        {/* ── Stack ── */}
        <StackSection lang={lang} categories={t.stack.categories} heading={t.stack.heading} />

        <Divider />

        {/* ── Engineering ── */}
        <Section id="engineering">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.principles.heading}</SectionHeading>
            <GlassCard className="p-6">
              <div className="flex flex-wrap gap-3">
                {t.principles.items.map((item) => {
                  const repo = PRINCIPLE_REPO[item];
                  return repo ? (
                    <a key={item} href={repo} target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-[11px] pb-px border-b transition-all duration-200 cursor-pointer"
                      style={{ color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.1)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GREEN; (e.currentTarget as HTMLElement).style.borderColor = `${G}0.4)`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                      {item}
                      <span className="text-[9px] opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                  ) : (
                    <span key={item} className="font-mono text-[11px] text-white/45 border-b border-white/10 pb-px">{item}</span>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Divider />

        {/* ── Projects ── */}
        <Section id="projects">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.projects.heading}</SectionHeading>
            <div className="space-y-4">
              {t.projects.items.map((proj) => (
                <ProjectCard key={proj.name} {...proj} />
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Education ── */}
        <Section id="education">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.education.heading}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-4">
              <GlassCard className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: GREEN }}>{t.education.status}</p>
                <h3 className="font-fraunces text-[1.1rem] text-white/90 mb-2 leading-snug">{t.education.degree}</h3>
                <p className="font-mono text-[10px] text-white/30">{t.education.institution}</p>
              </GlassCard>
              <GlassCard className="p-6">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-4">{t.education.exp_heading}</p>
                <h3 className="font-fraunces text-[1.1rem] text-white/90 mb-1.5 leading-snug">{t.education.exp_title}</h3>
                <p className="font-mono text-[10px] mb-4" style={{ color: GREEN }}>{t.education.exp_company} · {t.education.exp_period}</p>
                <p className="text-white/40 text-sm leading-relaxed">{t.education.exp_desc}</p>
              </GlassCard>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Contact ── */}
        <Section id="contact">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.contact.heading}</SectionHeading>
            <GlassCard className="p-7 inline-block min-w-80">
              <h2 className="font-fraunces font-light text-2xl text-white/85 mb-1">{t.contact.subtitle}</h2>
              <p className="font-mono text-[10px] text-white/25 mb-7">Belo Horizonte, MG — Brazil</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Email",    value: "pedrohlsb@gmail.com",   href: "mailto:pedrohlsb@gmail.com" },
                  { label: "Phone",    value: "(31) 98409-9009",        href: "tel:+5531984099009" },
                  { label: "GitHub",   value: "github.com/Bercam",      href: "https://github.com/Bercam" },
                  { label: "LinkedIn", value: "linkedin.com/in/bercam", href: "https://www.linkedin.com/in/bercam" },
                ].map(({ label, value, href }) => (
                  <ContactRow key={label} label={label} value={value} href={href} />
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Divider />

        {/* ── Documents ── */}
        <Section id="documents">
          <div key={lang} className="animate-fade-slide">
            <SectionHeading>{t.docs.heading}</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-4">
              <DocCard label={t.docs.resume.label} desc={t.docs.resume.desc}
                onOpen={() => openPdf(t.docs.resume.url, t.docs.resume.filename, t.docs.resume.modalLabel)} />
              <DocCard label={t.docs.cover.label} desc={t.docs.cover.desc}
                onOpen={() => openPdf(t.docs.cover.url, t.docs.cover.filename, t.docs.cover.modalLabel)} />
            </div>
          </div>
        </Section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 py-8 px-6 mt-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Logo />
            <span className="font-mono text-[9px] text-white/18 uppercase tracking-[0.15em]">Backend Java Developer · 2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ─── HeroPill: hover → full green glow ─── */
function HeroPill({ item }: { item: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="flex items-center justify-end gap-1.5 px-3 py-1.5 border transition-all duration-250 cursor-default"
      style={{
        borderColor: hov ? `${G}0.4)` : "rgba(255,255,255,0.05)",
        background: hov ? `${G}0.05)` : "rgba(255,255,255,0.015)",
        boxShadow: hov ? `0 0 14px ${G}0.08)` : "none",
      }}
    >
      <span className="font-mono text-[10px] transition-colors duration-250"
        style={{ color: hov ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.22)" }}>{item}</span>
      <span className="text-[11px] transition-colors duration-250"
        style={{ color: hov ? `${G}0.9)` : "rgba(255,255,255,0.15)" }}><TechIcon name={item} /></span>
    </div>
  );
}

/* ─── ProjectCard: hover → full green glow ─── */
function ProjectCard({ name, description, tags, url }: {
  name: string; description: string; tags: readonly string[]; url: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <GlassCard lit={hov} hover className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2.5">
          <h3 className="font-fraunces text-[1.1rem] leading-snug transition-colors duration-300"
            style={{ color: hov ? GREEN : "rgba(255,255,255,0.9)" }}>{name}</h3>
          <span className="font-mono text-xs mt-0.5 shrink-0 transition-colors duration-300"
            style={{ color: hov ? `${G}0.55)` : "rgba(255,255,255,0.15)" }}>↗</span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider px-2 py-0.5 border transition-all duration-300"
              style={{
                borderColor: hov ? `${G}0.2)` : "rgba(255,255,255,0.06)",
                color: hov ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
              }}>
              {TECH_ICON[tag] && (
                <span className="text-[10px] transition-colors duration-300"
                  style={{ color: hov ? `${G}0.7)` : "rgba(255,255,255,0.2)" }}><TechIcon name={tag} /></span>
              )}
              {tag}
            </span>
          ))}
        </div>
      </GlassCard>
    </a>
  );
}

/* ─── ContactRow: all links hover green ─── */
function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  const [hov, setHov] = useState(false);
  const ext = href.startsWith("http");
  return (
    <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="flex items-center gap-5">
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20 w-14 shrink-0">{label}</span>
      <span className="text-sm transition-colors duration-200" style={{ color: hov ? GREEN : "rgba(255,255,255,0.5)" }}>{value}</span>
    </a>
  );
}
