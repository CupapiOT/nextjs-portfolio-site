import Navbar from "@/components/Navbar";
import Hero from "@/app/[locale]/homepage-sections/Hero";
import Intro from "@/app/[locale]/homepage-sections/Intro";
import Skills from "@/app/[locale]/homepage-sections/Skills";
import Projects from "@/app/[locale]/homepage-sections/Projects";
import About from "@/app/[locale]/homepage-sections/About";
import Contact from "@/app/[locale]/homepage-sections/Contact";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const navbarText = useTranslations("navbar");

  return (
    <>
      <Navbar
        links={[
          ["", navbarText("home")],
          ["./projects", navbarText("projects")],
        ]}
        currLinkIndex={0}
      />
      <main className="overflow-hidden pt-[6.5rem] pb-10 max-w-[1152px] w-full h-min flex flex-col items-center gap-y-3 lg:text-sm lg:max-w-95/100 lg:grid lg:grid-cols-3 grid-rows-[h-min_h-min_h-min] lg:aspect-auto justify-items-center lg:gap-3 xl:max-w-4/5 2xl:max-w-3/5">
        <Hero
          className="lg:row-start-2 lg:col-start-2 lg:!duration-200"
          fadeInDirection="NONE"
        />
        <div className="flex flex-col relative w-full gap-y-3 items-center lg:row-start-2 lg:row-span-2 lg:h-full">
          <Intro className="delay-[400ms]" fadeInDirection="RIGHT" />
          <Skills className="delay-300" fadeInDirection="DOWN" />
        </div>
        <Projects
          className="lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:delay-100"
          pageLink="./projects/"
          fadeInDirection="UP"
        />
        <About
          className="lg:px-8 lg:row-start-1 lg:col-start-1 lg:col-span-2 lg:delay:50"
          fadeInDirection="RIGHT"
        />
        <Contact
          className="lg:row-start-3 lg:col-start-2 lg:col-span-2 lg:delay-200"
          email="hellomarvelorleans@gmail.com"
          githubLink="https://github.com/CupapiOT"
          githubName="Marvel Orleans"
          resumeSrc="/src/docs/Marvel_Orleans_CV.pdf"
          fadeInDirection="LEFT"
        />
      </main>
      <Footer />
    </>
  );
}
