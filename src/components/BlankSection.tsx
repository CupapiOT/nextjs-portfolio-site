"use client";
import { useEffect, useRef } from "react";
import clsx from "clsx";

type FadeInDirection = "UP" | "DOWN" | "LEFT" | "RIGHT" | "NONE";

export interface BlankSectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  fadeInDirection?: FadeInDirection;
}

export default function BlankSection({
  className,
  id,
  children,
  fadeInDirection = "NONE",
}: BlankSectionProps) {
  // This code before the return statement just handles animations.
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-slide-in-blur");
        });
      },
      { threshold: 0 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const whichDirection: Record<FadeInDirection, string> = {
    UP: "lg:-translate-y-1/3",
    DOWN: "lg:translate-y-1/3",
    RIGHT: "lg:-translate-x-1/3",
    LEFT: "lg:translate-x-1/3",
    NONE: "",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={clsx(
        "animate-presets blur-xs w-95/100 responsive-width flex flex-col bg-(--section-background) justify-center rounded-xl p-5 sm:py-7 xl:p-5 delay-0 max-xl:translate-y-1/5",
        whichDirection[fadeInDirection],
        className || "",
      )}
    >
      {children}
    </section>
  );
}
