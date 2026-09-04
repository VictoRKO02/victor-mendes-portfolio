import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="background-effects"
        aria-hidden="true"
      >
        <div className="noise" />
        <div className="orb orb-green" />
        <div className="orb orb-blue" />
      </div>

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Stack />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}