import Image from "next/image";

export function Banner() {
  return (
    <div className="flex flex-col gap-32 px-20 py-[50px]">
      <Image
        src="/banner.svg"
        width={1280}
        height={297}
        alt="Логотип школы волейбола Like Volley"
      />
    </div>
  );
}
