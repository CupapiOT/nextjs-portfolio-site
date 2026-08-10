"use client";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const navbarText = useTranslations("navbar");
  const links: { link: Parameters<typeof Link>[0]["href"]; name: string }[] = [
    { link: "/", name: navbarText("home") },
    { link: "/projects", name: navbarText("projects") },
  ];

  // Select the first link available to show on the site.
  const pathname = usePathname();

  return (
    <header className="z-50 w-full fixed top-0 p-6 pt-3 self-center flex justify-center backdrop-blur-xs backdrop-darken bg-(--navbar-background) shadow-[0_5px_15px_rgba(255,255,255,0.5)] dark:shadow-[0_5px_15px_rgba(000,000,000,0.5)]">
      <nav className="z-10 flex flex-col justify-center w-min aspect-16/2 p-2 text-md border-solid rounded-2xl bg-(--section-background-lighter) max-w-3/4 sm:max-w-1/2">
        <ul className="flex w-full justify-between align-center">
          {links.map(({ link, name }, index) => (
            <li className="flex justify-center" key={index}>
              <Link
                className={clsx(
                  "px-3 py-1 rounded-xl text-center text-(--navbar-link) transition duration-300",
                  pathname === link
                    ? "!text-(--foreground) dark:!text-white font-semibold bg-(--navbar-link-bg)"
                    : "hover:text-(--navbar-link-hover",
                )}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
