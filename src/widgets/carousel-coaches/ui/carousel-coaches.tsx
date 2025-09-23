"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CoachesCard } from "./coaches-сard";
import { coachesData } from "../model/data";
import { CarouselControls } from "./carousel-controls";
import { Title } from "@/shared/ui";
import Image from "next/image";

export function CarouselCoaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <Image
        src="/coaches/Golodukhin.png"
        width={314}
        height={438}
        alt="Фото тренера Владислав Голодухин"
      />
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2.5 [&_>*]:text-center">
          <Title className="text-foreground">Владислав Голодухин</Title>
          <p className="text-foreground-secondary">
            Основатель волейбольной школы&nbsp;
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </div>
        <p className="flex max-w-76 items-center text-center text-sm">
          Профессиональный тренер по волейболу с более чем 10-летним опытом
          работы. Специализируется на развитии техники, командной стратегии и
          физической подготовки игроков.
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {coachesData.map(({ name, description, imageSrc, alt }) => (
            <div key={name} className="w-full flex-shrink-0">
              <CoachesCard
                name={name}
                description={description}
                imageSrc={imageSrc}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </section>
  );
}
