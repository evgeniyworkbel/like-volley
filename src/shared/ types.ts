import { SVGAttributes } from "react";

export type IconPropsType = Pick<
  SVGAttributes<SVGElement>,
  "className" | "width" | "height"
>;
