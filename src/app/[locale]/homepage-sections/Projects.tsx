import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import HorizontalLine from "@/components/HorizontalLine";
import createTags from "@/components/createTags";
import clsx from "clsx";
import { useTranslations } from "next-intl";

interface ProjectItemProps {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  year?: string[];
}

/**
 * Only used in the Projects component below.
 */
function ProjectItem({ title, desc, tags, link, year }: ProjectItemProps) {
  return (
    <li>
      <div className="flex lg:flex-col min-[114rem]:flex-row">
        <h3 className="text-lg mr-1 text-cyan-600 dark:text-cyan-500">
          {link !== undefined ? (
            <a href={link} className="hover:underline">
              {title}🔗
            </a>
          ) : (
            title
          )}
        </h3>
        {year !== undefined ? (
          <span className="translate-y-1.5 project-year-text lg:translate-0 min-[114rem]:translate-y-1.5">
            ({year[0]}
            {/* If the second year isn't available, only include the first year. */}
            {year[1] !== undefined ? "–" + year[1] : ""})
          </span>
        ) : (
          // If no year was given, don't render this.
          ""
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{desc}</p>
      <ul className="flex flex-wrap gap-2">{createTags(tags)}</ul>
    </li>
  );
}

interface ProjectsSectionProps extends SectionProps {
  pageLink?: string;
}

export default function Projects({
  id,
  className,
  fadeInDirection,
  pageLink,
}: ProjectsSectionProps) {
  const projectsText = useTranslations("homePage.projects");
  const presentDateText = useTranslations("otherText");
  const nextjsPortfolioSiteText = useTranslations(
    "homePage.projects.nextjsPortfolioSite",
  );
  const animatedMatricesText = useTranslations(
    "homePage.projects.animatedMatrices",
  );
  const croquisImageReferencesText = useTranslations(
    "homePage.projects.croquisImageReferences",
  );

  return (
    <Section
      id={id}
      className={clsx("relative justify-start", className || "")}
      fadeInDirection={fadeInDirection}
    >
      <h2 className="section-header">{projectsText("title")}</h2>
      <ul className="flex flex-col gap-y-2 mb-2 self-center w-full sm:max-w-9/10 lg:max-w-full">
        {/* There should only ever be three projects at a time here. */}
        <ProjectItem
          title={nextjsPortfolioSiteText("title")}
          desc={nextjsPortfolioSiteText("desc")}
          link="./projects"
          year={["2025"]}
          tags={["NextJS", "React", "Tailwind", "TypeScript"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title={animatedMatricesText("title")}
          desc={animatedMatricesText("desc")}
          link="./projects"
          year={["2024", presentDateText("presentDate")]}
          tags={["Python", "Plotly", "Plotly Dash", "Numpy"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title={croquisImageReferencesText("title")}
          desc={croquisImageReferencesText("desc")}
          link="./projects"
          tags={["Python", "CustomTkinter"]}
          year={["2023", "2024"]}
        />
        {pageLink !== undefined ? (
          <HorizontalLine
            width="full"
            className="mb-8 my-2 lg:mb-6 min-[114rem]:mb-[-5rem]"
          />
        ) : (
          ""
        )}
        {pageLink !== undefined ? (
          <a
            className="absolute bottom-5 hover:underline hover:text-cyan-500 hover:text-[1rem] translate duration-300"
            href={pageLink}
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
