"use client";
import { useEffect, useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface ProjectDisplayProps {
  id: string;
  tags: string[];
  gitHubLink?: string;
  websiteLink?: string;
  year?: string[];
}

type Tab = "personal" | "paid";

export default function Home() {
  // const presentDateText = useTranslations("otherText");

  const personalProjects: ProjectDisplayProps[] = useMemo(
    () => [
      {
        id: "malloc-in-c",
        tags: ["C23", "GCC", "GDB", "Memory Management"],
        gitHubLink: "https://github.com/CupapiOT/malloc-in-c",
        year: ["2026"],
      },
      {
        id: "mini-paint-tui",
        tags: ["C99", "GCC", "GDB", "FFmpeg", "Terminal User Interface"],
        gitHubLink: "https://github.com/CupapiOT/mini-paint-tui",
        year: ["2026"],
      },
      {
        id: "nextjs-portfolio-site",
        tags: ["NextJS", "React", "Tailwind CSS", "TypeScript"],
        gitHubLink: "https://github.com/CupapiOT/mini-paint-tui",
        year: ["2025"],
      },
      // NOTE: No longer useful.
      // {
      //   id: "simple-portfolio-site",
      //   tags: ["HTML", "CSS", "JavaScript"],
      //   gitHubLink: "https://github.com/CupapiOT/CupapiOT.github.io",
      //   websiteLink: "https://cupapiot.github.io",
      //   year: ["2024", "2025"],
      // },
      {
        id: "animated-matrices",
        tags: ["Python", "Plotly for Python", "Plotly Dash", "Numpy"],
        gitHubLink: "https://github.com/CupapiOT/animated-matrices",
        year: ["2024", "2025"],
      },
      {
        id: "croquis-image-references",
        tags: ["Python", "CustomTkinter"],
        gitHubLink: "https://github.com/CupapiOT/croquis-image-references",
        year: ["2023", "2024"],
      },
    ],
    [],
  );

  const paidProjects: ProjectDisplayProps[] = useMemo(
    () => [
      {
        id: "sea-portfolio-site",
        tags: ["NextJS", "React", "Tailwind CSS", "TypeScript"],
        year: ["2025"],
        websiteLink: "https://seaportfolio.vercel.app",
      },
    ],
    [],
  );

  const projectsText = useTranslations("projectsPage");
  const [selectedTab, setTab] = useState<Tab>("personal");
  const [projectsToDisplay, setProjectsToDisplay] =
    useState<ProjectDisplayProps[]>(personalProjects);
  const setSelectedTab = (tab: Tab) => {
    setTab(tab);
    setProjectsToDisplay(tab === "personal" ? personalProjects : paidProjects);
    localStorage.setItem("selectedTab", tab);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab") as Tab;
    if (savedTab == null) {
      localStorage.setItem("selectedTab", "personal");
    } else {
      setTab(savedTab);
      setProjectsToDisplay(
        savedTab === "personal" ? personalProjects : paidProjects,
      );
    }
  }, [paidProjects, personalProjects]);

  const buttonClassNames =
    "p-2 text-(--navbar-link) flex w-full justify-center transition duration-200 hover:text-(--navbar-link) hover:bg-(--contact-button-bg)";
  return (
    <main className="pt-[6rem] text-lg max-w-full w-full flex flex-col items-center justify-center gap-y-8">
      <div className="w-full sm:max-w-8/10 md:max-w-7/10  max-w-95/100 lg:!max-w-9/10 xl:!max-w-4/5 2xl:!max-w-3/5 flex justify-center align-center">
        <button
          className={clsx(
            buttonClassNames,
            "rounded-l-xl",
            selectedTab === "personal"
              ? "text-(--navbar-link) bg-(--contact-button-bg) font-semibold"
              : "text-(--navbar-link-hover)",
          )}
          onClick={() => setSelectedTab("personal")}
        >
          {projectsText("personalTabButton")}
        </button>
        <div className="w-1 bg-(--section-background-lighter) rounded-full" />
        <button
          className={clsx(
            buttonClassNames,
            "rounded-r-xl",
            selectedTab === "paid"
              ? "text-(--navbar-link) bg-(--contact-button-bg) font-semibold"
              : "text-(--navbar-link-hover)",
          )}
          onClick={() => setSelectedTab("paid")}
        >
          {projectsText("commercialTabButton")}
        </button>
      </div>

      <ul className="w-full flex flex-col items-center justify-center gap-y-16">
        {projectsToDisplay.map((project) => {
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
      </ul>
    </main>
  );
}
