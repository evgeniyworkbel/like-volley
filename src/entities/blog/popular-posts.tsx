import Link from "next/link";
import { ContainerWithShadow } from "@/shared/ui/container-with-shadow";
import { RightIcon } from "@/shared/icons";
import { navLinks } from "@/shared/constants";

type PopularPostsProps = React.PropsWithChildren;

export function PopularPosts({ children }: PopularPostsProps) {
  return (
    <ContainerWithShadow className="hidden rounded-b-none xl:flex">
      <section className="flex flex-col gap-6 xl:gap-10 xl:px-20 xl:py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl text-[28px] font-bold text-accent-orange">
            <span className="text-foreground">Популярные</span> новости
          </h1>
          <Link className="flex items-center gap-2" href={navLinks.news.href}>
            <span className="text-[20px] font-bold text-accent-orange">Еще новости</span>
            <span className="flex size-8.5 items-center justify-center rounded-full border border-accent-orange">
              <RightIcon className="text-accent-orange" />
            </span>
          </Link>
        </div>
        {children}
      </section>
    </ContainerWithShadow>
  );
}
