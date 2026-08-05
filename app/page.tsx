import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}