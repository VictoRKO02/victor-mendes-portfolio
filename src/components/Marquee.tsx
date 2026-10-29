const technologies = [
  "PYTHON", "TYPESCRIPT", "NEXT.JS", "NESTJS", "SCIKIT-LEARN", "MACHINE LEARNING",
  "OPEN CV", "NLLB-200", "POSTGRESQL", "DOCKER", "POWER BI", "SQL", "AWS", "ETL / ELT",
];

export default function Marquee() {
  const items = [...technologies, ...technologies];

  return (
    <section
      aria-label="Competências principais"
      className="relative z-10 overflow-hidden border-y border-white/10 bg-[#0a1510]"
    >
      <div className="marquee-track">
        {items.map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="px-4 text-sm font-semibold tracking-[0.08em] text-zinc-200">
              {technology}
            </span>

            <span className="px-2 text-emerald-400">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}