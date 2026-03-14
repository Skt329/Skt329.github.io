import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Credentials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
