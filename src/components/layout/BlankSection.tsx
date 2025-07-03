"use client";

import React from "react";
import { useEffect, useRef } from "react";

export interface BlankSectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  fadeInDirection?:
    | "up"
    | "UP"
    | "down"
    | "DOWN"
    | "left"
    | "LEFT"
    | "right"
    | "RIGHT"
    | "none"
    | "NONE";
}

export default function BlankSection(props: BlankSectionProps) {
  // This code before the return statement just handles animations.
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.add(
            "animate-slide-in-blur"
          );
        });
      },
      { threshold: 0 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let whichDirection: string;
  switch (props.fadeInDirection) {
    case "up":
    case "UP":
      whichDirection = "-translate-y-1/3";
      break;
    case "down":
    case "DOWN":
      whichDirection = "translate-y-1/3";
      break;
    case "right":
    case "RIGHT":
      whichDirection = "-translate-x-1/3";
      break;
    case "left":
    case "LEFT":
      whichDirection = "translate-x-1/3";
      break;
    case "none":
    case "NONE":
    default:
      whichDirection = "";
      break;
  }

  return (
    <section
      id={props.id}
      ref={ref}
      className={`animate-presets blur-xs ${whichDirection} w-95/100 responsive-width flex flex-col bg-(--section-background) justify-center rounded-xl p-5 
        ${props.className || ""}`}
    >
      {props.children}
    </section>
  );
}
