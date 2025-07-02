import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";

export default function About(props: SectionProps) {
  return (
    <Section id={props.id} className={props.className}>
      <h2 className="section-header mb-4">Who Am I?</h2>
      <p className="text-gray-400 text-justify">
        Hey, Marvel Orleans here. 👋 I&apos;m a highshooler in Indonesia with a
        passion in front-end development. If you&apos;ve got a project
        you&apos;d like to work on, feel free to contact me.
      </p>
    </Section>
  );
}
