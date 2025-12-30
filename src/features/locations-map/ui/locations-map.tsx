"use client";

import dynamic from "next/dynamic";

import { MapProvider } from "@/shared/providers";
import type { YMapLocationRequest } from "@/shared/lib";

import {
  locationsBounds,
  // locationsCenters,
  locationsMarkers,
  // locationsZoomRange,
  // restrictArea,
} from "../model/data";
import { useState } from "react";
import { CompanyCities } from "../model/types";
import { CityButton } from "./city-button";

const Map = dynamic(() => import("@/shared/ui/map").then((module) => module.Map));

export function LocationsMap() {
  const [city, setCity] = useState<CompanyCities>("minsk");
  const location: YMapLocationRequest = { bounds: locationsBounds[city] };

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div className="flex gap-6">
        <CityButton newCity="minsk" selectedCity={city} onClick={() => setCity("minsk")}>
          Минск
        </CityButton>
        <CityButton newCity="brest" selectedCity={city} onClick={() => setCity("brest")}>
          Брест
        </CityButton>
      </div>
      <div className="flex h-[522px] w-full flex-col gap-5 overflow-hidden rounded-[20px] xl:h-178">
        <MapProvider>
          <Map
            location={location}
            // restrictMapArea={restrictArea[city]}
            // zoomRange={locationsZoomRange}
            markers={locationsMarkers[city]}
          />
        </MapProvider>
      </div>
    </div>
  );
}
