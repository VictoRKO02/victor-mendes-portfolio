import SkillCard from "@/components/SkillCard";

const skills = [
  {
    index: "01",
    title: "BI & Analytics",
    description:
      "Power BI, DAX, Power Query, Excel, KPIs, Data Visualization, Storytelling e análise exploratória.",
  },
  {
    index: "02",
    title: "Data Engineering",
    description:
      "Python, PySpark, Spark SQL, Databricks, ETL/ELT, APIs REST, JSON e integração de dados.",
  },
  {
    index: "03",
    title: "Arquitetura de Dados",
    description:
      "Data Warehouse, Data Lakehouse, modelagem dimensional, Star Schema, qualidade e governança de dados.",
  },
  {
    index: "04",
    title: "Software & Automação",
    description:
      "Django, HTML, CSS, JavaScript, Git/GitHub, automações Python e integração entre sistemas.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-6 py-24 lg:grid-cols-[0.32fr_1fr] lg:px-8 lg:py-[110px]"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
          01 — Sobre
        </span>
      </div>

      <div>
        <h2 className="max-w-4xl text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
          Perfil híbrido entre{" "}
          <span className="text-emerald-400">
            negócio, dados e tecnologia.
          </span>
        </h2>

        <div className="mt-8 max-w-[880px] space-y-5 text-base leading-8 text-[#a8b5ad] sm:text-[17px]">
          <p>
            Minha trajetória combina análise de dados, Business Intelligence,
            automação e desenvolvimento de software. Transformo bases e
            processos em informações confiáveis, indicadores claros e soluções
            que aproximam tecnologia da operação e da tomada de decisão.
          </p>

          <p>
            Atuo com Power BI, DAX, Power Query, SQL, Python e ETL/ELT, além de
            conhecimentos e experiência com PySpark, Databricks, Data Warehouse,
            Data Lakehouse, modelagem dimensional e integração de dados.
          </p>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.index}
              index={skill.index}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}