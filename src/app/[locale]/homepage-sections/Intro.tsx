import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import { useTranslations } from "next-intl";

export default function Intro(props: SectionProps) {
  const t = useTranslations("homePage.intro");
  return (
    <Section
      id={props.id}
      fadeInDirection={props.fadeInDirection}
      className={`bg-cyan-200 dark:bg-cyan-950 ${props.className || ""}`}
    >
      <h2 className="text-center font-extrabold text-2point5xl">{t("text")}</h2>
    </Section>
  );
}
