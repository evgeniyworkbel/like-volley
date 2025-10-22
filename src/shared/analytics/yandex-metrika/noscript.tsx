import { YM_COUNTER_ID } from "./config";

export function YandexMetrikaNoscript() {
  return (
    <noscript>
      <picture>
        <img
          className="sr-only"
          src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
          alt=""
        />
      </picture>
    </noscript>
  );
}
