import { YandexMetrikaNoscript } from "./noscript";
import { YandexMetrikaScript } from "./script";

export function YandexMetrika() {
  return (
    <>
      <YandexMetrikaScript />
      <YandexMetrikaNoscript />
    </>
  );
}
