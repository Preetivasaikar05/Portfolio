import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const { navLinks } = portfolioData;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyan-900/40 bg-[#031321]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4">
          <div className="w-12 h-12 border border-cyan-400 rounded-md flex items-center justify-center text-cyan-400 text-xl font-semibold">
            PV
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-slate-100">
              Preeti Vasaikar
            </h1>
            <p className="text-[10px] md:text-sm uppercase tracking-[0.22em] text-cyan-300">
              Software Developer
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;