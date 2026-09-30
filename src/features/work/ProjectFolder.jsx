import { useEffect, useRef, useState } from "react";
import { ProjectPage } from "./ProjectPage.jsx";

const PAPER = "#FFFDFB";
const EDGE = "rgba(43,31,45,0.12)";

export function ProjectFolder({ projects }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const listRef = useRef(null);

  // Three tab names do not fit across the narrowest phones, so the row
  // scrolls sideways — and its scrollbar is hidden to keep the paper-tab
  // look. That means a tab reached by arrow key, or simply the one already
  // selected, can sit off the edge with nothing to show it is there. This
  // nudges the row itself; it never touches the page scroll, so it cannot
  // yank the visitor down to the folder on load.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab) return;
    const listBox = list.getBoundingClientRect();
    const tabBox = tab.getBoundingClientRect();
    const margin = 12;
    if (tabBox.left < listBox.left + margin) {
      list.scrollLeft -= listBox.left + margin - tabBox.left;
    } else if (tabBox.right > listBox.right - margin) {
      list.scrollLeft += tabBox.right - (listBox.right - margin);
    }
  }, [active]);

  const move = (to) => {
    const next = (to + projects.length) % projects.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = {
      ArrowRight: () => move(active + 1),
      ArrowLeft: () => move(active - 1),
      Home: () => move(0),
      End: () => move(projects.length - 1),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  };

  return (
    <div>
      {/* paper tabs sticking out of the folder */}
      <div
        ref={listRef}
        role="tablist"
        aria-label="Projects"
        onKeyDown={onKeyDown}
        className="no-scrollbar flex items-end gap-0.5 sm:gap-1.5 px-1.5 sm:px-5 overflow-x-auto"
      >
        {projects.map((project, i) => {
          const selected = i === active;
          return (
            <button
              key={project.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`project-tab-${i}`}
              aria-selected={selected}
              aria-controls={`project-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`font-body relative flex-none rounded-t-xl border border-b-0 px-2.5 sm:px-5 transition-colors ${
                selected
                  ? "z-10 -mb-px pt-3.5 pb-4 text-[#2B1F2D]"
                  : "pt-2.5 pb-3 text-[#2B1F2D]/55 hover:text-[#2B1F2D]/80"
              }`}
              style={{
                backgroundColor: selected ? PAPER : "#F0E9EF",
                borderColor: selected ? EDGE : "rgba(43,31,45,0.08)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute left-2.5 right-2.5 sm:left-3 sm:right-3 top-0 h-[3px] rounded-b-full"
                style={{
                  backgroundColor: project.accent,
                  opacity: selected ? 1 : 0.35,
                }}
              />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                {project.tab ?? project.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* the folder itself — every page sits in the same grid cell so the
          folder keeps the height of the tallest one and never jumps */}
      <div
        className="grid rounded-b-2xl rounded-tr-2xl border p-6 sm:p-10"
        style={{ backgroundColor: PAPER, borderColor: EDGE }}
      >
        {projects.map((project, i) => {
          const selected = i === active;
          return (
            <div
              key={project.title}
              role="tabpanel"
              id={`project-panel-${i}`}
              aria-labelledby={`project-tab-${i}`}
              // On wide screens the inactive pages stay in the layout so they
              // keep the folder at the tallest page's height and it never
              // jumps; visibility:hidden also drops them from the tab order and
              // the accessibility tree. On phones the pages stack vertically and
              // the demo page is far taller than the others, so holding that
              // height would leave the short pages under a screenful of blank
              // paper — there we simply take them out of the flow.
              className={`[grid-area:1/1] ${selected ? "" : "hidden sm:block sm:invisible"}`}
            >
              <ProjectPage project={project} active={selected} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
