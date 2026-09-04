type SkillCardProps = {
  index: string;
  title: string;
  description: string;
};

export default function SkillCard({
  index,
  title,
  description,
}: SkillCardProps) {
  return (
    <article className="group rounded-[22px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-400/[0.04]">
      <span className="text-xs font-bold text-emerald-400">
        {index}
      </span>

      <h3 className="mt-7 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#93a198]">
        {description}
      </p>
    </article>
  );
}