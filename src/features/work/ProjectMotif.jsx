export function ProjectMotif({ motif, accent }) {
  const common = { stroke: accent, fill: "none", strokeWidth: 1.6, strokeLinecap: "round" };
  if (motif === "pulse") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <path d="M0 40 H60 L75 12 L95 68 L112 40 H200" {...common} />
      </svg>
    );
  }
  if (motif === "graph") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <circle cx="40" cy="20" r="6" fill={accent} />
        <circle cx="150" cy="18" r="6" fill={accent} />
        <circle cx="100" cy="60" r="6" fill={accent} />
        <circle cx="30" cy="62" r="6" fill={accent} />
        <path d="M40 20 L100 60 M150 18 L100 60 M30 62 L100 60" {...common} />
      </svg>
    );
  }
  if (motif === "screens") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <rect x="18" y="10" width="46" height="60" rx="8" {...common} />
        <rect x="76" y="4" width="46" height="72" rx="8" stroke={accent} strokeWidth="2" fill="none" />
        <rect x="134" y="14" width="46" height="52" rx="8" {...common} />
      </svg>
    );
  }
  if (motif === "checklist") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        {[16, 36, 56].map((y) => (
          <g key={y}>
            <rect x="20" y={y} width="12" height="12" rx="3" {...common} />
            <path d={`M23 ${y + 6} l3 3 l6 -6`} {...common} />
            <line x1="44" y1={y + 6} x2="170" y2={y + 6} {...common} />
          </g>
        ))}
      </svg>
    );
  }
  // terminal
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <rect x="16" y="10" width="168" height="60" rx="6" {...common} />
      <path d="M32 34 L44 44 L32 54 M56 54 H80" {...common} />
    </svg>
  );
}
