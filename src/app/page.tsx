import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/pages/home/Hero";
import Intro from "@/components/pages/home/Intro";
import Skills from "@/components/pages/home/Skills";
import Projects from "@/components/pages/home/Projects";
import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          ["", "Home"],
          ["./projects", "Projects"],
        ]}
        whichLink={0}
      />
      <main className="mt-[10vh] mb-10 max-w-full w-full flex flex-col items-center gap-y-3 sm:grid-cols-3">
        <Hero />
        <Intro />
        <Skills />
        <Projects pageLink="./projects/" />
        <About />
        <Contact
          email="hellomarvelorleans@gmail.com"
          githubLink="https://github.com/CupapiOT"
          githubName="Marvel Orleans"
          resumeSrc="/src/docs/Marvel_Orleans_CV.pdf"
        />
      </main>
      <Footer />
    </>
  );
}
