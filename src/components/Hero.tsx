"use client";

import { motion } from "motion/react";

const technologies = [
  "Power BI",
  "Python",
  "SQL",
  "Databricks",
  "PySpark",
];

const stats = [
  {
    title: "2025 — atual",
    description: "Neoenergia Coelba",
  },
  {
    title: "Power BI + SQL",
    description: "BI, KPIs e modelagem",
  },
  {
    title: "Python + PySpark",
    description: "ETL, automação e dados",
  },
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto grid min-h-[calc(100vh-83px)] max-w-[1280px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[70px] lg:px-8 lg:py-[70px]"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#16e07a]" />

          Salvador, BA • BI • DATA • AUTOMATION
        </div>

        <h1 className="mt-7 text-[clamp(52px,6.2vw,96px)] font-bold leading-[0.96] tracking-[-0.055em]">
          Transformo{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            dados
          </span>
          <br />
          em decisões,
          <br className="hidden xl:block" /> automações
          <br />
          e produtos{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "1px #ffffff",
            }}
          >
            úteis.
          </span>
        </h1>

        <p className="mt-7 max-w-[760px] text-base leading-[1.75] text-[#b8c5bd] sm:text-lg">
          Profissional de dados com formação em Análise e Desenvolvimento de
          Sistemas e Engenharia de Computação em andamento, atuando na conexão
          entre Business Intelligence, análise de dados, automação e
          arquiteturas modernas de dados.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-emerald-400 px-5 py-3.5 font-bold text-[#041109] shadow-[0_14px_40px_rgba(22,224,122,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(22,224,122,0.24)]"
          >
            Ver projetos
            <span>↓</span>
          </a>

          <a
            href="/documents/Victor_Mendes_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-[14px] border border-white/10 bg-white/[0.03] px-5 py-3.5 font-bold transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40"
          >
            Baixar currículo
          </a>

          <a
            href="mailto:victorbittencourt148@hotmail.com"
            className="rounded-[14px] border border-white/10 bg-white/[0.03] px-5 py-3.5 font-bold transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40"
          >
            Falar comigo
          </a>
        </div>

        <div className="mt-11 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title}>
              <strong className="block text-base font-bold">
                {stat.title}
              </strong>

              <span className="mt-1 block text-xs text-[#87958d]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="relative z-10 grid min-h-[600px] place-items-center"
      >
        <div className="relative min-h-[560px] w-full max-w-[480px] overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-7 shadow-[0_40px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-[65%] w-[70%] rounded-full bg-emerald-400/20 blur-[100px]" />

          <div className="relative z-10 flex items-center gap-2 text-[10px] tracking-[0.18em] text-[#b8c5bd]">
            <span className="h-[7px] w-[7px] rounded-full bg-emerald-400" />

            BI • ANALYTICS • DATA ENGINEERING
          </div>

          <div className="relative z-10 flex h-[210px] items-center text-[clamp(110px,12vw,150px)] font-bold leading-none tracking-[-0.12em]">
            V<span className="text-emerald-400">M</span>
          </div>

          <h2 className="relative z-10 text-[32px] font-bold leading-[1.05] tracking-[-0.03em]">
            Victor Mendes
            <br />
            Ferreira Bittencourt
          </h2>

          <p className="relative z-10 mt-3 text-[#91a097]">
            BI • Data Analytics • Data Engineering
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="absolute bottom-7 left-7 right-7 z-10 flex justify-between border-t border-white/10 pt-5 text-xs text-[#9baa9f]">
            <span>Engenharia de Computação</span>
            <span>2028</span>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-[100px] hidden rounded-xl border border-white/10 bg-[#102019] px-4 py-2.5 text-xs font-extrabold text-[#ff9c37] shadow-2xl lg:block"
        >
          DAX
        </motion.div>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-5 top-[230px] hidden rounded-xl border border-white/10 bg-[#102019] px-4 py-2.5 text-xs font-extrabold text-[#55b8ff] shadow-2xl lg:block"
        >
          LAKEHOUSE
        </motion.div>

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-6 hidden rounded-xl border border-white/10 bg-[#102019] px-4 py-2.5 text-xs font-extrabold text-[#7cffb7] shadow-2xl lg:block"
        >
          PYSPARK
        </motion.div>
      </motion.div>
    </section>
  );
}