import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-[#031321] text-white min-h-screen overflow-x-hidden">
      <ScrollProgress />

      <div className="relative z-20">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;