"use client";

import { useMapContext, DefaultMarkerProps, YMapProps } from "../lib";

type MapProps = Pick<YMapProps, "location" | "restrictMapArea" | "zoomRange"> & {
  markers: Array<DefaultMarkerProps>;
};

// @todo: попробовать использовать дефолт маркер компонент через npm пакет @yandex/ymaps3-default-ui-theme вместо cdn,
// чтобы избавиться от тайпскрипт дырок и получить больше функционала (из cdn например не работает popup для маркера)
export function Map({ location, restrictMapArea, zoomRange, markers }: MapProps) {
  const { reactify, reactifiedApi, uiTheme } = useMapContext();

  if (!reactify || !reactifiedApi || !uiTheme) return null;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls } = reactifiedApi;
  const { YMapZoomControl, YMapDefaultMarker } = uiTheme;

  const handleMarkerClick = (link: string) => () => window.open(link, "_blank");

  return (
    <YMap
      location={reactify.useDefault(location, [location])}
      restrictMapArea={restrictMapArea}
      zoomRange={zoomRange}
      // behaviors={[]}
    >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapControls position="right">
        <YMapZoomControl />
      </YMapControls>
      {markers.map((item) => (
        <YMapDefaultMarker key={item.id} {...item} onClick={handleMarkerClick(item.redirectLink)} />
      ))}
    </YMap>
  );
}
