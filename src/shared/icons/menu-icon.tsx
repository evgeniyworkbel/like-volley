import { IconProps } from "../types";

export function MenuIcon({ className, width, height }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 35 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1.66675"
        x2="34"
        y2="1.66675"
        stroke="#FC5C15"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="1"
        y1="11.6667"
        x2="34"
        y2="11.6667"
        stroke="#FC5C15"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="1"
        y1="21.6667"
        x2="34"
        y2="21.6667"
        stroke="#FC5C15"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
