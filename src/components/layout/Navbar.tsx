"use client";

import React, { useState } from "react";

interface NavbarProps {
  // Example: <Navbar links={[["#home", "Home"], ["#projects", "Projects"]]}></Navbar>
  links: Array<Array<string>>;
  whichLink: number;
}

export default function Navbar(props: NavbarProps) {
  // Select the first link available to show on the site.
  const [whichLink, setWhichLink] = useState(props.links[props.whichLink][0]);
  const createLinks = (links: NavbarProps["links"]) => {
    return (
      <>
        {links.map(([link, name]) => (
          <li className="flex justify-center" key={link}>
            <a
              className={`px-3 py-1 rounded-xl text-center text-(--navbar-link) transition duration-300 ${whichLink === link ? "!text-(--foreground) dark:!text-white font-semibold bg-(--navbar-link-bg)" : "hover:text-(--navbar-link-hover) "}`}
              href={link}
              onClick={() => {
                setWhichLink(link);
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    <header className="z-100 w-full fixed top-0 p-4 self-center flex justify-center backdrop-blur-xs backdrop-darken bg-(--navbar-background) shadow-[0_5px_15px_rgba(255,255,255,0.5)] dark:shadow-[0_5px_15px_rgba(000,000,000,0.5)]">
      <nav className="z-10 flex flex-col justify-center w-min aspect-16/2 p-2 text-md border-solid rounded-2xl bg-(--section-background-lighter) max-w-3/4 sm:max-w-1/2">
        <ul className={`flex w-full justify-between align-center`}>
          {createLinks(props.links)}
        </ul>
      </nav>
    </header>
  );
}
