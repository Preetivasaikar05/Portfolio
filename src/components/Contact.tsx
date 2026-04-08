import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="px-5 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
          Contact
        </p>
        <h2 className="text-5xl font-serif mb-6">Let’s Connect</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mb-10"></div>

        <div className="border border-cyan-900/50 bg-[#04192a]/70 p-8 md:p-10 space-y-5 text-lg text-slate-300">
          <p>
            I am currently open to entry-level opportunities in software
            development and data analytics.
          </p>

          {contact.map((item) => (
            <p key={item.label}>
              <span className="text-cyan-300">{item.label}:</span>{" "}
              {item.href ? (
                <a href={item.href} className="hover:text-cyan-200">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;