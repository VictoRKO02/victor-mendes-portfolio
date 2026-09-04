type ProjectCardProps = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

export default function ProjectCard({
  index,
  category,
  title,
  description,
  tags,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/10 p-7 pb-24 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 ${
        featured
          ? "bg-gradient-to-br from-[#0c2c1d] to-[#0d1913]"
          : "bg-gradient-to-br from-[#0e1c15] to-[#0a1510]"
      }`}
    >
      <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-emerald-400/[0.06] blur-[80px]" />

      <div className="relative z-10">
        <span className="text-xs text-[#647269]">
          {index}
        </span>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-2 text-[11px] text-emerald-300">
            {category}
          </span>
        </div>

        <h3 className="mt-4 text-[28px] font-bold tracking-[-0.025em]">
          {title}
        </h3>

        <p className="mt-4 max-w-[580px] text-sm leading-7 text-[#9eaba3]">
          {description}
        </p>
      </div>

      <div className="absolute bottom-7 left-7 right-7 z-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}