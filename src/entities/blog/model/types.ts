import { Post } from "@/shared/cms/payload-types";

export type PostCardProps = Pick<
  Post,
  "id" | "title" | "category" | "shortDescription" | "readTime" | "createdAt"
>;

export type BadgeProps = Extract<PostCardProps["category"], object>;
