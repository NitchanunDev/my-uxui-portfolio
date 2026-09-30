import { useEffect, useRef, useState } from "react";

// The prototype ships its own embed mode: "?embed=1" hides the desktop side
// panels it normally shows, makes its background transparent, drops its phone
// shadow and scales the phone to fit whatever viewport we give it. So we hand
// it a box and let it fit itself — no cropping or offset maths on our side.
// Its own fit is min(1, height / 864, width / 410), so 410x864 is the shape
// that wraps the phone with no slack — and that is exactly the aspect ratio we
// hold. At full size the phone stands 864px tall against a text column of about
// 330px, which left the folder 946px tall with a wide band of empty paper above
// and below the text. Capping the width at 351 scales the whole thing to 86%
// (351/410 and 740/864 are the same ratio, so it shrinks evenly), bringing the
// folder to roughly 820px so it fits a laptop screen, while the Thai copy inside
// the prototype stays comfortably readable. On phones the column is already
// narrower than this cap, so it changes nothing there.
const BOX_MAX_W = 351;
const BOX_ASPECT = "410 / 864";

export function LiveDemo({ src, title, accent, accentText, active = true }) {
  const hostRef = useRef(null);
  const [live, setLive] = useState(false);
  // On touch screens a drag over the iframe scrolls the prototype instead of
  // the page, so we keep it inert until the visitor taps in.
  const [armed, setArmed] = useState(() =>
    typeof window === "undefined" ? true : !window.matchMedia("(pointer: coarse)").matches,
  );

  // The panel stays in the layout so the folder can size itself, so the iframe
  // only loads once its tab is actually opened. Once loaded it stays mounted,
  // which keeps the prototype where you left it across tab switches.
  useEffect(() => {
    const host = hostRef.current;
    if (!host || live || !active) return;
    const observer = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setLive(true),
      { rootMargin: "300px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [live, active]);

  const embedSrc = `${src}${src.includes("?") ? "&" : "?"}embed=1`;

  return (
    <div
      ref={hostRef}
      className="relative w-full min-w-0 mx-auto"
      style={{ maxWidth: BOX_MAX_W, aspectRatio: BOX_ASPECT }}
    >
      {live ? (
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
          style={{ pointerEvents: armed ? "auto" : "none" }}
        />
      ) : (
        // Holds the phone's silhouette so the folder does not resize when the
        // demo finally loads. Percentage radii keep the corners round at any
        // width, the way a fixed 48px would not.
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ borderRadius: "12% / 6%", backgroundColor: `${accent}14` }}
        />
      )}

      {!armed && (
        <button
          type="button"
          onClick={() => setArmed(true)}
          className="absolute inset-0 flex items-end justify-center pb-8 bg-transparent"
        >
          {/* White on the pale decorative accent only reaches 2.9:1, so the
              pill takes the darker text shade of the same hue instead. */}
          <span
            className="font-body text-sm px-5 py-2.5 rounded-full text-white shadow-lg"
            style={{ backgroundColor: accentText ?? accent }}
          >
            Tap to try it
          </span>
        </button>
      )}
    </div>
  );
}
