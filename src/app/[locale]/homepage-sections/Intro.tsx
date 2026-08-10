import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Intro({
  id,
  className,
  fadeInDirection,
}: SectionProps) {
  const t = useTranslations("homePage.intro");
  return (
    <Section
      id={id}
      fadeInDirection={fadeInDirection}
      className={clsx("!bg-(--intro-background)", className || "")}
    >
      <h2 className="text-center font-extrabold text-2point5xl">{t("text")}</h2>
    </Section>
  );
}
