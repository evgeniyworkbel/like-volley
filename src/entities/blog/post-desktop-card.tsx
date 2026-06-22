// import Image from "next/image";
// import Link from "next/link";

// import { DateWithReadTime } from "./date-with-read-time";
// import { Badge } from "./badge";
// import { PostCardProps } from "./model/types";

// type PostDesktopCardProps = PostCardProps;

// export function PostDesktopCard({
//   id,
//   title,
//   shortDescription,
//   readTime,
//   createdAt,
// }: PostDesktopCardProps) {
//   return (
//     <Link
//       className="group hidden gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] xl:flex xl:flex-col"
//       href={`/blog/${id}`}
//     >
//       <div className="aspect-[1.216 ] relative w-76 overflow-hidden rounded-2xl">
//         <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
//       </div>
//       <div className="flex flex-col justify-center gap-6 p-3">
//         {/* <Badge label={cat} /> */}
//         <hgroup className="flex flex-col gap-3">
//           <h2 className="text-lg font-bold transition-colors duration-200 group-hover:text-accent-orange">
//             {title}
//           </h2>
//           <p className="line-clamp-3 text-sm xl:text-lg">{shortDescription}</p>
//         </hgroup>
//         <div className="flex items-center justify-between">
//           <DateWithReadTime date={createdAt} readTime={readTime} />
//           <div className="flex h-10 w-12 bg-[oklch(0.9846_0.0017_247.84)]"></div>
//         </div>
//       </div>
//     </Link>
//   );
// }
