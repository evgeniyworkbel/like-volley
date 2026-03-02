import { YM_COUNTER_ID } from "./config";

export function YandexMetrikaNoscript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<div><img src="https://mc.yandex.ru/watch/${YM_COUNTER_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`,
      }}
    ></noscript>
  );
}
