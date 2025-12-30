import Image from "next/image";

interface ThemeSensitiveImageProps {
  id?: string;
  className?: string;
  lightImage: string;
  darkImage: string;
  alt: string;
  ariaHidden?: boolean;
}

export default function ThemeSensitiveImage({
  className,
  lightImage,
  darkImage,
  alt,
  ariaHidden,
}: ThemeSensitiveImageProps) {
  return (
    <picture className={className}>
      <source srcSet={darkImage} media="(prefers-color-scheme: dark)" />
      <Image
        src={lightImage}
        alt={alt}
        title={alt}
        width={9999}
        height={9999}
        aria-hidden={ariaHidden || false}
      />
    </picture>
  );
}
