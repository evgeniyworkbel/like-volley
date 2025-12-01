import type { Reactify, ReactifiedModule } from "@yandex/ymaps3-types/reactify";
import type {
  YMapProps,
  YMapLocationRequest,
  LngLat,
  LngLatBounds,
  ZoomRange,
} from "@yandex/ymaps3-types/imperative";
import type { YMapZoomControl } from "@yandex/ymaps3-types/packages/controls/react";
import type { YMapDefaultMarker } from "@yandex/ymaps3-types/packages/markers/react";
import type { YMapDefaultMarkerProps } from "@yandex/ymaps3-types/packages/markers";

type ReactifiedApiModel = ReactifiedModule<typeof ymaps3>;
type UiThemeModel = {
  YMapZoomControl: typeof YMapZoomControl;
  YMapDefaultMarker: typeof YMapDefaultMarker;
};
type DefaultMarkerProps = YMapDefaultMarkerProps & {
  size: "normal" | "small" | "micro";
  iconName: "fallback";
  redirectLink: string;
};

export type {
  Reactify,
  ReactifiedApiModel,
  UiThemeModel,
  YMapProps,
  YMapLocationRequest,
  DefaultMarkerProps,
  LngLat,
  LngLatBounds,
  ZoomRange,
};
