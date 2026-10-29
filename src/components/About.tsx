import SkillCard from "@/components/SkillCard";

const skills = [
  {
    index: "01",
    title: "Engenharia de Software",
    description:
      "Next.js, React, TypeScript, NestJS, FastAPI, Django, APIs REST, Prisma, PostgreSQL, testes e automações.",
  },
  {
    index: "02",
    title: "Inteligência Artificial & ML",
    description:
      "Scikit-learn, KNN, Decision Tree, Random Forest, Regressão Logística, Transformers, LLMs, avaliação de modelos e OpenCV.",
  },
  {
    index: "03",
    title: "Dados, BI & Arquitetura",
    description:
      "Python, SQL, Pandas, NumPy, ETL/ELT, PySpark, Databricks, Data Warehouse, Lakehouse, Star Schema, Power BI e DAX.",
  },
  {
    index: "04",
    title: "Infraestrutura & Integração",
    description:
      "Docker, Git/GitHub, Linux, AWS Academy, integração de sistemas, Web Workers, Web Audio API e automações Python.",
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
            software, IA e dados.
          </span>
        </h2>

        <div className="mt-8 max-w-[880px] space-y-5 text-base leading-8 text-[#a8b5ad] sm:text-[17px]">
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e curso Engenharia de
            Computação no SENAI CIMATEC. Atuo com análise de dados na Neoenergia Coelba,
            conectando Business Intelligence, automação e engenharia de dados para
            transformar bases e processos em informações confiáveis, indicadores claros
            e soluções próximas da operação e da tomada de decisão.
          </p>
          <p>
            Trabalho com Power BI, DAX, Power Query, SQL, Python e ETL/ELT. Também
            desenvolvo conhecimentos e projetos envolvendo PySpark, Databricks,
            Data Warehouse, Data Lakehouse, modelagem dimensional e integração de dados.
            Essa base analítica complementa minha experiência com desenvolvimento de
            aplicações, serviços e APIs.
          </p>
          <p>
            Em inteligência artificial, desenvolvo projetos para experimentar e aplicar
            modelos na prática: o ECHO, plataforma de tradução com modelos de linguagem;
            o Iris ML, que compara algoritmos de aprendizado supervisionado; e o
            Chromatic Vision, voltado ao reconhecimento de objetos com OpenCV. Gosto
            de entender o problema, construir a solução e avaliar seu funcionamento.
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
