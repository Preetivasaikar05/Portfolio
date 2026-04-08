import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  
];

const stats = [
  { value: "30+", label: "Programs Analyzed" },
  { value: "98%", label: "Reporting Accuracy" },
  { value: "500+", label: "Students Automated" },
  { value: "3+", label: "Concurrent Projects" },
];

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 relative">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="uppercase tracking-[0.32em] text-cyan-300 text-sm mb-4">
              {about.sectionTag}
            </p>
            <h2 className="text-4xl md:text-6xl font-serif mb-4 text-white">
              {about.title}
            </h2>
            <div className="w-20 h-[2px] bg-cyan-400" />
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-slate-200 text-lg md:text-xl leading-9">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-2xl border border-cyan-900/50 bg-[#04192a]/70 p-6 md:p-7">
                <p className="text-cyan-300 uppercase tracking-[0.24em] text-xs md:text-sm mb-3">
                  Professional Snapshot
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-8">
                  about sustai at combine clean frontend
                  experiences, scalable backend systems, and meaningful data
                  insights. My goal is to contribute to teams where I can grow
                  as both a software engineer and an analytical problem-solver.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-cyan-900/50 bg-[#04192a]/70 p-6 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition"
                  >
                    <h3 className="text-3xl md:text-4xl font-serif text-cyan-300 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-slate-300 uppercase tracking-[0.18em] text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {highlights.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-cyan-900/50 bg-[#04192a]/70 p-6 md:p-7 hover:border-cyan-400/50 transition"
                >
                  <p className="text-cyan-300 uppercase tracking-[0.24em] text-xs md:text-sm mb-4">
                    {block.title}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="border border-cyan-900 px-4 py-2 text-slate-300 text-sm md:text-base"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;