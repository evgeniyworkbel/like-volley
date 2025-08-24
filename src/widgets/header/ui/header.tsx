import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";

export function Header() {
  const { home, blog, about, reviews, phone } = navLinks;
  return (
    <header className="h-27 px-21 flex justify-between py-6">
      <Image
        src="/logo.png"
        width={89}
        height={59}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="gap-15 flex items-center font-bold">
        <Link href={home.href}>{home.title}</Link>
        <Link href={blog.href}>{blog.title}</Link>
        <Link href={about.href}>{about.title}</Link>
        <Link href={reviews.href}>{reviews.title}</Link>
        <Link className="text-orange-500" href={phone.href}>
          {phone.title}
        </Link>
      </nav>
    </header>
  );
}
