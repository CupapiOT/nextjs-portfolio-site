import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const localeSwitcherText = useTranslations("localeSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={localeSwitcherText("label")}
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {localeSwitcherText(`localeNames.${cur}`)}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
