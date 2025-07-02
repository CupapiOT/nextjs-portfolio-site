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
      <main className="mt-[6.5em] mb-10 max-w-full w-full flex flex-col items-center gap-y-3 lg:text-sm lg:max-w-4/5 lg:grid lg:grid-cols-3 grid-rows-[h-min_h-min_h-min] lg:aspect-auto justify-items-center lg:mb-10 lg:gap-3 2xl:max-w-3/5">
        <Hero className="lg:row-start-2 lg:col-start-2" />
        <div className="flex flex-col relative w-full gap-y-3 items-center lg:row-start-2 lg:row-span-2 lg:h-full">
          <Intro />
          <Skills />
        </div>
        <Projects
          className="lg:row-start-1 lg:row-span-2 lg:col-start-3"
          pageLink="./projects/"
        />
        <About className="lg:px-8 lg:row-start-1 lg:col-start-1 lg:col-span-2" />
        <Contact
          className="lg:row-start-3 lg:col-start-2 lg:col-span-2"
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
