import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { staggerContainer, fadeUpItem, hoverLift } from "./animations";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="px-5 md:px-8 py-24">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
            Technical Expertise
          </p>
          <h2 className="text-5xl font-serif mb-6">Skills</h2>
          <div className="w-16 h-[2px] bg-cyan-400 mb-12"></div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {skills.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUpItem}
                whileHover={hoverLift}
                className="border border-cyan-900/50 p-8 md:p-10 bg-[#04192a]/70 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition"
              >
                <h3 className="uppercase tracking-[0.25em] text-cyan-300 text-sm mb-8">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="border border-cyan-900 px-4 py-2 text-slate-300 hover:border-cyan-400 hover:text-cyan-200 transition"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;