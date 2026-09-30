import { ArrowUpRight } from "lucide-react";
import { ProjectMotif } from "./ProjectMotif.jsx";
import { LiveDemo } from "./LiveDemo.jsx";

export function ProjectPage({ project, active }) {
  // Most cards carry one flat `stack`. Mochi-TODO splits what the embedded
  // prototype actually runs from the stack its full build is planned on, so a
  // visitor who clicks the demo is not reading chips for a backend it has none
  // of. Planned chips are drawn dashed and dimmer, so the difference reads
  // without depending on the label being noticed.
  const stackGroups = project.stackGroups ?? [{ label: null, items: project.stack }];

  return (
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-14 items-center h-full">
      {project.demo ? (
        <LiveDemo
          src={project.demo}
          title={`${project.title} — interactive prototype`}
          accent={project.accent}
          accentText={project.accentText}
          active={active}
        />
      ) : (
        <div className="rounded-3xl aspect-[5/3] flex items-center justify-center p-8">
          <div
            className="w-full h-full rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${project.accent}14` }}
          >
            <div className="w-4/5 h-2/3">
              <ProjectMotif motif={project.motif} accent={project.accent} />
            </div>
          </div>
        </div>
      )}

      <div className="min-w-0">
        <p className="font-body text-sm" style={{ color: project.accentText }}>
          {project.role}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl mt-2 mb-3">{project.title}</h3>
        <p className="font-body text-[#4A3F4D] leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-col gap-3 mb-4">
          {stackGroups.map((group) => (
            <div key={group.label ?? "stack"}>
              {group.label && (
                <p className="font-body text-[11px] uppercase tracking-wide text-[#2B1F2D]/60 mb-1.5">
                  {group.label}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className={
                      "font-body text-xs px-3 py-1 rounded-full " +
                      (group.planned
                        ? "border border-dashed border-[#2B1F2D]/25 text-[#2B1F2D]/70"
                        : "border border-[#2B1F2D]/15 text-[#2B1F2D]/80")
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-body text-xs text-[#2B1F2D]/65">{project.meta}</span>
          <span className="flex items-center gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-body inline-flex items-center gap-1 text-sm font-medium hover:underline"
                style={{ color: project.accentText }}
              >
                Open demo <ArrowUpRight size={14} />
              </a>
            )}
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="font-body inline-flex items-center gap-1 text-sm font-medium hover:underline"
                style={{ color: project.accentText }}
              >
                View <ArrowUpRight size={14} />
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
