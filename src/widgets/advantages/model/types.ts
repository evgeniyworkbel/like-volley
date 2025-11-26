import { ImageProps } from "next/image";

export type AdvantageModel = Required<Pick<ImageProps, "src" | "alt">> & {
  id: number;
  title: string;
  description: string;
};
