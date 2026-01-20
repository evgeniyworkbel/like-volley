import { IconProps } from "../types";

export function ArrowIcon({ className, width = 20, height = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6144 10.8015L9.81997 6.00706L5.0255 10.8015L4.2168 9.99283L9.81997 4.38965L15.4231 9.99283L14.6144 10.8015Z"
        fill="currentColor"
      />
      <path d="M9.24219 5.19922H10.3975V15.0192H9.24219V5.19922Z" fill="currentColor" />
    </svg>
  );
}
