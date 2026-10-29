"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

type Category = "Todos" | "IA & ML" | "Software" | "Dados" | "Visão computacional";
type Project = {
  index: string;
  category: Category;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  status?: string;
  links?: { label: string; href: string }[];
};

const filters: Category[] = ["Todos", "IA & ML", "Software", "Dados", "Visão computacional"];

// Itens existentes preservados e novos projetos adicionados a partir do currículo e portfólio.
const projects: Project[] = [
  {
    index: "01", category: "IA & ML", title: "ECHO — Tradução com IA",
    description: "Plataforma de tradução multilíngue com processamento no navegador. O fluxo integra captura de áudio, detecção de voz, transcrição e tradução com NLLB-200. O objetivo é ampliar a acessibilidade de palestras e conversas; LIBRAS é uma evolução planejada.",
    tags: ["Next.js", "TypeScript", "NLLB-200", "Transformers.js", "Web Workers"],
    status: "Protótipo funcional · em evolução", featured: true,
    links: [{ label: "Repositório", href: "https://github.com/VictoRKO02/Echo" }, { label: "Comprovante AWS SBG", href: "/documents/Comprovante_ECHO_AWS_SBG.pdf" }],
  },
  {
    index: "02", category: "IA & ML", title: "Iris ML — Classificação supervisionada",
    description: "Treinamento e comparação de KNN, Decision Tree e Random Forest no conjunto Iris, com divisão de dados, análise de acurácia, precision, recall, F1-score e matriz de confusão. Projeto reprodutível com código publicado.",
    tags: ["Python", "Scikit-learn", "KNN", "Random Forest", "Métricas de ML"],
    status: "Concluído", featured: true,
    links: [{ label: "Código e resultados", href: "https://github.com/VictoRKO02/Iris-ML" }, { label: "Comprovante AWS SBG", href: "/documents/Comprovante_Iris_ML_AWS_SBG.pdf" }],
  },
  {
    index: "03", category: "Visão computacional", title: "Chromatic Vision",
    description: "Prova de conceito para identificar, contar e localizar objetos por cor em imagens e webcam. Utiliza máscaras HSV, operações morfológicas, contornos e bounding boxes com coordenadas centrais.",
    tags: ["Python", "OpenCV", "NumPy", "HSV", "Computer Vision"],
    status: "Prova de conceito",
    links: [{ label: "Repositório", href: "https://github.com/VictoRKO02/Chromatic-Vision" }, { label: "Comprovante AWS SBG", href: "/documents/Comprovante_Chromatic_Vision_AWS_SBG.pdf" }],
  },
  {
    index: "04", category: "IA & ML", title: "Análise Preditiva de Acidentes",
    description: "Estudo de ocorrências rodoviárias na Bahia com dados públicos da PRF (2017–2025): limpeza, análise exploratória, visualizações e aplicação de Machine Learning para identificar padrões e estimar ocorrências.",
    tags: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"], status: "Projeto acadêmico",
  },
  {
    index: "05", category: "IA & ML", title: "Risco de surtos de dengue",
    description: "Case de ciência de dados que propõe a previsão de risco de surtos em municípios da Bahia com duas semanas de antecedência. Explora variáveis epidemiológicas e climáticas, Regressão Logística, Random Forest e recall como métrica prioritária.",
    tags: ["Regressão Logística", "Random Forest", "Feature Engineering", "Recall"], status: "Estudo de caso · LIAO",
  },
  {
    index: "06", category: "Dados", title: "Hub de Dados Corporativo",
    description: "Solução web em Django para centralização de dados corporativos, organização de arquivos estratégicos e integração com dashboards Power BI, apoiando acesso e governança das informações.",
    tags: ["Django", "Power BI", "Governança", "Integração"],
  },
  {
    index: "07", category: "Dados", title: "BI's Operacionais & Indicadores",
    description: "Dashboards para acompanhamento operacional, processos e indicadores, com análise de KPIs, medidas DAX e monitoramento de bases primárias e secundárias. Experiências corporativas sem exposição de dados confidenciais.",
    tags: ["Power BI", "DAX", "Power Query", "KPIs"],
  },
  {
    index: "08", category: "Dados", title: "Pipelines & ETL de Dados",
    description: "Rotinas de extração, transformação, limpeza e carga de dados com Python e SQL, conectando fontes a relatórios, análises e processos automatizados.",
    tags: ["Python", "SQL", "ETL / ELT", "Automação"],
  },
  {
    index: "09", category: "Dados", title: "Petshop Data Warehouse",
    description: "Projeto de engenharia de dados com PostgreSQL em Docker, ETL em Python, modelo dimensional com fatos e dimensões, testes automatizados e indicadores no Power BI.",
    tags: ["Python", "PostgreSQL", "Docker", "Pytest", "Power BI"],
    links: [{ label: "Repositório", href: "https://github.com/VictoRKO02/petshop-data-warehouse" }],
  },
  {
    index: "10", category: "Software", title: "Empório da Tatá — Full Stack",
    description: "Aplicação comercial com páginas de produtos, clientes, vendas e estoque. Implementação de frontend em Next.js e backend NestJS, com autenticação, Prisma e banco PostgreSQL.",
    tags: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"], status: "Em desenvolvimento",
  },
  {
    index: "11", category: "Software", title: "Plataforma de Energia Renovável",
    description: "Projeto Full Stack com mapas e ranking multicritério TOPSIS. Integra React, FastAPI, PostgreSQL/PostGIS, autenticação, contêineres Docker e testes de API.",
    tags: ["React", "FastAPI", "PostGIS", "TOPSIS", "Docker"], status: "Projeto acadêmico",
  },
  {
    index: "12", category: "Software", title: "Sistema Distribuído de Condomínios",
    description: "Aplicação para gestão de moradores, reservas e cobranças utilizando microsserviços e PostgreSQL, com programação paralela e testes de concorrência.",
    tags: ["Microsserviços", "PostgreSQL", "Concorrência"],
  },
  {
    index: "13", category: "Visão computacional", title: "Cimatlética Vision",
    description: "Experimentos de identificação de jogadores em imagens sintéticas: geração de datasets, processamento com OpenCV e treinamento de modelos CNN com TensorFlow, com evolução planejada para detecção de objetos.",
    tags: ["OpenCV", "TensorFlow", "CNN", "Dataset sintético"], status: "Experimento acadêmico",
  },
  {
    index: "14", category: "Software", title: "Axé Hero — Hardware & Software",
    description: "Jogo musical interativo com Arduino, LEDs NeoPixel, botões, buzzer e LCD, unindo programação e eletrônica embarcada.",
    tags: ["Arduino", "C++", "Hardware"],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos");
  const visibleProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projetos" className="scroll-mt-24">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">04 — Projetos</div>
          <h2 className="mt-5 text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Projetos que mostram{" "}<span className="text-emerald-400">tecnologia na prática.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#9eaba3]">
            Aplicações completas, experimentos de Machine Learning, visão computacional e soluções
            de dados. Os projetos públicos possuem links para código e documentação.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 ${
                activeFilter === filter
                  ? "border-emerald-400 bg-emerald-400 text-[#041109]"
                  : "border-white/10 bg-white/[0.03] text-[#bdcbc1] hover:border-emerald-300/35 hover:text-emerald-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#819087]" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.index} delay={(index % 2) * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">
            <p className="m-0 text-[#9eaba3]">Mais códigos, estudos e experimentos estão disponíveis no meu GitHub.</p>
            <a href="https://github.com/VictoRKO02?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-emerald-300/40">
              Ver GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
