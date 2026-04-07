import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora northern lights effect */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-background" />

        {/* Aurora band 1 - primary teal */}
        <div
          className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] animate-[aurora1_8s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(180deg, transparent 0%, hsl(173 80% 45% / 0.15) 30%, hsl(173 80% 45% / 0.25) 50%, hsl(190 85% 50% / 0.1) 70%, transparent 100%)`,
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />

        {/* Aurora band 2 - shifted green */}
        <div
          className="absolute top-[-10%] left-[10%] w-[120%] h-[50%] animate-[aurora2_12s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(180deg, transparent 0%, hsl(150 70% 40% / 0.12) 40%, hsl(173 80% 45% / 0.2) 60%, transparent 100%)`,
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        {/* Aurora band 3 - purple accent */}
        <div
          className="absolute top-[-5%] left-[-10%] w-[130%] h-[45%] animate-[aurora3_10s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(180deg, transparent 0%, hsl(260 60% 50% / 0.08) 30%, hsl(200 70% 45% / 0.15) 55%, transparent 100%)`,
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />

        {/* Star field */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20% 30%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 40% 70%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 60% 10%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1.5px 1.5px at 80% 50%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 10% 80%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 70% 85%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1.5px 1.5px at 35% 15%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 90% 25%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 55% 45%, hsl(var(--foreground)) 50%, transparent 100%),
              radial-gradient(1px 1px at 15% 55%, hsl(var(--foreground)) 50%, transparent 100%)`,
          }}
        />

        {/* Subtle horizon glow */}
        <div
          className="absolute bottom-0 left-0 w-full h-[30%]"
          style={{
            background: `linear-gradient(0deg, hsl(173 80% 45% / 0.05) 0%, transparent 100%)`,
          }}
        />
      </div>

      <Navbar />
      <main className="relative">
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
