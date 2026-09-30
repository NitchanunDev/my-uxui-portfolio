import { PROJECTS } from "./projects.data.js";
import { ProjectFolder } from "./ProjectFolder.jsx";

export function Work() {
  return (
    <section id="work" className="pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="font-display text-3xl mb-2">Selected work</h2>
        <p className="font-body text-[#2B1F2D]/60 mb-6">A few projects that show how I think and build.</p>
        <ProjectFolder projects={PROJECTS} />
      </div>
    </section>
  );
}
