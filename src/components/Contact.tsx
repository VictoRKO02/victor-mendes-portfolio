import Reveal from "@/components/Reveal";

const links = [
  {
    label: "E-mail",
    value: "victorbittencourt148@hotmail.com ↗",
    href: "mailto:victorbittencourt148@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/victormfb ↗",
    href: "https://www.linkedin.com/in/victormfb/",
  },
  {
    label: "GitHub",
    value: "VictoRKO02 ↗",
    href: "https://github.com/VictoRKO02?tab=repositories",
  },
  {
    label: "Telefone",
    value: "(74) 99811-5305 ↗",
    href: "tel:+5574998115305",
  },
  {
    label: "Currículo",
    value: "Visualizar PDF ↓",
    href: "/documents/Victor_Mendes_CV.pdf",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-[110px]">
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
            06 — Contato
          </div>

          <h2 className="mt-5 text-[clamp(40px,5vw,68px)] font-bold leading-[1.02] tracking-[-0.045em]">
            Software, dados e{" "}
            <span className="text-emerald-400">
              resultado.
            </span>
          </h2>

          <p className="mt-7 max-w-[560px] leading-7 text-[#95a49b]">
            Aberto a oportunidades e projetos em Engenharia de Software,
            Inteligência Artificial, Machine Learning e Dados.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("http") ||
                  link.href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.href.startsWith("http") ||
                  link.href.endsWith(".pdf")
                    ? "noreferrer"
                    : undefined
                }
                className="group flex flex-col gap-2 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-xs uppercase tracking-[0.1em] text-[#7e8d84]">
                  {link.label}
                </span>

                <strong className="text-[15px] transition-colors group-hover:text-emerald-400">
                  {link.value}
                </strong>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}