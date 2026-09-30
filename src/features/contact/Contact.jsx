import { Mail } from "lucide-react";
import { CONTACT } from "./contact.data.js";
import { Github, Linkedin } from "./icons.jsx";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[#2B1F2D]/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-24">
        <h2 className="font-display text-3xl sm:text-5xl max-w-lg leading-tight mb-8">
          Have a role or a project in mind? Let's talk.
        </h2>
        <a
          href={`mailto:${CONTACT.email}`}
          className="font-body inline-flex items-center gap-2 text-base sm:text-lg font-medium hover:underline mb-8 break-all"
        >
          <Mail size={20} className="shrink-0" /> {CONTACT.email}
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
      </div>
    </section>
  );
}
