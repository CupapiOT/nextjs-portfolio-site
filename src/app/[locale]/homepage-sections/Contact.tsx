"use client";
import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import clsx from "clsx";
import copyTextToClipboard from "@/util/copyTextToClipboard";
import ThemeSensitiveImage from "@/components/ThemeSensitiveImage";
import { useTranslations } from "next-intl";

/**
 * We use an interface here so it's easily customizable in the homepage
 * later on.
 */
interface ContactProps extends SectionProps {
  email?: string;
  githubLink?: string;
  githubName?: string;
  resumeSrc?: string;
}

export default function Contact({
  id,
  className,
  fadeInDirection,
  email,
  githubName,
  githubLink,
  resumeSrc,
}: ContactProps) {
  const buttonClasses =
    "w-full sm:max-w-4/5 lg:max-w-full lg:h-full grid grid-cols-[2em_1fr] items-center p-2 px-5 gap-x-4 rounded-xl cursor-pointer " +
    "bg-(--contact-button-bg) hover:bg-(--contact-button-hover) transform duration-300 hover:scale-[101%] hover:shadow-md dark:hover:shadow-lg";
  const spanClasses =
    "w-full text-left text-[min(clamp(calc(0.45em+2vw),calc(0.6em+1vw),1em),_1.25em)] " +
    "max-[24rem]:text-sm max-[22rem]:text-[0.75em]";
  const imgClasses = "aspect-square w-8 max-[24rem]:w-6";
  const contactText = useTranslations("homePage.contact");
  const skillsAlts = useTranslations("iconsAlt");
  return (
    <Section
      id={id}
      className={clsx("items-center gap-y-2", className || "")}
      fadeInDirection={fadeInDirection}
    >
      <button
        onClick={() => copyTextToClipboard(email)}
        className={buttonClasses + (email !== undefined ? "" : " hidden")}
        title={contactText("copyEmail")}
      >
        <ThemeSensitiveImage
          className={imgClasses}
          lightImage="/src/general/icon-email-black.svg"
          darkImage="/src/general/icon-email-white.svg"
          alt={skillsAlts("email")}
        />
        <span className={spanClasses}>{email}</span>
      </button>
      <a
        href={githubLink}
        target="_blank"
        className={buttonClasses + (githubLink !== undefined ? "" : " hidden")}
        title={contactText("visitGitHub")}
      >
        <ThemeSensitiveImage
          className={imgClasses}
          lightImage="/src/general/icon-github-black.svg"
          darkImage="/src/general/icon-github-white.svg"
          alt={skillsAlts("github")}
        />
        <span className={spanClasses}>{githubName}</span>
      </a>
      <a
        href={resumeSrc}
        target="_blank"
        className={buttonClasses + (resumeSrc !== undefined ? "" : " hidden")}
      >
        <ThemeSensitiveImage
          className={imgClasses}
          lightImage="/src/general/icon-docs-black.svg"
          darkImage="/src/general/icon-docs-white.svg"
          alt={skillsAlts("document")}
        />
        <span className={spanClasses}>{contactText("resumeDownload")}</span>
      </a>
    </Section>
  );
}
