import { SKILLS } from "./skills.data.js";

export function Skills() {
  return (
    <section id="skills" className="border-t border-[#2B1F2D]/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20">
        <h2 className="font-display text-3xl mb-8 sm:mb-10">What I work with</h2>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <p className="font-body text-sm text-[#57755F] mb-3">{group.group}</p>
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
      </div>
    </section>
  );
}
