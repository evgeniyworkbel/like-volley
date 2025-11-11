import {
  DefaultMarkerProps,
  getBounds,
  LngLatBounds,
  YMapLocationRequest,
  ZoomRange,
} from "@/shared/lib";
import { CompanyCities } from "./types";

export const locationsZoomRange: ZoomRange = { min: 11, max: 13 };

export const restrictArea: Record<CompanyCities, LngLatBounds> = {
  minsk: [
    // [27.425, 53.868232],
    // [27.656802, 53.925534],
    [27.4, 53.832],
    [27.7, 53.97],
  ],
  brest: [
    // [23.69276, 52.089197],
    // [23.773761, 52.105637],
    // @todo определить для Бреста рестрикт эрию
    [23.69276, 52.089197],
    [23.773761, 52.105637],
  ],
};

// @todo: определиться надо ли (либо xерез bounds делать)
export const locationsCenters: Record<CompanyCities, YMapLocationRequest> = {
  minsk: { center: [27.580094, 53.905741], zoom: 13 },
  brest: { center: [23.733261, 52.097418], zoom: 13 },
};

const initialMarkerProps: Pick<
  DefaultMarkerProps,
  "size" | "color" | "iconName"
> = {
  size: "normal",
  color: "darkblue",
  iconName: "fallback",
};

export const locationsMarkers: Record<
  CompanyCities,
  Array<DefaultMarkerProps>
> = {
  minsk: [
    {
      ...initialMarkerProps,
      id: "m1",
      title: "ул. Столетова, 1",
      coordinates: [27.62077, 53.907673],
      redirectLink: "https://yandex.by/maps/-/CLCIrR6n",
    },
    {
      ...initialMarkerProps,
      id: "m2",
      title: "ул. Пинская, 18",
      coordinates: [27.516673, 53.904119],
      redirectLink: "https://yandex.by/maps/-/CLCIvEmM",
    },
    {
      ...initialMarkerProps,
      id: "m3",
      title: "пр. Партизанский, 117А",
      coordinates: [27.656802, 53.868232],
      redirectLink: "https://yandex.by/maps/-/CLCYAM1V",
    },
    {
      ...initialMarkerProps,
      id: "m4",
      title: "ул. Каменногорская, 70",
      coordinates: [27.425, 53.925534],
      redirectLink: "https://yandex.by/maps/-/CLCYNW6g",
    },
    {
      ...initialMarkerProps,
      id: "m5",
      title: "ул. Ванеева, 32",
      coordinates: [27.605498, 53.876993],
      redirectLink: "https://yandex.by/maps/-/CLCYRU01",
    },
  ],
  brest: [
    {
      ...initialMarkerProps,
      id: "b1",
      title: "ул. Дзержинского, 46",
      coordinates: [23.695943, 52.089197],
      redirectLink: "https://yandex.by/maps/-/CLCMfJ~g",
    },
    {
      ...initialMarkerProps,
      id: "b2",
      title: "ул. Мицкевича, 41",
      coordinates: [23.69276, 52.098805],
      redirectLink: "https://yandex.by/maps/-/CLCMfKml",
    },
    {
      ...initialMarkerProps,
      id: "b3",
      title: "ул. Московская, 348/3",
      coordinates: [23.773761, 52.105637],
      redirectLink: "https://yandex.by/maps/-/CLCMjE81",
    },
  ],
};

const locationsCoordinates: Record<
  CompanyCities,
  Array<DefaultMarkerProps["coordinates"]>
> = {
  minsk: locationsMarkers.minsk.map((item) => item.coordinates),
  brest: locationsMarkers.brest.map((item) => item.coordinates),
};

export const locationsBounds: Record<CompanyCities, LngLatBounds> = {
  minsk: getBounds(locationsCoordinates.minsk),
  brest: getBounds(locationsCoordinates.brest),
};
