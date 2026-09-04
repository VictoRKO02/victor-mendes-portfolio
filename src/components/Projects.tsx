import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

const projects = [
  {
    index: "01",
    category: "Dados & Sistemas",
    title: "Hub de Dados Corporativo",
    description:
      "Solução web em Django para centralização de dados corporativos, organização de arquivos estratégicos e integração com dashboards Power BI, apoiando acesso, compartilhamento e governança das informações.",
    tags: ["Django", "Power BI", "Governança", "Integração"],
    featured: true,
  },
  {
    index: "02",
    category: "Business Intelligence",
    title: "BI's Operacionais & Indicadores",
    description:
      "Dashboards voltados ao acompanhamento operacional, workflows e indicadores, incluindo análises regulatórias e construção de medidas para apoiar leitura executiva e tática.",
    tags: ["Power BI", "DAX", "Power Query", "KPIs"],
  },
  {
    index: "03",
    category: "Data Engineering",
    title: "Pipelines & ETL de Dados",
    description:
      "Rotinas de extração, transformação, limpeza e carga de dados com Python e SQL, conectando fontes corporativas a relatórios, análises e processos automatizados.",
    tags: ["Python", "SQL", "ETL / ELT", "Automação"],
  },
  {
    index: "04",
    category: "Data Science",
    title: "Análise Preditiva de Acidentes",
    description:
      "Projeto com dados reais da PRF entre 2017 e 2025, envolvendo limpeza, análise exploratória, visualização e Machine Learning para identificar padrões e estimar ocorrências de acidentes na Bahia.",
    tags: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    index: "05",
    category: "Sistemas",
    title: "Sistema Distribuído de Condomínios",
    description:
      "Aplicação web com microsserviços, programação paralela e PostgreSQL para gestão de moradores, reservas e cobranças, incluindo testes de concorrência e disponibilidade.",
    tags: ["Microsserviços", "PostgreSQL", "Concorrência"],
  },
  {
    index: "06",
    category: "Hardware & Software",
    title: "Axé Hero",
    description:
      "Jogo musical inspirado em Guitar Hero, combinando Arduino, LEDs NeoPixel, botões, buzzer e LCD para criar uma experiência física e interativa.",
    tags: ["Arduino", "C++", "Hardware"],
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
            04 — Projetos
          </div>

          <h2 className="mt-5 text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Projetos que mostram{" "}
            <span className="text-emerald-400">
              dados na prática.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.index}
              delay={(index % 2) * 0.08}
            >
              <ProjectCard
                index={project.index}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                featured={project.featured}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">
            <p className="m-0 text-[#9eaba3]">
              Mais códigos, estudos e experimentos estão disponíveis no meu GitHub.
            </p>

            <a
              href="https://github.com/VictoRKO02?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-emerald-300/40"
            >
              Ver GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}