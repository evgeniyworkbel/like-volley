import { ImageProps } from "next/image";

export type IconProps = Pick<
  React.SVGAttributes<SVGElement>,
  "className" | "width" | "height" | "onClick"
>;

export type Coach = Pick<ImageProps, "alt" | "src"> & {
  name: string;
  description: string;
};
