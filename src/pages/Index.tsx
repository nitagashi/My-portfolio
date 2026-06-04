import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle vertical column guides */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-l border-foreground/[0.03] h-full"
              />
            ))}
          </div>
        </div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
