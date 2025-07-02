import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import Image from "next/image";
import { ReactNode } from "react";
import HorizontalLine from "@/components/layout/HorizontalLine";

interface SkillIconProps {
  src: string;
  alt: string;
}

function SkillsIcon(props: SkillIconProps) {
  return (
    <Image
      className="aspect-square w-[3.5em] lg:w-[3em]"
      src={props.src}
      alt={props.alt}
      title={props.alt}
      width={9999}
      height={9999}
    />
  );
}

interface SkillsH3Props {
  children: ReactNode;
}

function SkillsH3(props: SkillsH3Props) {
  return (
    <h3 className="mb-4 text-center font-medium text-xl lg:text-lg">
      {props.children}
    </h3>
  );
}

export default function Skills(props: SectionProps) {
  const skillsIconContainerClasses =
    "flex gap-3 flex-wrap justify-center self-center w-95/100 sm:max-w-2/3 sm:gap-5 lg:max-w-full";
  return (
    <Section
      id={props.id}
      className={props.className}
      fadeInDirection={props.fadeInDirection}
    >
      <h2 className="section-header mb-6">
        Technologies I&apos;ve Worked With
      </h2>
      <SkillsH3>I&apos;m Best At</SkillsH3>
      <div className="flex justify-center">
        <SkillsIcon
          src="/src/skills/icon-python.svg"
          alt="Python Programming Language"
        />
      </div>
      <HorizontalLine className="my-4" />
      <SkillsH3>I Also Enjoy</SkillsH3>
      <div className={skillsIconContainerClasses}>
        <SkillsIcon src="/src/skills/icon-c.svg" alt="C Programming Language" />
        <SkillsIcon src="/src/skills/icon-html5.svg" alt="HTML Language" />
        <SkillsIcon src="/src/skills/icon-css.svg" alt="CSS Language" />
        <SkillsIcon
          src="/src/skills/icon-javascript.svg"
          alt="Javascript Programming Language"
        />
        <SkillsIcon
          src="/src/skills/icon-typescript.svg"
          alt="Python Programming Language"
        />
        <SkillsIcon src="/src/skills/icon-tailwindcss.svg" alt="Tailwind CSS" />
        <SkillsIcon src="/src/skills/icon-nextjs.svg" alt="NextJS Framework" />
        <SkillsIcon src="/src/skills/icon-react.svg" alt="React Framework" />
      </div>
      <HorizontalLine className="my-4" />
      <SkillsH3>Tools I Use</SkillsH3>
      <div className={skillsIconContainerClasses}>
        <SkillsIcon src="/src/skills/icon-git.svg" alt="Git CLI" />
        <SkillsIcon src="/src/general/icon-github.svg" alt="GitHub Website" />
      </div>
    </Section>
  );
}
