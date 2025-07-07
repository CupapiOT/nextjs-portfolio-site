"use client";

import { Locale } from "next-intl";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

interface LocaleSwitcherSelectProps {
  children: ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect(props: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const removeBeginningLocaleRegex = /^\/.*\//;
  const endingPath = removeBeginningLocaleRegex.test(pathname)
    ? pathname.replace(removeBeginningLocaleRegex, "/")
    : "";

  function changeLocale(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const newPath = "/" + nextLocale + endingPath;
    startTransition(() => {
      router.replace(newPath);
    });
  }

  return (
    <>
      <label
        htmlFor="locale-switcher-select"
        className={
          "fixed top-15 z-100 text-sm self-center" +
          (isPending ? " transition-opacity [&:disabled]opacity-30" : "")
        }
      >
        <p className="sr-only">{props.label}</p>
        <select
          className="p-0.5 text-gray-400 dark:text-gray-600 bg-transparent focus:text-gray-700 focus:bg-[#ffffff] focus:dark:text-gray-300 focus:dark:bg-[#222222] rounded-t-lg border-none cursor-pointer"
          name="locale-switcher-select"
          id="locale-switcher-select"
          defaultValue={props.defaultValue}
          disabled={isPending}
          onChange={changeLocale}
        >
          {props.children}
        </select>
      </label>
    </>
  );
}
