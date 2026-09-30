import { Header } from "./features/navigation/Header.jsx";
import { Hero } from "./features/hero/Hero.jsx";
import { Work } from "./features/work/Work.jsx";
import { Skills } from "./features/skills/Skills.jsx";
import { Contact } from "./features/contact/Contact.jsx";

export default function Portfolio() {
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
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* The header is fixed and 65px tall, so an anchor jump would otherwise
           land a section's heading underneath it. Applied to every section that
           carries an id, so a section added later is covered too. */
        section[id] { scroll-margin-top: 80px; }
      `}</style>

      <Header />

      {/* Screen readers offer a "jump to main content" move that looks for this
          landmark. Without it the only way past the nav is to listen through it
          on every page visit. */}
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-[#2B1F2D]/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 font-body text-xs text-[#2B1F2D]/65">
          Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
