import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id", "zh-Hans", "zh-Hant"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/projects": {
      id: "/proyek",
      "zh-Hans": "/项目",
      "zh-Hant": "/項目",
    },
  },
});
