import Link from "next/link";
import { ContainerWithShadow } from "@/shared/ui/container-with-shadow";
import { ArrowTopIcon } from "@/shared/icons";
import { navLinks } from "@/shared/constants";

type PopularPostsProps = React.PropsWithChildren;

export function PopularPosts({ children }: PopularPostsProps) {
  return (
    <ContainerWithShadow className="hidden rounded-b-none xl:flex">
      <section className="flex flex-col gap-6 xl:gap-10 xl:px-20 xl:py-12">
        <div className="flex items-center justify-between font-bold">
          <h1 className="text-6xl text-[28px] text-accent-orange">
            <span className="text-foreground">Популярные</span> новости
          </h1>
          <Link className="flex items-center gap-2" href={navLinks.news.href}>
            <span className="text-xl text-accent-orange">Еще новости</span>
            <span className="flex size-8.5 items-center justify-center rounded-full border border-accent-orange">
              <ArrowTopIcon className="rotate-90 text-accent-orange" />
            </span>
          </Link>
        </div>
        <div className="hidden gap-6 xl:grid xl:grid-cols-4 xl:gap-x-5">{children}</div>
      </section>
    </ContainerWithShadow>
  );
}
