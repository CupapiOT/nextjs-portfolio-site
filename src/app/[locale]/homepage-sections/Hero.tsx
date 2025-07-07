import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero(props: SectionProps) {
  const heroText = useTranslations("homePage.hero");
  return (
    <Section
      id={props.id}
      className={`py-3 aspect-auto gap-y-2 ${props.className || ""}`}
      fadeInDirection={props.fadeInDirection}
    >
      <h1 className="text-4xl text-center font-bold text-cyan-600">
        Marvel Orleans
      </h1>
      <Image
        className="h-min aspect-video object-cover rounded-lg lg:h-full"
        src="/src/profile-photo.webp"
        alt={heroText("profileImgAlt")}
        width={9999}
        height={9999}
      />
      <p className="text-sm font-mono text-center text-gray-700 dark:text-gray-300">
        {heroText("location")}
      </p>
    </Section>
  );
}
