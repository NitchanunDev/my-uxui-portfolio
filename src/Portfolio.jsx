import React, { useState } from "react";
import { Mail, ArrowUpRight, Menu, X } from "lucide-react";

// lucide-react dropped brand/logo icons (Github, Linkedin) from its default set,
// so these are inlined as plain SVGs sized to match the lucide icon API.
function Github({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.25 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.65 5.32-5.18 5.6.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}
function Linkedin({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/**
 * Portfolio — single-file React component
 * ------------------------------------------------
 * Things to personalize before shipping:
 *  - CONTACT.email / linkedin (placeholders below)
 *  - PROJECTS[].link — swap "#" for live demo / repo URLs
 *  - Copy in <Hero /> if you want a different framing
 */

const CONTACT = {
  email: "your.email@example.com", // TODO: replace with your real email
  github: "https://github.com/Cha-Rin",
  linkedin: "https://linkedin.com/in/your-profile", // TODO: replace
};

const PROJECTS = [
  {
    title: "Agnos Health — Real-Time Patient Intake",
    role: "Frontend Developer",
    description:
      "Built the patient intake flow for a healthcare platform, with live status updates between staff and patients powered by websockets. Shipped as a production feature, not a demo.",
    stack: ["Next.js 14", "Socket.io", "MongoDB", "Tailwind CSS"],
    meta: "Deployed — Vercel & Render",
    link: "#",
    accent: "#C48B9F",
    motif: "pulse",
  },
  {
    title: "MochiWorks — Multi-Agent AI Dashboard",
    role: "Designer & Developer",
    description:
      "A control surface for coordinating multiple AI agents at once — designed and iterated on the interaction model directly, informed by hands-on work with Claude Code CLI workflows and the RCTCF prompting framework.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    meta: "In progress",
    link: "#",
    accent: "#7C9885",
    motif: "graph",
  },
  {
    title: "Mochi Quest — Mobile RPG UI System",
    role: "UI/UX Designer",
    description:
      "A complete design system for a mobile RPG: 48 screens taken from wireframe to a fully interactive prototype, built with a Figma MCP integration in the loop.",
    stack: ["Figma", "Design Systems", "Prototyping"],
    meta: "48 screens · interactive prototype",
    link: "#",
    accent: "#B08968",
    motif: "screens",
  },
  {
    title: "Mochi-TODO",
    role: "Full-Stack Developer",
    description:
      "A full-stack to-do app built end to end — from schema to the last pixel of the UI — as a personal exploration of the Vue + Node stack.",
    stack: ["Vue 3", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    meta: "Personal project",
    link: "#",
    accent: "#8896C9",
    motif: "checklist",
  },
  {
    title: "Senior Project",
    role: "Full-Stack Developer",
    description:
      "Capstone project pairing a Vue 3 + Vite frontend with a Node/Express + MySQL backend, covering the full stack from database design to deployment-ready build tooling.",
    stack: ["Vue 3", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    meta: "github.com/Cha-Rin/Senior-Project",
    link: "https://github.com/Cha-Rin/Senior-Project",
    accent: "#9B8AA6",
    motif: "terminal",
  },
];

const SKILLS = [
  {
    group: "Interfaces",
    items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Ant Design"],
  },
  {
    group: "Server & Data",
    items: ["Node.js", "MySQL", "Socket.io"],
  },
  {
    group: "Craft & Tooling",
    items: ["Figma", "UI/UX Design", "Claude Code", "AI-assisted development"],
  },
];

function ProjectMotif({ motif, accent }) {
  const common = { stroke: accent, fill: "none", strokeWidth: 1.6, strokeLinecap: "round" };
  if (motif === "pulse") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <path d="M0 40 H60 L75 12 L95 68 L112 40 H200" {...common} />
      </svg>
    );
  }
  if (motif === "graph") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <circle cx="40" cy="20" r="6" fill={accent} />
        <circle cx="150" cy="18" r="6" fill={accent} />
        <circle cx="100" cy="60" r="6" fill={accent} />
        <circle cx="30" cy="62" r="6" fill={accent} />
        <path d="M40 20 L100 60 M150 18 L100 60 M30 62 L100 60" {...common} />
      </svg>
    );
  }
  if (motif === "screens") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <rect x="18" y="10" width="46" height="60" rx="8" {...common} />
        <rect x="76" y="4" width="46" height="72" rx="8" stroke={accent} strokeWidth="2" fill="none" />
        <rect x="134" y="14" width="46" height="52" rx="8" {...common} />
      </svg>
    );
  }
  if (motif === "checklist") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        {[16, 36, 56].map((y) => (
          <g key={y}>
            <rect x="20" y={y} width="12" height="12" rx="3" {...common} />
            <path d={`M23 ${y + 6} l3 3 l6 -6`} {...common} />
            <line x1="44" y1={y + 6} x2="170" y2={y + 6} {...common} />
          </g>
        ))}
      </svg>
    );
  }
  // terminal
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <rect x="16" y="10" width="168" height="60" rx="6" {...common} />
      <path d="M32 34 L44 44 L32 54 M56 54 H80" {...common} />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-10 pt-28 pb-24 sm:pt-36 sm:pb-32">
      <svg
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] opacity-70 blob-in"
        viewBox="0 0 400 400"
      >
        <path
          d="M300 60 C360 100 380 180 350 250 C320 320 240 360 170 340 C100 320 40 260 50 190 C60 120 130 60 200 50 C230 46 270 40 300 60 Z"
          fill="#C48B9F"
          opacity="0.25"
        />
      </svg>
      <div className="relative max-w-3xl">
        <p className="font-body text-sm tracking-wide text-[#7C9885] mb-4">Frontend & full-stack developer, based in Bangkok</p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-6">
          I build interfaces people actually enjoy using.
        </h1>
        <p className="font-body text-lg text-[#4A3F4D] max-w-xl leading-relaxed">
          React, Vue, and TypeScript are my daily tools — but the real work is
          getting the small interactions right: the loading state, the empty
          state, the moment something updates in real time. Below is a look
          at what I've been building.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="font-body inline-flex items-center gap-2 rounded-full bg-[#2B1F2D] text-[#F7F3F6] px-6 py-3 text-sm font-medium hover:bg-[#4A3F4D] transition-colors"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="font-body inline-flex items-center gap-2 rounded-full border border-[#2B1F2D]/20 px-6 py-3 text-sm font-medium hover:border-[#2B1F2D]/50 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <div className={`grid sm:grid-cols-2 gap-8 sm:gap-14 items-center py-12 border-t border-[#2B1F2D]/10 ${reversed ? "sm:[direction:rtl]" : ""}`}>
      <div style={{ direction: "ltr" }} className="rounded-3xl aspect-[5/3] flex items-center justify-center p-8" >
        <div
          className="w-full h-full rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${project.accent}14` }}
        >
          <div className="w-4/5 h-2/3">
            <ProjectMotif motif={project.motif} accent={project.accent} />
          </div>
        </div>
      </div>
      <div style={{ direction: "ltr" }}>
        <p className="font-body text-sm" style={{ color: project.accent }}>
          {project.role}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl mt-2 mb-3">{project.title}</h3>
        <p className="font-body text-[#4A3F4D] leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-body text-xs px-3 py-1 rounded-full border border-[#2B1F2D]/15 text-[#2B1F2D]/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-[#2B1F2D]/50">{project.meta}</span>
          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="font-body inline-flex items-center gap-1 text-sm font-medium hover:underline"
              style={{ color: project.accent }}
            >
              View <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 py-20 border-t border-[#2B1F2D]/10">
      <h2 className="font-display text-3xl mb-10">What I work with</h2>
      <div className="grid sm:grid-cols-3 gap-10">
        {SKILLS.map((group) => (
          <div key={group.group}>
            <p className="font-body text-sm text-[#7C9885] mb-3">{group.group}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-body text-sm px-3 py-1.5 rounded-full bg-[#2B1F2D]/[0.04] text-[#2B1F2D]/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 py-24 border-t border-[#2B1F2D]/10">
      <h2 className="font-display text-4xl sm:text-5xl max-w-lg leading-tight mb-8">
        Have a role or a project in mind? Let's talk.
      </h2>
      <a
        href={`mailto:${CONTACT.email}`}
        className="font-body inline-flex items-center gap-2 text-lg font-medium hover:underline mb-8"
      >
        <Mail size={20} /> {CONTACT.email}
      </a>
      <div className="flex gap-4">
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#2B1F2D]/20 p-3 hover:border-[#2B1F2D]/50 transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#2B1F2D]/20 p-3 hover:border-[#2B1F2D]/50 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3F6] text-[#2B1F2D]">
      <style>{`
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body { font-family: 'Work Sans', system-ui, sans-serif; }
        @keyframes blob-in { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .blob-in { animation: blob-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .blob-in { animation: none; }
        }
      `}</style>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-[#F7F3F6]/80 border-b border-[#2B1F2D]/10">
        <div className="flex items-center justify-between px-6 sm:px-10 h-16">
          <span className="font-display text-lg">Portfolio</span>
          <nav className="hidden sm:flex gap-8 font-body text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#C48B9F] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="sm:hidden flex flex-col gap-1 px-6 pb-4 font-body text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <Hero />

      <section id="work" className="px-6 sm:px-10 pb-8">
        <h2 className="font-display text-3xl mb-2">Selected work</h2>
        <p className="font-body text-[#2B1F2D]/60 mb-4">A few projects that show how I think and build.</p>
        <div>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      <Skills />
      <Contact />

      <footer className="px-6 sm:px-10 py-8 border-t border-[#2B1F2D]/10 font-body text-xs text-[#2B1F2D]/50">
        Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
