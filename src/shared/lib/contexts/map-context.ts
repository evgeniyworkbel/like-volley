"use client";

import { createContext, use } from "react";
import { ReactifiedApiModel, Reactify, UiThemeModel } from "../types";

export type MapContextModel = {
  reactify?: Reactify;
  reactifiedApi?: ReactifiedApiModel;
  uiTheme?: UiThemeModel;
};

export const MapContext = createContext<MapContextModel>({});

export const useMapContext = () => {
  const ctx = use(MapContext);
  if (!ctx) throw new Error("useMapContext must be placed under MapContext");
  return ctx;
};
