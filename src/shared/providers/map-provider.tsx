"use client";

import Script from "next/script";
import React, { PropsWithChildren, useState } from "react";
import ReactDOM from "react-dom";
import { MapContext } from "@/shared/lib";
import type { MapContextModel, ReactifiedApiModel, Reactify, UiThemeModel } from "@/shared/lib";

const YANDEX_MAP_PUBLIC_API_KEY = "be56edf7-c1a9-49b9-887d-5797062fcd1b";
const apiUrl = `https://api-maps.yandex.ru/v3/?apikey=${YANDEX_MAP_PUBLIC_API_KEY}&lang=ru_RU`;

type MapProviderProps = PropsWithChildren;

export function MapProvider({ children }: MapProviderProps) {
  const [reactify, setReactify] = useState<Reactify>();
  const [reactifiedApi, setReactifiedApi] = useState<ReactifiedApiModel>();
  const [uiTheme, setUiTheme] = useState<UiThemeModel>();

  const ctxValue: MapContextModel = { reactify, reactifiedApi, uiTheme };

  return (
    <MapContext value={ctxValue}>
      <Script
        src={apiUrl}
        strategy="lazyOnload"
        onLoad={() => {
          Promise.all([
            ymaps3.import("@yandex/ymaps3-reactify"),
            ymaps3.import.registerCdn(
              "https://cdn.jsdelivr.net/npm/{package}",
              "@yandex/ymaps3-default-ui-theme@latest",
            ),
            ymaps3.ready,
          ]).then(([ymaps3React]) => {
            ymaps3.strictMode = true;
            const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
            const reactified = reactify.module(ymaps3);
            setReactify(reactify);
            setReactifiedApi(reactified);
            ymaps3
              //@ts-expect-error Can't be typed normally
              .import("@yandex/ymaps3-default-ui-theme")
              .then((uiTheme) => {
                setUiTheme(reactify.module(uiTheme) as unknown as UiThemeModel);
              });
          });
        }}
      />
      {children}
    </MapContext>
  );
}
