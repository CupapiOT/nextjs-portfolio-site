import React from "react";

export interface BlankSectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export default function BlankSection(props: BlankSectionProps) {
  return (
    <section
      id={props.id}
      className={`flex flex-col bg-(--section-background) justify-center max-w-95/100 w-95/100 rounded-xl p-5 ${props.className || ""}`}
    >
      {props.children}
    </section>
  );
}
