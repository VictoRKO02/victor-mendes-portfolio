"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07110d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#topo"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/20 to-sky-400/10 font-bold">
            <span>
              V<span className="text-emerald-400">M</span>
            </span>
          </div>

          <span className="hidden text-[15px] font-extrabold sm:block">
            Victor Mendes
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[#c9d2cc] lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-emerald-300"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/documents/Victor_Mendes_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 hover:border-emerald-300/40 sm:block"
          >
            Currículo ↓
          </a>

          <a
            href="https://www.linkedin.com/in/victormfb/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 hover:border-emerald-300/40 xl:block"
          >
            LinkedIn ↗
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
          >
            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 3.5 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 rounded-full bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: -45, y: -3.5 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-5 rounded-full bg-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-[#07110d]/95 lg:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-sm text-zinc-300 transition-colors last:border-none hover:text-emerald-400"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href="/documents/Victor_Mendes_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold"
                >
                  Currículo ↓
                </a>

                <a
                  href="https://www.linkedin.com/in/victormfb/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}