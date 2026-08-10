"use client";

import clsx from "clsx";
import { useTheme } from "@teispace/next-themes";
import Image from "next/image";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const sunWidth = 30;
  const moonWidth = 25;

  const sharedClasses = clsx(
    "absolute inset-0 mx-auto",
    "transition-all duration-300",
    "w-fit",
  );

  return (
    <button
      className="relative flex p-3 transition-all duration-300 opacity-50 hover:opacity-75"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Image
        className={clsx(
          sharedClasses,
          "scale-100 rotate-0",
          "dark:scale-0 dark:rotate-90",
        )}
        width={sunWidth}
        height={sunWidth}
        src={"/general/icon-sun.svg"}
        alt={"Toggle dark mode."}
      />
      <Image
        className={clsx(
          sharedClasses,
          "scale-0 rotate-90",
          "dark:scale-100 dark:rotate-0",
        )}
        width={moonWidth}
        height={moonWidth}
        src={"/general/icon-moon.svg"}
        alt={"Toggle light mode."}
      />
    </button>
  );
}
