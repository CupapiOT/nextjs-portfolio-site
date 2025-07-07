import Image from "next/image";

interface ThemeSensitiveImageProps {
  id?: string;
  className?: string;
  lightImage: string;
  darkImage: string;
  alt: string;
  ariaHidden?: boolean;
}

export default function ThemeSensitiveImage(props: ThemeSensitiveImageProps) {
  return (
    <picture className={props.className}>
      <source srcSet={props.darkImage} media="(prefers-color-scheme: dark)" />
      <Image
        src={props.lightImage}
        alt={props.alt}
        title={props.alt}
        width={9999}
        height={9999}
        aria-hidden={props.ariaHidden || false}
      />
    </picture>
  );
}
