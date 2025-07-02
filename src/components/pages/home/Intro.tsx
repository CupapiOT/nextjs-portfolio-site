import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";

export default function Intro(props: SectionProps) {
  return (
    <Section id={props.id} className={`bg-cyan-950 ${props.className || ""}`}>
      <h2 className="text-center font-extrabold text-2point5xl">
        Student & Developer
      </h2>
    </Section>
  );
}
