export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-32">
      <svg
        className="pointer-events-none absolute -top-24 -right-24 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] opacity-70 blob-in"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path
          d="M300 60 C360 100 380 180 350 250 C320 320 240 360 170 340 C100 320 40 260 50 190 C60 120 130 60 200 50 C230 46 270 40 300 60 Z"
          fill="#C48B9F"
          opacity="0.25"
        />
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="font-body text-sm tracking-wide text-[#57755F] mb-4">
            UX/UI designer &amp; frontend developer, based in Bangkok
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] sm:leading-[1.05] mb-6">
            I build interfaces people actually enjoy using.
          </h1>
          <p className="font-body text-base sm:text-lg text-[#4A3F4D] max-w-xl leading-relaxed">
            I design the interface, then build it — Vue.js and Tailwind CSS are
            my daily tools. The real work is getting the small things right: the
            loading state, the empty state, the layout that still holds up on a
            small screen. Below is a look at what I've been building.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}
