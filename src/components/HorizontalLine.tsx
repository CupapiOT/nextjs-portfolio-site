import clsx from "clsx";

export interface HorizontalLineProps {
  width?: string;
  className?: string;
}

export default function HorizontalLine({width, className}: HorizontalLineProps) {
  return (
    <div
      className={clsx(
        "horizontal-line flex-grow h-0.5 bg-(--horizontal-line-color) self-center",
        width !== undefined ? "w-" + width : "w-95/100",
        className || "",
      )}
    ></div>
  );
}
