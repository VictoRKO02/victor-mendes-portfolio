import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    category: "Ingestão & Integração",
    title: "SQL • APIs • Python",
    description:
      "Extração, conexão de fontes, limpeza e preparação dos dados.",
  },
  {
    number: "02",
    category: "Processamento",
    title: "ETL/ELT • PySpark",
    description:
      "Transformação, padronização e processamento de dados.",
  },
  {
    number: "03",
    category: "Plataforma & Arquitetura",
    title: "Databricks • Lakehouse",
    description:
      "Data Warehouse, Data Lakehouse e modelagem dimensional.",
  },
  {
    number: "04",
    category: "Consumo & Decisão",
    title: "Power BI • DAX",
    description:
      "Dashboards, KPIs, análise e visualização para decisão.",
  },
];

const technologies = [
  "Power BI",
  "DAX",
  "Power Query",
  "SQL",
  "MySQL",
  "Python",
  "Pandas",
  "NumPy",
  "PySpark",
  "Spark SQL",
  "Databricks",
  "ETL",
  "ELT",
  "Data Warehouse",
  "Data Lakehouse",
  "Star Schema",
  "APIs REST",
  "JSON",
  "Git",
  "GitHub",
  "Django",
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
            02 — Stack
          </div>

          <h2 className="mt-5 max-w-[900px] text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Da origem do dado ao{" "}
            <span className="text-emerald-400">
              indicador de negócio.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className="contents">
                <article className="group min-h-[220px] rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-400/[0.04]">
                  <span className="text-[11px] font-extrabold text-emerald-400">
                    {step.number}
                  </span>

                  <small className="mt-8 block text-[9px] uppercase tracking-[0.11em] text-[#76867d]">
                    {step.category}
                  </small>

                  <h3 className="mt-2 text-[19px] font-bold leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#92a198]">
                    {step.description}
                  </p>
                </article>

                {index < steps.length - 1 && (
                  <div className="hidden place-items-center text-xl text-emerald-400/70 lg:grid">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[11px] text-[#aebbb3] transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:text-emerald-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}