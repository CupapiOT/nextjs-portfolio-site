import Section, {
  BlankSectionProps as SectionProps,
} from "@/components/layout/BlankSection";
import HorizontalLine from "@/components/layout/HorizontalLine";

interface ProjectItemProps {
  title: string;
  desc: string;
  techUsed: string[];
  link?: string;
  year?: string[];
}

export default function Projects(props: SectionProps) {
  return (
    <Section id={props.id} className={props.className}>
    </Section>
  );
}
