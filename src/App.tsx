import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen bg-background grain-overlay">
    <Navbar />
    <main id="main-content">
      <Hero />
      <div className="section-divider max-w-6xl mx-auto" />
      <ImpactMetrics />
      <div className="section-divider max-w-6xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-6xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-6xl mx-auto" />
      <Credentials />
    </main>
    <Footer />
  </div>
);

export default App;
