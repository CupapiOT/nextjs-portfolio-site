import clsx from "clsx";
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
    <picture className={clsx("relative", className)}>
      <Image
        className={clsx(
          "transition-all duration-300",
          "opacity-100",
          "dark:opacity-0",
        )}
        src={lightImage}
        alt={alt}
        title={alt}
        width={9999}
        height={9999}
        aria-hidden={ariaHidden || false}
      />
      <Image
        className={clsx(
          "absolute inset-0 transition-all duration-300",
          "opacity-0",
          "dark:opacity-100",
        )}
        src={darkImage}
        alt={alt}
        title={alt}
        width={9999}
        height={9999}
        aria-hidden={ariaHidden || false}
      />
    </picture>
  );
}
