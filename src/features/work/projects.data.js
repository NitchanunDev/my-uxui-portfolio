// Order is the order of the folder tabs, and the first entry is the one the
// folder opens on. Mochi-TODO leads because it is the only card a visitor can
// play with on the spot, and because it shows the design work rather than
// describing it.
export const PROJECTS = [
  {
    title: "Mochi-TODO",
    tab: "Mochi-TODO",
    role: "Designer & Frontend Developer",
    description:
      "A Thai-language app I designed and built for daily tasks and habits, with separate study and work modes that reshape the categories and the wording throughout. Swipe a card right to finish it, left to push it to tomorrow. Habit streaks forgive one missed day, the calendar files new entries by keyword, and there is an urgent-vs-important board, a Pomodoro timer and a weekly summary. The demo below is the front-end prototype and saves to your own browser.",
    stackGroups: [
      {
        label: "Running in the prototype",
        items: ["React", "Canvas API", "Web Notifications", "localStorage"],
      },
      {
        label: "Planned full-stack build",
        planned: true,
        items: ["Vue 3", "Tailwind CSS", "Node.js", "Express", "MySQL"],
      },
    ],
    meta: "In progress · Thai UI · playable prototype below",
    link: "#",
    demo: "/demos/mochi-todo.html",
    // `accent` tints decoration — the tab bar, the motif, the demo placeholder —
    // where nothing has to be read. `accentText` is the same hue taken dark
    // enough to clear WCAG AA (4.5:1) as small text, for the role line and the
    // links. Keeping them apart means fixing readability does not flatten the
    // palette.
    accent: "#8896C9",
    accentText: "#6370A6",
    motif: "checklist",
  },
  {
    title: "Senior Project — Appointment & Document Tracking System",
    tab: "Senior Project",
    role: "Designer & Full-Stack Developer",
    description:
      "Capstone project at Mae Fah Luang University: an appointment and document tracking system. The work started with the people who would use it — interviews and requirements first, then the user flows, then the screens in Figma, with a colour, type and component set to keep the system consistent. I then built what I had designed: a Vue.js + Tailwind CSS frontend on a Node.js + MySQL backend, through to a working, deployable build.",
    stack: ["Figma", "HTML5", "CSS3", "JavaScript", "Vue.js", "Tailwind CSS", "Node.js", "MySQL"],
    meta: "Jan – Dec 2025 · Capstone project",
    link: "https://github.com/Cha-Rin/Senior-Project",
    accent: "#9B8AA6",
    accentText: "#7D6D87",
    motif: "terminal",
  },
  {
    title: "MochiWorks — Multi-Agent AI Dashboard",
    tab: "MochiWorks",
    role: "Designer & Developer",
    description:
      "A control surface for coordinating multiple AI agents at once — designed and iterated on the interaction model directly, informed by hands-on work with Claude Code CLI workflows and the RCTCF prompting framework.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    meta: "In progress — currently designing",
    link: "#",
    accent: "#7C9885",
    accentText: "#57755F",
    motif: "graph",
  },
];
