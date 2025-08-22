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
        <nav className="flex items-center gap-15 font-bold">
          <Link href={home.href}>{home.title}</Link>
          <Link href={blog.href}>{blog.title}</Link>
          <Link href={about.href}>{about.title}</Link>
          <Link href={reviews.href}>{reviews.title}</Link>
          <Link className="text-orange-500" href={phone.href}>
            {phone.title}
          </Link>
        </nav>
      </div>
    </header>
  );
}
