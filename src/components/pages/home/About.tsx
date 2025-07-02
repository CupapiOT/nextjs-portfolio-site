import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";

export default function About(props: SectionProps) {
  return (
    <Section
      id={props.id}
      className={props.className}
      fadeInDirection={props.fadeInDirection}
    >
      <h2 className="section-header mb-4">Who Am I?</h2>
      <p className="text-gray-400 text-justify !text-base">
        Hey, Marvel Orleans here. 👋 I&apos;m a highshooler in Indonesia with a
        passion in front-end development. I&apos;ve been teaching myself to code
        for a little over two years now. So, if you&apos;ve got a project
        you&apos;d like to work on, feel free to contact me.
      </p>
    </Section>
  );
}
