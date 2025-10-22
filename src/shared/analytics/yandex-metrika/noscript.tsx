import Image from "next/image";
import { YM_COUNTER_ID } from "./config";

export function YandexMetrikaNoscript() {
  return (
    <noscript>
      <Image
        className="sr-only"
        src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
        width={1}
        height={1}
        alt=""
      />
    </noscript>
  );
}
