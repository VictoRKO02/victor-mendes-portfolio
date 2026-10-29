export type ProjectCategory = "ia" | "software" | "dados" | "visao";

export type Project = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  category: ProjectCategory;
  status: string;
  description: string;
  tech: string[];
  href?: string;
  linkLabel?: string;
  proofHref?: string;
};

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "ia", label: "IA / Machine Learning" },
  { id: "software", label: "Software" },
  { id: "dados", label: "Dados / BI" },
  { id: "visao", label: "Visão computacional" },
];

export const projects: Project[] = [
  {
    id: "echo",
    number: "01",
    name: "ECHO",
    eyebrow: "Tradução & acessibilidade",
    category: "ia",
    status: "Protótipo funcional · em evolução",
    description:
      "Plataforma web de tradução multilíngue com IA executada no navegador. Integra captura de áudio, processamento com Web Audio API e tradução com NLLB-200, pensando em experiências de comunicação mais acessíveis. O suporte a LIBRAS está no roadmap.",
    tech: ["Next.js", "TypeScript", "NLLB-200", "Transformers.js", "AudioWorklet", "WebAssembly"],
    href: "https://github.com/VictoRKO02/Echo",
    linkLabel: "Código no GitHub",
    proofHref: "/documents/Comprovante_ECHO_AWS_SBG.pdf",
  },
  {
    id: "iris",
    number: "02",
    name: "Iris ML",
    eyebrow: "Classificação supervisionada",
    category: "ia",
    status: "Concluído · repositório público",
    description:
      "Pipeline de dados, treinamento e avaliação para classificação de espécies. Comparação reprodutível de KNN, Decision Tree e Random Forest, com análise de acurácia, precision, recall, F1-score e matriz de confusão.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Joblib"],
    href: "https://github.com/VictoRKO02/Iris-ML",
    linkLabel: "Código e resultados",
    proofHref: "/documents/Comprovante_Iris_ML_AWS_SBG.pdf",
  },
  {
    id: "chromatic",
    number: "03",
    name: "Chromatic Vision",
    eyebrow: "Computer vision / OpenCV",
    category: "visao",
    status: "Prova de conceito concluída",
    description:
      "Reconhecimento e localização de objetos por cor a partir de imagens e webcam. Utiliza segmentação HSV, máscaras, operações morfológicas, contornos, bounding boxes e coordenadas centrais (X, Y).",
    tech: ["Python", "OpenCV", "NumPy", "HSV", "Bounding boxes"],
    href: "https://github.com/VictoRKO02/Chromatic-Vision",
    linkLabel: "Ver implementação",
    proofHref: "/documents/Comprovante_Chromatic_Vision_AWS_SBG.pdf",
  },
  {
    id: "dengue",
    number: "04",
    name: "Risco de surtos de dengue",
    eyebrow: "Case de ciência de dados / LIAO",
    category: "ia",
    status: "Estudo de caso · proposta técnica",
    description:
      "Proposta de classificação de risco para municípios baianos com horizonte de duas semanas. Estrutura de modelagem com dados epidemiológicos, variáveis climáticas, Regressão Logística, Random Forest e ênfase em recall.",
    tech: ["Machine Learning", "Regressão Logística", "Random Forest", "Feature engineering"],
  },
  {
    id: "acidentes",
    number: "05",
    name: "Análise preditiva de acidentes",
    eyebrow: "Data science / dados públicos",
    category: "ia",
    status: "Projeto acadêmico",
    description:
      "Tratamento e análise exploratória de dados rodoviários da PRF (2017–2025), com visualizações e aplicação de técnicas preditivas para investigar padrões de acidentes na Bahia.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    id: "petshop",
    number: "06",
    name: "Petshop Data Warehouse",
    eyebrow: "Pipelines e modelagem dimensional",
    category: "dados",
    status: "Projeto com repositório",
    description:
      "Pipeline ETL com Python e PostgreSQL em Docker, modelagem dimensional com tabelas fato e dimensão, testes automatizados e análise de indicadores no Power BI.",
    tech: ["Python", "PostgreSQL", "Docker", "Pytest", "Power BI"],
    href: "https://github.com/VictoRKO02/petshop-data-warehouse",
    linkLabel: "Ver repositório",
  },
  {
    id: "energia",
    number: "07",
    name: "Plataforma de energia renovável",
    eyebrow: "Full Stack / análise multicritério",
    category: "software",
    status: "Projeto acadêmico funcional",
    description:
      "Aplicação com mapas, indicadores e ranking TOPSIS. Integra interface React a API FastAPI e banco PostgreSQL/PostGIS, com autenticação, Docker e testes de backend.",
    tech: ["React", "FastAPI", "PostGIS", "TOPSIS", "Docker"],
  },
  {
    id: "emporio",
    number: "08",
    name: "Empório da Tatá",
    eyebrow: "Produto web / full stack",
    category: "software",
    status: "Em desenvolvimento",
    description:
      "Sistema comercial com páginas de produtos, clientes, vendas e estoque. Backend NestJS, persistência com Prisma e PostgreSQL e fluxos de cadastro e autenticação.",
    tech: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    id: "hub",
    number: "09",
    name: "Hub de Dados Corporativo",
    eyebrow: "Sistemas internos / BI",
    category: "dados",
    status: "Projeto corporativo",
    description:
      "Aplicação em Django para organizar arquivos e centralizar acesso a informações estratégicas e dashboards. Foco em integração, descoberta de dados e organização de conteúdos internos.",
    tech: ["Django", "Python", "Power BI", "ETL", "SQL"],
  },
  {
    id: "cimatletica",
    number: "10",
    name: "Cimatlética Vision",
    eyebrow: "Visão computacional / experimentação",
    category: "visao",
    status: "Experimento acadêmico",
    description:
      "Exploração de detecção de jogadores usando cenas sintéticas, geração de datasets, classificação com CNN e experimentos com detecção de objetos.",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN", "YOLO"],
  },
  {
    id: "monitoramento",
    number: "11",
    name: "BI de monitoramento operacional",
    eyebrow: "Observabilidade de processos",
    category: "dados",
    status: "Aplicação corporativa",
    description:
      "Painel de acompanhamento de execução de processos e dependências entre bases primárias e secundárias. Leitura operacional do estado atual para apoiar diagnóstico e correção de falhas.",
    tech: ["Power BI", "DAX", "SQL", "Indicadores", "Storytelling"],
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Inteligência artificial & ML",
    detail: "Do experimento à inferência",
    items: ["Python", "Scikit-learn", "KNN", "Decision Tree", "Random Forest", "Regressão Logística", "TensorFlow / CNN", "Transformers.js", "NLLB-200", "Avaliação de modelos"],
  },
  {
    index: "02",
    title: "Engenharia de software",
    detail: "Sistemas, interfaces e APIs",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "NestJS", "FastAPI", "Django", "APIs REST", "Prisma", "Git / GitHub"],
  },
  {
    index: "03",
    title: "Dados & engenharia",
    detail: "Ingestão, qualidade e análise",
    items: ["SQL", "PostgreSQL", "PostGIS", "Pandas", "NumPy", "ETL / ELT", "Power BI", "DAX", "Data Warehouse", "PySpark / Databricks"],
  },
  {
    index: "04",
    title: "Infraestrutura & ferramentas",
    detail: "Desenvolver, integrar, publicar",
    items: ["Docker", "GitHub Actions", "AWS Academy", "Web Workers", "Web Audio API", "WebAssembly", "OpenCV", "Linux", "Testes automatizados", "Swagger / OpenAPI"],
  },
];
