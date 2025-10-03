import { Title } from "@/shared/ui";

export default function NotFound() {
  return (
    <section className="relative flex flex-col items-center gap-12 px-[24px] pt-30 pb-[170px] xl:px-115">
      <h1 className="font-shantell text-[74px] text-foreground xl:text-9xl">
        4<span className="text-accent-orange">0</span>4
      </h1>
      <Title className="text-2xl text-foreground xl:text-[40px]">
        Страница не найдена :(
      </Title>
      <video autoPlay loop muted playsInline>
        <source src="/not-found/like-volley.webm" />
        <source src="/not-found/like volley.mp4" />
      </video>
    </section>
  );
}

/* <div className="relative flex h-[226px] w-full xl:h-[380px] xl:w-[518px]"></div> */
