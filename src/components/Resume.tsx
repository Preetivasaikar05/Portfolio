const Resume = () => {
  return (
    <section id="resume" className="px-5 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
          Resume
        </p>
        <h2 className="text-5xl font-serif mb-6">My Resume</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mb-10"></div>

        <div className="border border-cyan-900/50 bg-[#04192a]/70 p-8 md:p-10">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Download my resume to view my technical background, project work,
            internships, and academic experience in more detail.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block border border-cyan-400 text-cyan-300 px-8 py-4 uppercase tracking-[0.2em] hover:bg-cyan-400/10 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;