import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/BlankSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export default function Hero({ id, className, fadeInDirection }: SectionProps) {
  const heroText = useTranslations("homePage.hero");
  return (
    <Section
      id={id}
      className={clsx("py-3 aspect-auto gap-y-2", className || "")}
      fadeInDirection={fadeInDirection}
    >
      <h1 className="text-4xl text-center font-bold text-cyan-600">
        Marvel Orleans
      </h1>
      <Image
        className="h-min aspect-video object-cover object-top rounded-lg lg:h-full"
        src="/profile-photo.webp"
        alt={heroText("profileImgAlt")}
        width={1200}
        height={1200}
        loading="eager"
      />
      <p className="text-sm font-mono text-center text-gray-700 dark:text-gray-300">
        {heroText("location")}
      </p>
    </Section>
  );
}
