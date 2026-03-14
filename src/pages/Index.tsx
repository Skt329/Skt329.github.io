import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Articles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
