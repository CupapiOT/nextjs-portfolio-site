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
      <p className="w-full self-center sm:max-w-9/10 lg:max-w-full text-gray-600 dark:text-gray-400 text-justify text-base min-sm:max-lg:text-lg">
        Hey, Marvel Orleans here. 👋 I&apos;m a highshooler in Indonesia with a
        passion in programming. I&apos;ve been teaching myself to code for a
        over two years now, and I&apos;ve built some side projects to show for
        it. So, if you&apos;ve got a project you&apos;d like to work on, feel
        free to contact me.
      </p>
    </Section>
  );
}
