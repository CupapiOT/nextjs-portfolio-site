import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import Image from "next/image";
import HorizontalLine from "@/components/HorizontalLine";
import ThemeSensitiveImage from "@/components/ThemeSensitiveImage";
import { useTranslations } from "next-intl";

interface SkillIconProps {
  src: string;
  alt: string;
}

/**
 * Only used in the Skills() component below.
 * The alt and title of the SVG are the same.
 */
function SkillsIcon({ src, alt }: SkillIconProps) {
  return (
    <Image
      className="aspect-square w-[3.5em] lg:w-[3em]"
      src={src}
      alt={alt}
      title={alt}
      width={9999}
      height={9999}
    />
  );
}

export default function Skills({
  id,
  className,
  fadeInDirection,
}: SectionProps) {
  const headerText = useTranslations("homePage.skills");
  const skillsAlts = useTranslations("iconsAlt");
  const skillsIconContainerClasses =
    "flex gap-3 flex-wrap justify-center self-center w-95/100 sm:max-w-2/3 sm:gap-5 lg:max-w-full";
  const h3Classes = "mb-4 text-center font-medium text-xl lg:text-lg";
  return (
    <Section id={id} className={className} fadeInDirection={fadeInDirection}>
      <h2 className="section-header mb-6">{headerText("title")}</h2>
      <h3 className={h3Classes}>{headerText("best")}</h3>
      <div className="flex justify-center">
        <SkillsIcon
          src="/src/skills/icon-python.svg"
          alt={skillsAlts("python")}
        />
      </div>
      <HorizontalLine className="my-4" />
      <h3 className={h3Classes}>{headerText("other")}</h3>
      <div className={skillsIconContainerClasses}>
        <SkillsIcon src="/src/skills/icon-c.svg" alt={skillsAlts("c")} />
        <SkillsIcon src="/src/skills/icon-html.svg" alt={skillsAlts("html")} />
        <SkillsIcon src="/src/skills/icon-css.svg" alt={skillsAlts("css")} />
        <SkillsIcon
          src="/src/skills/icon-javascript.svg"
          alt={skillsAlts("javascript")}
        />
        <SkillsIcon
          src="/src/skills/icon-typescript.svg"
          alt={skillsAlts("typescript")}
        />
        <SkillsIcon src="/src/skills/icon-tailwindcss.svg" alt="Tailwind CSS" />
        <ThemeSensitiveImage
          className="aspect-square w-[3.5em] lg:w-[3em]"
          lightImage="/src/skills/icon-nextjs-black.svg"
          darkImage="/src/skills/icon-nextjs-white.svg"
          alt={skillsAlts("nextjs")}
        />
        <SkillsIcon src="/src/skills/icon-react.svg" alt="React Framework" />
      </div>
      <HorizontalLine className="my-4" />
      <h3 className={h3Classes}>{headerText("tools")}</h3>
      <div className={skillsIconContainerClasses}>
        <SkillsIcon src="/src/skills/icon-git.svg" alt={skillsAlts("git")} />
        <ThemeSensitiveImage
          className="aspect-square w-[3.5em] lg:w-[3em]"
          lightImage="/src/general/icon-github-black.svg"
          darkImage="/src/general/icon-github-white.svg"
          alt={skillsAlts("github")}
        />
      </div>
    </Section>
  );
}
