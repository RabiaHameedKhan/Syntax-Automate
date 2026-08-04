import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <Navbar />
      <Hero />
    </main>
  );
}