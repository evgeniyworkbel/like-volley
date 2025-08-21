import { HeaderMenu } from "@/shared/ui";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="flex justify-end w-screen h-27 py-6 px-21 ">
        <HeaderMenu>
          <Link href="page/name" className="font-urbanist">
            Главная
          </Link>
          <Link href="page/name" className="font-urbanist">
            Блог
          </Link>
          <Link href="page/name" className="font-urbanist">
            О школе
          </Link>
          <Link href="page/name" className="font-urbanist">
            Отзывы
          </Link>
          <Link href="page/name" className="font-urbanist text-orange-500">
            +375 25 663 33 22
          </Link>
        </HeaderMenu>
      </div>
    </header>
  );
}
