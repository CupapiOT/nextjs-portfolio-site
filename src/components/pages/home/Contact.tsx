"use client";
import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import Image from "next/image";
import copyTextToClipboard from "@/util/copyTextToClipboard";

interface ContactProps extends SectionProps {
  email?: string;
  githubLink?: string;
  githubName?: string;
  resumeSrc?: string;
}

export default function Contact(props: ContactProps) {
  const buttonClasses =
    "w-full sm:max-w-4/5 lg:max-w-full lg:h-full grid grid-cols-[2em_1fr] items-center p-2 px-5 gap-x-4 bg-(--section-background-lighter) rounded-xl cursor-pointer transform duration-300 hover:bg-(--section-background-lightest) hover:scale-[101%] shadow-none hover:shadow-lg";
  const spanClasses =
    "w-full text-left text-[min(clamp(calc(0.45em+2vw),calc(0.6em+1vw),1em),_1.25em)]";
  return (
    <Section
      id={props.id}
      className={`items-center gap-y-2 ${props.className || ""}`}
    >
      <button
        onClick={() => copyTextToClipboard(props.email)}
        className={buttonClasses + (props.email !== undefined ? "" : " hidden")}
      >
        <Image
          className="aspect-square w-[2em]"
          src="/src/general/icon-email.svg"
          alt="Email Icon"
          width={9999}
          height={9999}
        />
        <span className={spanClasses}>{props.email}</span>
      </button>
      <a
        href={props.githubLink}
        target="_blank"
        className={
          buttonClasses + (props.githubLink !== undefined ? "" : " hidden")
        }
      >
        <Image
          className="aspect-square w-[2em]"
          src="/src/general/icon-github.svg"
          alt="Github Icon"
          width={9999}
          height={9999}
        />
        <span className={spanClasses}>{props.githubName}</span>
      </a>
      <a
        href={props.resumeSrc}
        target="_blank"
        className={
          buttonClasses + (props.resumeSrc !== undefined ? "" : " hidden")
        }
      >
        <Image
          className="aspect-square w-[2em]"
          src="/src/general/icon-docs.svg"
          alt="Document Icon"
          width={9999}
          height={9999}
        />
        <span className={spanClasses}>Download my CV</span>
      </a>
    </Section>
  );
}
