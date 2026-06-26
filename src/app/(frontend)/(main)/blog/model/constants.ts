import { PostMobileCard, PostDesktopCard } from "@/entities/blog";
import { Post } from "@/shared/cms/payload-types";

type PostProps = Pick<
  Post,
  "id" | "title" | "shortDescription" | "mainPhoto" | "readTime" | "createdAt"
> & {
  category: string;
};

export const TYPES_DEVICES_MAP: Record<
  string,
  { limit: number; postComponent: React.ComponentType<PostProps> }
> = {
  mobile: { limit: 7, postComponent: PostMobileCard },
  desktop: { limit: 13, postComponent: PostDesktopCard },
};
