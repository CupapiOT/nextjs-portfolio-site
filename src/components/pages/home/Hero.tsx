import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import Image from "next/image";

export default function Hero(props: SectionProps) {
  return (
    <Section
      id={props.id}
      className={`py-3 aspect-auto gap-y-2 ${props.className || ""}`}
    >
      <h1 className="text-4xl text-center font-bold text-cyan-600">
        Marvel Orleans
      </h1>
      <Image
        className="h-min-content object-cover rounded-lg xl:h-full"
        src="/res/Marvel-Orleans.jpeg"
        alt="A picture of Marvel Orleans"
        width={9999}
        height={9999}
      />
      <p className="text-sm font-mono text-center text-gray-300">
        Based in Indonesia
      </p>
    </Section>
  );
}
