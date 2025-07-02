import Image from "next/image";
import createTags from "@/components/layout/createTags";

interface ProjectCardProps {
  id?: string;
  className?: string;
  title: string;
  imgSrc: string;
  desc: string;
  techUsed: string[];
  link?: string;
  year?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article
      id={props.id}
      className={
        "responsive-width lg:!max-w-9/10 xl:!max-w-4/5 2xl:!max-w-3/5 rounded-xl flex flex-col lg:flex-row gap-4 last:mb-16" +
        (props.className || "")
      }
    >
      <h2 className="font-bold text-3xl flex flex-col gap-y-1 lg:hidden">
        {props.title}
        {props.year !== undefined ? (
          <p className="text-sm text-gray-500">
            ({props.year[0]}
            {props.year[1] !== undefined ? "–" + props.year[1] : ""})
          </p>
        ) : (
          ""
        )}
      </h2>
      <Image
        className="w-full aspect-auto object-cover rounded-xl lg:aspect-video lg:w-4/10"
        src={props.imgSrc}
        alt={props.title}
        width={9999}
        height={9999}
      />
      <div className="lg:h-full flex flex-col gap-y-4">
        <div className="flex flex-col p-4 rounded-xl bg-(--section-background) gap-y-3">
          <h2 className="hidden font-bold text-3xl flex-col gap-y-1 lg:block">
            {props.title}
            {props.year !== undefined ? (
              <p className="text-sm text-gray-500">
                ({props.year[0]}
                {props.year[1] !== undefined ? "–" + props.year[1] : ""})
              </p>
            ) : (
                ""
              )}
          </h2>
          <p className="text-justify text-gray-300">{props.desc}</p>
          <ul className="flex flex-wrap gap-x-2">{createTags(props.techUsed)}</ul>
        </div>
        {props.link !== undefined ? (
          <a
            className="p-2 rounded-xl bg-(--section-background) flex justify-center transition duration-300 hover:bg-(--section-background-lighter)"
            href={props.link}
            target="_blank"
          >
            <Image
              className="w-min aspect-auto"
              src="/src/general/icon-link.svg"
              alt="Link to this project"
              title="Link to this project"
              width={9999}
              height={9999}
            />
          </a>
        ) : (
            <p className="p-2 rounded-xl bg-(--section-background) flex justify-center transition duration-300 hover:bg-(--section-background-lighter) gap-x-3 items-center text-neutral-400 italic">
              <Image
                className="w-min aspect-auto brightness-50"
                src="/src/general/icon-link.svg"
                alt="Link to this project"
                title="Link to this project"
                width={9999}
                height={9999}
              />
              Coming Soon!
            </p>
          )}
      </div>
    </article>
  );
}
