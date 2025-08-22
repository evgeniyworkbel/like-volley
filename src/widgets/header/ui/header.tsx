import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants/navigation";

export function Header() {
  const { home, blog, about, reviews, phone } = navLinks;
  return (
    <header>
      <div className="flex justify-between h-27 py-6 px-21">
        <Image
          src="/assets/header.png"
          width={89}
          height={59}
          alt="Header picture"
        />
        <div className="flex items-center gap-15">
          <Link className="font-bold" href={home.href}>
            {home.title}{" "}
          </Link>
          <Link className="font-bold" href={blog.href}>
            {blog.title}
          </Link>
          <Link className="font-bold" href={about.href}>
            {about.title}
          </Link>
          <Link className="font-bold" href={reviews.href}>
            {reviews.title}
          </Link>
          <Link className="font-bold text-orange-500" href={phone.href}>
            {phone.title}
          </Link>
        </div>
      </div>
    </header>
  );
}
