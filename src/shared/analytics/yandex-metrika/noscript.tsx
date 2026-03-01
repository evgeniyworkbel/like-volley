import { YM_COUNTER_ID } from "./config";

export function YandexMetrikaNoscript() {
  console.log("noscript YM_COUNTER_ID", YM_COUNTER_ID, process.env.IS_CUSTOM_VPS);
  console.log(
    "noscript process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID",
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  );

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<div><img src="https://mc.yandex.ru/watch/${YM_COUNTER_ID}" style="position:absolute; left:-9999px;" alt="" /></div>`,
      }}
    ></noscript>
  );
}
