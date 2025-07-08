import Navbar from "@/components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const navbarText = useTranslations("navbar");
  const presentDateText = useTranslations("otherText");
  const portfolioSiteText = useTranslations("projectsPage.simplePortfolioSite");
  const nextjsPortfolioSiteText = useTranslations(
    "projectsPage.nextjsPortfolioSite",
  );
  const matrixVisualizerText = useTranslations(
    "projectsPage.matrixVisualizerWebApp",
  );
  const imageReferencesText = useTranslations(
    "projectsPage.imageReferencesDesktopApp",
  );
  return (
    <>
      <Navbar
        links={[
          ["../", navbarText("home")],
          ["./projects", navbarText("projects")],
        ]}
        whichLink={1}
      />
      <main className="pt-[6rem] text-lg max-w-full w-full flex flex-col items-center justify-center gap-y-16">
        <ProjectCard
          id="nextjs-portfolio-site"
          title={nextjsPortfolioSiteText("title")}
          imgSrc="/src/projects/nextjs-portfolio-site.webp"
          desc={nextjsPortfolioSiteText("desc")}
          gitHubLink="https://github.com/CupapiOT/nextjs-portfolio-site"
          year={["2025"]}
          techUsed={["NextJS", "React", "TailwindCSS", "TS"]}
        />
        <ProjectCard
          id="simple-portfolio-site"
          title={portfolioSiteText("title")}
          imgSrc="/src/projects/portfolio-site.webp"
          desc={portfolioSiteText("desc")}
          gitHubLink="https://github.com/CupapiOT/CupapiOT.github.io"
          websiteLink="https://cupapiot.github.io"
          year={["2024", "2025"]}
          techUsed={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          id="matrix-visualizer"
          title={matrixVisualizerText("title")}
          imgSrc="/src/projects/animated-matrices.webp"
          desc={matrixVisualizerText("desc")}
          gitHubLink="https://github.com/CupapiOT/animated-matrices"
          year={["2024", presentDateText("presentDate")]}
          techUsed={["Python", "Python Dash", "Python Plotly"]}
        />
        <ProjectCard
          id="image-references"
          title={imageReferencesText("title")}
          imgSrc="/src/projects/image-references.webp"
          desc={imageReferencesText("desc")}
          gitHubLink="https://github.com/CupapiOT/croquis-image-references"
          year={["2023", "2024"]}
          techUsed={["Python", "CustomTkinter"]}
        />
      </main>
      <Footer />
    </>
  );
}
