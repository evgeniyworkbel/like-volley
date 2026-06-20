import { Post } from "@/shared/cms/payload-types";

export type PostCardProps = Pick<
  Post,
  "id" | "title" | "shortDescription" | "readTime" | "createdAt"
>;
