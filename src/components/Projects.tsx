import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { staggerContainer, fadeUpItem, hoverLift } from "./animations";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="px-5 md:px-8 py-24">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
            Selected Work
          </p>
          <h2 className="text-5xl font-serif mb-6">Projects</h2>
          <div className="w-16 h-[2px] bg-cyan-400 mb-12"></div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <motion.div
                key={`${project.title}-${project.date}`}
                variants={fadeUpItem}
                whileHover={hoverLift}
                className="border border-cyan-900/50 bg-[#04192a]/70 overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition"
              >
                <div className="h-64 md:h-72 bg-[#0a3150] overflow-hidden flex items-center justify-center text-cyan-300 uppercase tracking-[0.25em]">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.35 }}
                    />
                  ) : (
                    <motion.div whileHover={{ scale: 1.04 }}>
                      Add Project Screenshot
                    </motion.div>
                  )}
                </div>

                <div className="p-8 md:p-10">
                  <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm mb-4">
                    {project.date}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-serif mb-5">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="border border-cyan-900 px-4 py-2 text-cyan-200 hover:border-cyan-400 hover:text-cyan-100 transition"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        className="border border-cyan-400 text-cyan-300 px-6 py-3 uppercase tracking-[0.18em] hover:bg-cyan-400/10 transition"
                      >
                        GitHub
                      </motion.a>
                    )}

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        className="border border-cyan-900 text-slate-200 px-6 py-3 uppercase tracking-[0.18em] hover:border-cyan-400 transition"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;