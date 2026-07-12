import { NavTabModel } from "../model/types";
import { NavTab } from "./navtab";

type BlogNavigationProps = { items: NavTabModel[] };

export async function BlogNavigation({ items }: BlogNavigationProps) {
  return (
    <section className="flex justify-center border-b border-b-[oklch(0.9197_0.004_286.32)] xl:w-full">
      <NavTab label="Все новости"></NavTab>
      {items.map((item) => (
        <NavTab key={item.id} id={item.id} label={item.label} />
      ))}
    </section>
  );
}
