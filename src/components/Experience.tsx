import Reveal from "@/components/Reveal";

const experiences = [
  {
    period: "Mai/2025 — atual",
    company: "Neoenergia Coelba",
    role: "Estágio em Análise de Dados",
    current: true,
    items: [
      "Desenvolvimento de dashboards interativos no Power BI para suporte à tomada de decisão.",
      "Criação de relatórios avançados em Excel integrados a bancos de dados.",
      "Automação de processos utilizando Python em rotinas de ETL, limpeza e integração de dados.",
      "Monitoramento e análise de KPIs com consultas SQL.",
      "Acompanhamento da execução de processos e das dependências entre bases de dados, apoiando a identificação de falhas operacionais.",
    ],
  },
  {
    period: "Abr/2023 — Ago/2023",
    company: "Projeção Cálculos Judiciais",
    role: "Estagiário",
    year: "2023",
    items: [
      "Coleta, organização e análise de dados.",
      "Elaboração de cálculos judiciais, planilhas e documentação técnica.",
      "Apoio no processamento e análise de informações.",
    ],
  },
  {
    period: "Jun/2021 — Dez/2021",
    company: "Drogaria Mendes",
    role: "Correspondente Bancário",
    year: "2021",
    items: [
      "Operações bancárias, atendimento ao cliente e suporte administrativo.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 rounded-t-[50px] bg-[#f1f1e8] text-[#102018]"
    >
      <div className="mx-auto max-w-[1216px] px-6 py-24 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0e8d50]">
            03 — Experiência
          </div>

          <h2 className="mt-5 max-w-[950px] text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Experiência que conecta{" "}
            <span className="text-[#0aa95a]">
              tecnologia à operação.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-black/10">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.05}>
              <article className="grid gap-4 border-b border-black/10 py-10 md:grid-cols-[220px_1fr]">
                <div className="font-extrabold text-[#49705c]">
                  {experience.period}
                </div>

                <div>
                  <div className="flex flex-col justify-between gap-5 sm:flex-row">
                    <div>
                      <h3 className="text-[30px] font-bold leading-tight">
                        {experience.company}
                      </h3>

                      <p className="mt-2 text-[#587061]">
                        {experience.role}
                      </p>
                    </div>

                    {experience.current ? (
                      <span className="h-fit w-fit rounded-full bg-[#0e9b56] px-3 py-2 text-xs font-bold text-white">
                        Atual
                      </span>
                    ) : (
                      <span className="text-xs text-[#688072]">
                        {experience.year}
                      </span>
                    )}
                  </div>

                  <ul className="mt-6 list-disc space-y-1 pl-5 leading-7 text-[#41584c]">
                    {experience.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}