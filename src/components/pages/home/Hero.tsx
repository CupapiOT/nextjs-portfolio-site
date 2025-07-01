import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import Image from "next/image";

export default function Hero(props: SectionProps) {
  return (
    <Section id={props.id} className={`grid grid-rows-[min-content_1fr_min-content] aspect-auto gap-y-1 sm:aspect-square ${props.className || ""}`}>
    </Section>
  );
}
