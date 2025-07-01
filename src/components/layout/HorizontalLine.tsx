export interface HorizontalLineProps {
  width?: string;
  className?: string;
}
export default function HorizontalLine(props: HorizontalLineProps) {
  return (
    <div
      className={`horizontal-line flex-grow h-0.5 bg-(--horizontal-line-color) self-center ${props.width !== undefined ? "w-" + props.width : "w-95/100"} ${props.className || ""}`}
    ></div>
  );
}
