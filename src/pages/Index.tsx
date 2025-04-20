
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="space-y-16">
        <Hero />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
};

export default Index;
