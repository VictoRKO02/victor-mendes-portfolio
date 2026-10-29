import Reveal from "@/components/Reveal";

const education = [
  {
    date: "Conclusão prevista • Nov/2028",
    title: "Engenharia de Computação",
    institution: "Centro Universitário SENAI CIMATEC • Salvador, BA",
    detail: "Graduação em andamento",
  },
  {
    date: "Concluído • 2022",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Salvador — UNIFACS • Salvador, BA",
    detail: "Graduação concluída",
  },
  {
    date: "Set/2026 • 20h",
    title: "AWS Academy — Machine Learning Foundations",
    institution: "AWS Academy • Credencial verificável",
    detail: "Fundamentos de aprendizado de máquina",
    href: "https://www.credly.com/go/ynYN2nWP",
  },
  {
    date: "2026 • Projetos apresentados",
    title: "AWS Student Builder Group",
    institution: "SENAI CIMATEC",
    detail: "Submissões dos projetos ECHO, Iris ML e Chromatic Vision",
  },
  {
    date: "2024 • Projeto estudantil",
    title: "IEEE — Chromatic Manipulator",
    institution: "SENAI CIMATEC",
    detail: "Participação em iniciativa estudantil de tecnologia e visão computacional",
  },
  {
    date: "2025 • 240h",
    title: "Qualificação em Análise de Dados",
    institution: "SENAC • Salvador, BA",
    detail: "Análise de dados, Python e fundamentos analíticos",
  },
  {
    date: "2024 • 240h",
    title: "Programador Full Stack",
    institution: "SENAC • Lauro de Freitas, BA",
    detail: "Desenvolvimento web e sistemas",
  },
];

const languages = [
  {
    language: "Português",
    level: "Nativo",
  },
  {
    language: "Inglês",
    level: "Intermediário",
  },
  {
    language: "Espanhol",
    level: "Básico",
  },
];

export default function Education() {
  return (
    <section
      id="formacao"
      className="scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
            05 — Formação
          </div>

          <h2 className="mt-5 max-w-[900px] text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Formação contínua, com{" "}
            <span className="text-emerald-400">
              base técnica sólida.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 2) * 0.08}
            >
              <article className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.045] hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]">
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/[0.08]" />

                <div className="relative z-10">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
                    {item.date}
                  </div>

                  <h3 className="mt-7 text-[25px] font-bold transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[#b8c4bd] transition-colors duration-300 group-hover:text-[#d8e1dc]">
                    {item.institution}
                  </p>

                  <small className="mt-3 block text-[#7f8e85] transition-colors duration-300 group-hover:text-[#9cadA2]">
                    {item.detail}
                  </small>
                  {"href" in item && item.href && (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-white">
                      Validar credencial ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-base font-bold">Comprovantes dos projetos apresentados ao AWS Student Builder Group</h3>
            <p className="mt-2 text-sm leading-6 text-[#96a69c]">Documentação de submissão dos projetos de IA e visão computacional.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "ECHO", href: "/documents/Comprovante_ECHO_AWS_SBG.pdf" },
                { label: "Iris ML", href: "/documents/Comprovante_Iris_ML_AWS_SBG.pdf" },
                { label: "Chromatic Vision", href: "/documents/Comprovante_Chromatic_Vision_AWS_SBG.pdf" },
                { label: "AWS ML Foundations", href: "/documents/AWS_Machine_Learning_Foundations.pdf" },
              ].map((proof) => (
                <a key={proof.href} href={proof.href} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-bold text-emerald-300 transition hover:border-emerald-300/40 hover:text-white">
                  {proof.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 grid gap-6 rounded-[24px] border border-white/10 bg-white/[0.015] p-6 transition duration-300 hover:border-emerald-300/25 hover:bg-emerald-400/[0.025] md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-center">
            <span className="font-extrabold text-emerald-400">
              Idiomas
            </span>

            {languages.map((item) => (
              <div key={item.language}>
                <strong className="block">
                  {item.language}
                </strong>

                <small className="mt-1 block text-[#809087]">
                  {item.level}
                </small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}