import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import HorizontalLine from "@/components/layout/HorizontalLine";
import createTags from "@/components/layout/createTags";

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
        <h3 className="text-lg mr-1 text-cyan-500">
          {props.link !== undefined ? (
            <a href={props.link} className="hover:underline">
              {props.title}🔗
            </a>
          ) : (
            props.title
          )}
        </h3>
        {props.year !== undefined ? (
          <span className="translate-y-1.5 text-sm text-gray-500 lg:translate-0 min-[114rem]:translate-y-1.5">
            ({props.year[0]}
            {/* If the second year isn't available, only include the first year. */}
            {props.year[1] !== undefined ? "–" + props.year[1] : ""})
          </span>
        ) : (
          // If no year was given, don't render this.
          ""
        )}
      </div>
      <p className="text-gray-400 mb-2">{props.desc}</p>
      <ul className="flex flex-wrap gap-2">{createTags(props.techUsed)}</ul>
    </li>
  );
}

interface ProjectsSectionProps extends SectionProps {
  pageLink?: string;
}

export default function Projects(props: ProjectsSectionProps) {
  return (
    <Section
      id={props.id}
      className={`relative justify-start ${props.className || ""}`}
      fadeInDirection={props.fadeInDirection}
    >
      <h2 className="section-header">Projects Overview</h2>
      <ul className="flex flex-col gap-y-2 mb-2 self-center w-full sm:max-w-9/10 lg:max-w-full">
        <ProjectItem
          title="Portfolio Website"
          link="./projects"
          desc="A simple website to showcase my skills. Kickstarted my front-end journey."
          year={["2024", "2025"]}
          techUsed={["HTML", "CSS", "JS"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title="2D Matrix Visualizer"
          link="./projects#matrix-visualizer"
          desc="A tool to help students learn matrices in linear algebra visually and interactively."
          year={["2024", "PRESENT"]}
          techUsed={["Python", "Python Dash", "Python Plotly"]}
        />
        <HorizontalLine width="full" className="my-2" />
        <ProjectItem
          title="Image References App"
          link="./projects#image-references"
          desc="A reference-sketching tool used daily by a professional artist."
          techUsed={["Python", "CustomTkinter"]}
          year={["2023", "2024"]}
        />
        {props.pageLink !== undefined ? (
          // The `min-[114rem]` media query ensures a smooth transition between
          // the "See More" button's placements, specifically between 1024px
          // and 1136px.
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
            See More ↗
          </a>
        ) : (
          ""
        )}
      </ul>
    </Section>
  );
}
