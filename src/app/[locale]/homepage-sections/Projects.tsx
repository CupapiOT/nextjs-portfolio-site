import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import HorizontalLine from "@/components/HorizontalLine";
import createTags from "@/components/createTags";
import { useTranslations } from "next-intl";

interface ProjectItemProps {
  title: string;
  desc: string;
  techUsed: string[];
  link?: string;
  year?: string[];
}

/**
 * Only used in the Projects() component below.
 */
function ProjectItem(props: ProjectItemProps) {
  return (
    <li>
      <div className="flex lg:flex-col min-[114rem]:flex-row">
        <h3 className="text-lg mr-1 text-cyan-600 dark:text-cyan-500">
          {props.link !== undefined ? (
            <a href={props.link} className="hover:underline">
              {props.title}🔗
            </a>
          ) : (
            props.title
          )}
        </h3>
        {props.year !== undefined ? (
          <span className="translate-y-1.5 project-year-text lg:translate-0 min-[114rem]:translate-y-1.5">
            ({props.year[0]}
            {/* If the second year isn't available, only include the first year. */}
            {props.year[1] !== undefined ? "–" + props.year[1] : ""})
          </span>
        ) : (
          // If no year was given, don't render this.
          ""
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{props.desc}</p>
      <ul className="flex flex-wrap gap-2">{createTags(props.techUsed)}</ul>
    </li>
  );
}

interface ProjectsSectionProps extends SectionProps {
  pageLink?: string;
}

export default function Projects(props: ProjectsSectionProps) {
  const projectsText = useTranslations("homePage.projects");
  const presentDateText = useTranslations("otherText");
  const nextjsPortfolioWebsiteText = useTranslations(
    "homePage.projects.nextjsPortfolioWebsite",
  );
  const matrixVisualizerWebApp = useTranslations(
    "homePage.projects.matrixVisualizerWebApp",
  );
  const imageReferencesApp = useTranslations(
    "homePage.projects.imageReferencesApp",
  );

  return (
    <Section
      id={props.id}
      className={`relative justify-start ${props.className || ""}`}
      fadeInDirection={props.fadeInDirection}
    >
      <h2 className="section-header">{projectsText("title")}</h2>
      <ul className="flex flex-col gap-y-2 mb-2 self-center w-full sm:max-w-9/10 lg:max-w-full">
        <ProjectItem
          title={nextjsPortfolioWebsiteText("title")}
          desc={nextjsPortfolioWebsiteText("desc")}
          link="./projects"
          year={["2025"]}
          techUsed={["NextJS", "React", "TailwindCSS", "TS"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title={matrixVisualizerWebApp("title")}
          desc={matrixVisualizerWebApp("desc")}
          link="./projects"
          year={["2024", presentDateText("presentDate")]}
          techUsed={["Python", "Python Dash", "Python Plotly"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title={imageReferencesApp("title")}
          desc={imageReferencesApp("desc")}
          link="./projects"
          techUsed={["Python", "CustomTkinter"]}
          year={["2023", "2024"]}
        />
        {props.pageLink !== undefined ? (
          <HorizontalLine
            width="full"
            className="mb-8 my-2 lg:mb-6 min-[114rem]:mb-[-5rem]"
          />
        ) : (
          ""
        )}
        {props.pageLink !== undefined ? (
          <a
            className="absolute bottom-5 hover:underline hover:text-cyan-500 hover:text-[1rem] translate duration-300"
            href={props.pageLink}
          >
            {projectsText("seeMoreLink")}↗
          </a>
        ) : (
          ""
        )}
      </ul>
    </Section>
  );
}
