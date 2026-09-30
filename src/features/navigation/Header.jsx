import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./navLinks.data.js";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-[#F7F3F6]/80 border-b border-[#2B1F2D]/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 sm:px-10 h-16">
        <span className="font-display text-lg">Portfolio</span>
        <nav className="hidden sm:flex gap-8 font-body text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#C48B9F] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        {/* The icon is only 20px, which left the whole button a 20x20 target.
            p-3 pads it out to 44x44, and the matching negative margin pulls it
            back so the icon still sits on the same line as the container edge.
            aria-expanded is what tells a screen reader whether the menu it
            controls is currently open. */}
        <button
          className="sm:hidden -mr-3 p-3"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="sm:hidden mx-auto max-w-7xl flex flex-col gap-1 px-6 pb-4 font-body text-sm"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              // py-3 takes each row to 44px tall, the minimum comfortable tap
              // target; py-2 left them at 36px.
              className="py-3"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
