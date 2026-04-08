import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const { hero } = portfolioData;
  const { scrollY } = useScroll();

  const ySlow = useTransform(scrollY, [0, 500], [0, 60]);
  const yFast = useTransform(scrollY, [0, 500], [0, 110]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#031321] pt-28"
    >
      <motion.div
         style={{ y: ySlow }}
        className="absolute inset-0 pointer-events-none z-[0]"
        >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

        
      </motion.div>

      <motion.div
        style={{ y: yFast }}
        className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute bottom-10 right-12 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-7rem)] flex items-center">
        <div className="grid lg:grid-cols-[90px_1fr] gap-6 md:gap-10 items-start w-full">
          <div className="hidden lg:flex flex-col items-center pt-10">
            <div className="w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.9)]" />
            <div className="w-[2px] h-[420px] bg-gradient-to-b from-cyan-300/90 via-cyan-400/40 to-transparent mt-2" />
          </div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 md:mb-8 text-xs md:text-sm uppercase tracking-[0.38em] text-cyan-300"
            >
              Software Developer 
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="leading-[0.95] mb-6"
            >
              
              <span className="block text-cyan-300 font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] mt-2">
                Preeti Vasaikar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="h-[2px] w-full max-w-3xl bg-gradient-to-r from-cyan-300 via-cyan-500/70 to-transparent mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-8"
            >
              Building full-stack applications, dashboards, and data-driven
              solutions with React, Python, SQL, cloud tools, and scalable
              backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-xl border border-cyan-400/40 bg-[#071f33]/90 px-7 py-4 text-white font-semibold text-base shadow-[0_0_20px_rgba(34,211,238,0.08)] hover:-translate-y-1 hover:border-cyan-300 hover:bg-[#0b2740] transition"
              >
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-900 bg-[#06192a]/80 px-7 py-4 text-slate-100 font-semibold text-base hover:-translate-y-1 hover:border-cyan-400 transition"
              >
                Visit LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-xl border border-cyan-900 bg-[#06192a]/80 px-7 py-4 text-slate-100 font-semibold text-base hover:-translate-y-1 hover:border-cyan-400 transition"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;