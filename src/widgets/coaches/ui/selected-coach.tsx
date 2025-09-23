import { Title } from "@/shared/ui";
import Image from "next/image";

export function SelectedCoach() {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-14">
      <Image
        src="/coaches/golodukhin.png"
        width={314}
        height={438}
        alt="Фото тренера Владислав Голодухин"
      />
      <div className="flex flex-col gap-5 xl:items-end xl:justify-center">
        <div className="flex flex-col items-center gap-2.5 text-nowrap xl:items-start">
          {/* помню про заголвки в 32px, но он ломает верстку */}
          <Title className="text-[28px] text-foreground xl:text-[44px]">
            Владислав Голодухин
          </Title>
          <p className="text-center text-wrap text-foreground-secondary">
            {`Основатель волейбольной школы\n`}
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </div>
        <p className="flex max-w-76 items-center text-center text-sm xl:max-w-151 xl:text-left xl:text-lg">
          Профессиональный тренер по волейболу с более чем 10-летним опытом
          работы. Специализируется на развитии техники, командной стратегии и
          физической подготовки игроков. Его подход сочетает дисциплину и
          мотивацию, помогая спортсменам достигать высоких результатов на
          площадке.
        </p>
      </div>
    </div>
  );
}
