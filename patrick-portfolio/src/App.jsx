import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Documents from "./components/Documents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="website">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Documents />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;