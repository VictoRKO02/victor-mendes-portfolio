"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  {
    label: "Sobre",
    href: "#sobre",
    id: "sobre",
  },
  {
    label: "Stack",
    href: "#stack",
    id: "stack",
  },
  {
    label: "Experiência",
    href: "#experiencia",
    id: "experiencia",
  },
  {
    label: "Projetos",
    href: "#projetos",
    id: "projetos",
  },
  {
    label: "Formação",
    href: "#formacao",
    id: "formacao",
  },
  {
    label: "Contato",
    href: "#contato",
    id: "contato",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      /*
       * Muda a aparência do Header
       * depois que o usuário desce 80px.
       */
      setIsScrolled(window.scrollY > 80);

      /*
       * Adicionamos um pequeno offset porque
       * o Header fica fixo no topo.
       */
      const scrollPosition = window.scrollY + 180;

      let currentSection = "";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        border-b
        backdrop-blur-xl
        transition-all
        duration-300

        ${
          isScrolled
            ? `
              border-white/10
              bg-[#07110d]/95
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
            `
            : `
              border-white/[0.04]
              bg-[#07110d]/75
            `
        }
      `}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-8">
        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#topo"
          onClick={() => {
            setActiveSection("");
            closeMenu();
          }}
          className="group flex items-center gap-3"
          aria-label="Voltar ao início"
        >
          <div
            className="
              grid
              h-[42px]
              w-[42px]
              place-items-center
              rounded-xl
              border
              border-white/10
              bg-gradient-to-br
              from-emerald-400/20
              to-sky-400/10
              font-bold
              transition
              duration-300

              group-hover:border-emerald-300/30
              group-hover:bg-emerald-400/10
            "
          >
            <span>
              V<span className="text-emerald-400">M</span>
            </span>
          </div>

          <span
            className="
              hidden
              text-[15px]
              font-extrabold
              transition-colors
              duration-300

              group-hover:text-emerald-300

              sm:block
            "
          >
            Victor Mendes
          </span>
        </a>

        {/* =====================================================
            NAVEGAÇÃO DESKTOP
        ===================================================== */}

        <nav
          className="hidden items-center gap-7 text-sm lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`
                  group
                  relative
                  py-2
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-emerald-300"
                      : "text-[#c9d2cc] hover:text-emerald-300"
                  }
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    bg-emerald-400
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* =====================================================
            AÇÕES DO HEADER
        ===================================================== */}

        <div className="flex items-center gap-2">
          <a
            href="/documents/Victor_Mendes_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2.5
              text-xs
              font-bold
              transition
              duration-300

              hover:-translate-y-0.5
              hover:border-emerald-300/40
              hover:bg-emerald-400/[0.04]

              sm:block
            "
          >
            Currículo ↓
          </a>

          <a
            href="https://www.linkedin.com/in/victormfb/"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2.5
              text-xs
              font-bold
              transition
              duration-300

              hover:-translate-y-0.5
              hover:border-emerald-300/40
              hover:bg-emerald-400/[0.04]

              xl:block
            "
          >
            LinkedIn ↗
          </a>

          {/* =================================================
              BOTÃO DO MENU MOBILE
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((previous) => !previous)
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            className="
              flex
              h-11
              w-11
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              transition
              duration-300

              hover:border-emerald-300/30

              lg:hidden
            "
          >
            <motion.span
              animate={
                isMenuOpen
                  ? {
                      rotate: 45,
                      y: 3.5,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.2,
              }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? {
                      rotate: -45,
                      y: -3.5,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.2,
              }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
          </button>
        </div>
      </div>

      {/* =====================================================
          MENU MOBILE
      ===================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              overflow-hidden
              border-t
              border-white/5
              bg-[#07110d]/98

              lg:hidden
            "
            aria-label="Navegação mobile"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
              {navigation.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      isActive
                        ? "location"
                        : undefined
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/5
                      py-4
                      text-sm
                      transition-colors
                      duration-300
                      last:border-none

                      ${
                        isActive
                          ? "text-emerald-300"
                          : "text-zinc-300 hover:text-emerald-300"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_12px_#16e07a]
                        "
                      />
                    )}
                  </a>
                );
              })}

              {/* AÇÕES MOBILE */}

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href="/documents/Victor_Mendes_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    transition
                    duration-300

                    hover:border-emerald-300/30
                    hover:bg-emerald-400/[0.04]
                  "
                >
                  Currículo ↓
                </a>

                <a
                  href="https://www.linkedin.com/in/victormfb/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    transition
                    duration-300

                    hover:border-emerald-300/30
                    hover:bg-emerald-400/[0.04]
                  "
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