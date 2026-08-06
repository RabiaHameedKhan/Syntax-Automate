import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from  "@/components/sections/Services";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Services/>
    </main>
  );
}