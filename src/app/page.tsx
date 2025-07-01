import Navbar from "@/components/layout/Navbar";
import HorizontalLine from "@/components/layout/HorizontalLine";
import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Projects from "@/components/pages/home/Projects";

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          ["#home-sect", "Home"],
          ["#projects-sect", "Projects"],
          ["#about-sect", "About"],
        ]}
      >
      </Navbar>
      <main className="mt-[13vh] max-w-full w-full flex flex-col items-center gap-y-3">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}
