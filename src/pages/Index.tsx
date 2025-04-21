
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 via-40% to-blue-200 animate-gradient">
      <main className="space-y-4 sm:space-y-6"> {/* Reduced gap for fluency */}
        <Hero />
        <Articles />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
};

export default Index;
