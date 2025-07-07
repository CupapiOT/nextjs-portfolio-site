import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import { useTranslations } from "next-intl";

export default function About(props: SectionProps) {
  const aboutText = useTranslations("homePage.about");
  return (
    <Section
      id={props.id}
      className={props.className}
      fadeInDirection={props.fadeInDirection}
    >
      <h2 className="section-header mb-4">{aboutText("title")}</h2>
      <p className="w-full self-center sm:max-w-9/10 lg:max-w-full text-gray-600 dark:text-gray-400 text-justify text-base min-sm:max-lg:text-lg">
        {aboutText("desc")}
      </p>
    </Section>
  );
}
