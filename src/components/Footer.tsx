export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[1280px] flex-col justify-between gap-5 border-t border-white/10 px-6 py-8 text-xs text-[#7f8e85] sm:flex-row lg:px-8">
      <span>
        © {year} Victor Mendes Ferreira Bittencourt
      </span>

      <a
        href="#topo"
        className="transition-colors hover:text-emerald-400"
      >
        Voltar ao topo ↑
      </a>
    </footer>
  );
}