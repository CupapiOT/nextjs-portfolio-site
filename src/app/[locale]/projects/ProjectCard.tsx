"use client";
import Image from "next/image";
import createTags from "@/components/createTags";
import { useRef, useEffect } from "react";
import ThemeSensitiveImage from "@/components/ThemeSensitiveImage";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface ProjectCardProps {
  id?: string;
  className?: string;
  title: string;
  imgSrc: string;
  desc: string;
  tags: string[];
  gitHubLink?: string | "COMING_SOON";
  websiteLink?: string;
  year?: string[];
}

export default function ProjectCard({
  id,
  className,
  title,
  imgSrc,
  desc,
  tags,
  gitHubLink,
  websiteLink,
  year,
}: ProjectCardProps) {
  // On-load and on-scroll-visible animations.
  const useIntersectionAnimation = (
    ref: React.RefObject<null>,
    className = "animate-slide-in-blur",
    threshold = 0,
  ) => {
    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add(className);
          });
        },
        { threshold },
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [ref, className, threshold]);
  };
  const refImg = useRef(null);
  const refCard = useRef(null);
  const refGitHubLink = useRef(null);
  const refWebsiteLink = useRef(null);
  useIntersectionAnimation(refImg);
  useIntersectionAnimation(refCard);
  useIntersectionAnimation(refGitHubLink);
  useIntersectionAnimation(refWebsiteLink);

  // Constant for translations.
  const projectCardText = useTranslations("projectsPage");

  // Classes to avoid repetition in the code.
  const linkClasses =
    "animate-presets p-2 sm:p-4 rounded-xl bg-(--section-background) flex justify-center transition duration-300";
  const linkImageClasses = "max-w-[3em] aspect-auto";

  return (
    <article
      id={id}
      className={clsx(
        "responsive-width lg:!max-w-9/10 xl:!max-w-4/5 2xl:!max-w-3/5 rounded-xl flex flex-col lg:flex-row gap-4 last:mb-16",
        className || "",
      )}
    >
      <h2 className="font-bold text-3xl flex flex-col gap-y-1 lg:hidden">
        {title}
        {year !== undefined ? (
          <p className="project-year-text">
            ({year[0]}
            {year[1] !== undefined ? "–" + year[1] : ""})
          </p>
        ) : (
          ""
        )}
      </h2>
      <Image
        ref={refImg}
        className="animate-presets w-full aspect-auto object-cover rounded-xl lg:aspect-video lg:w-[min(30rem,40%)]"
        src={imgSrc}
        alt={title}
        width={9999}
        height={9999}
      />
      <div className="lg:h-full flex flex-col gap-y-4 w-full">
        <div
          ref={refCard}
          className="animate-presets -translate-y-1/5 lg:delay-150 blur-xs flex flex-col p-4 rounded-xl bg-(--section-background) gap-y-3"
        >
          <h2 className="hidden font-bold text-3xl flex-col gap-y-1 lg:block">
            {title}
            {year !== undefined ? (
              <p className="project-year-text">
                ({year[0]}
                {year[1] !== undefined ? "–" + year[1] : ""})
              </p>
            ) : (
              ""
            )}
          </h2>
          <p className="text-justify text-gray-700 dark:text-gray-300">
            {desc}
          </p>
          <ul className="flex flex-wrap gap-x-2">{createTags(tags)}</ul>
        </div>
        <div
          className={clsx(
            "grid gap-x-4",
            websiteLink !== undefined &&
              gitHubLink !== undefined &&
              "grid-cols-2",
          )}
        >
          {gitHubLink === "COMING_SOON" ? (
            <p
              ref={refGitHubLink}
              className={clsx(
                linkClasses,
                "gap-x-3 items-center text-neutral-400 italic",
              )}
              title={
                projectCardText("githubAlt") +
                ` (${projectCardText("comingSoon")})`
              }
            >
              <ThemeSensitiveImage
                className={clsx(linkImageClasses, "brightness-50")}
                lightImage="/src/general/icon-github-black.svg"
                darkImage="/src/general/icon-github-white.svg"
                alt={
                  projectCardText("githubAlt") +
                  ` (${projectCardText("comingSoon")})`
                }
              />
              {projectCardText("comingSoon")}
            </p>
          ) : (
            gitHubLink !== undefined && (
              <a
                ref={refGitHubLink}
                className={clsx(linkClasses, "hover:bg-(--contact-button-bg)")}
                href={gitHubLink}
                target="_blank"
                title={projectCardText("githubAlt")}
              >
                <ThemeSensitiveImage
                  className={linkImageClasses}
                  lightImage="/src/general/icon-github-black.svg"
                  darkImage="/src/general/icon-github-white.svg"
                  alt={projectCardText("githubAlt")}
                />
              </a>
            )
          )}
          {websiteLink !== undefined ? (
            <a
              ref={refWebsiteLink}
              className={clsx(linkClasses, "hover:bg-(--contact-button-bg)")}
              href={websiteLink}
              target="_blank"
              title={projectCardText("websiteAlt")}
            >
              <ThemeSensitiveImage
                className={linkImageClasses}
                lightImage="/src/general/icon-link-black.svg"
                darkImage="/src/general/icon-link-white.svg"
                alt={projectCardText("websiteAlt")}
              />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
}
