
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <main className="space-y-8"> {/* Reduced from space-y-16 to space-y-8 */}
        <Hero />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
};

export default Index;
