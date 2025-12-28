import Navbar from "@/components/Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

interface ProjectDisplayProps {
  id: string;
  tags: string[];
  gitHubLink?: string;
  websiteLink?: string;
  year?: string[];
}

export default function Home() {
  const navbarText = useTranslations("navbar");
  const presentDateText = useTranslations("otherText");

  const projects: ProjectDisplayProps[] = [
    {
      id: "nextjs-portfolio-site",
      tags: ["NextJS", "React", "Tailwind CSS", "TypeScript"],
      gitHubLink: "https://github.com/CupapiOT/nextjs-portfolio-site",
      year: ["2025"],
    },
    {
      id: "simple-portfolio-site",
      tags: ["HTML", "CSS", "JavaScript"],
      gitHubLink: "https://github.com/CupapiOT/CupapiOT.github.io",
      websiteLink: "https://cupapiot.github.io",
      year: ["2024", "2025"],
    },
    {
      id: "animated-matrices",
      tags: ["Python", "Plotly for Python", "Plotly Dash", "Numpy"],
      gitHubLink: "https://github.com/CupapiOT/animated-matrices",
      year: ["2024", presentDateText("presentDate")],
    },
    {
      id: "croquis-image-references",
      tags: ["Python", "CustomTkinter"],
      gitHubLink: "https://github.com/CupapiOT/croquis-image-references",
      year: ["2023", "2024"],
    },
  ];

  const projectsText = useTranslations("projectsPage");
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
        {projects.map((project) => {
          const intlId = project.id.replace(/-./g, (letter) =>
            letter[1].toUpperCase(),
          );
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={projectsText(`${intlId}.title`)}
              imgSrc={`/src/projects/${project.id}.webp`}
              desc={projectsText(`${intlId}.desc`)}
              gitHubLink={project.gitHubLink}
              websiteLink={project.websiteLink}
              year={project.year}
              tags={project.tags}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
