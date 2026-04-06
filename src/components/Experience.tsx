import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { staggerContainer, fadeUpItem, hoverLift } from "./animations";

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="px-5 md:px-8 py-24">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
            Work History
          </p>
          <h2 className="text-5xl font-serif mb-6">Experience</h2>
          <div className="w-16 h-[2px] bg-cyan-400 mb-12"></div>

          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {experiences.map((exp) => (
              <motion.div
                key={`${exp.title}-${exp.date}`}
                variants={fadeUpItem}
                whileHover={hoverLift}
                className="border-l-2 border-cyan-500 pl-8 relative hover:border-cyan-300 transition"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                />

                <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm mb-3">
                  {exp.date}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h3 className="text-3xl md:text-4xl font-serif">{exp.title}</h3>
                  {exp.current && (
                    <span className="border border-cyan-700 text-cyan-300 px-4 py-1 text-sm uppercase tracking-[0.2em]">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-cyan-100 mb-6 text-lg">{exp.company}</p>

                <ul className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  {exp.bullets.map((bullet, index) => (
                    <motion.li
                      key={`${exp.title}-bullet-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                    >
                      — {bullet}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Experience;