import { Post, PostCategory } from "@/shared/cms/payload-types";

export type PostCardProps = Pick<
  Post,
  "id" | "title" | "category" | "shortDescription" | "readTime" | "createdAt"
>;

export type BadgeProps = {
  label: PostCategory["label"];
};
