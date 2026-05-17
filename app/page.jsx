import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CEO from "@/components/CEO";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <VisionMission />
      <CEO />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
