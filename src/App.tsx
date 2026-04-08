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
import FloatingBubbles from "./components/FloatingBubbles";

function App() {
  return (
    <div className="relative bg-[#031321] text-white min-h-screen overflow-x-hidden">
      <FloatingBubbles />
      <ScrollProgress />

      <div className="relative z-20">
        <Navbar />
        <Hero />
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