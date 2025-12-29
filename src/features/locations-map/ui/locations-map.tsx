"use client";

import dynamic from "next/dynamic";
import { Chips } from "@/widgets/locations/ui/сhips ";
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

const Map = dynamic(() => import("@/shared/ui/map").then((module) => module.Map));

export function LocationsMap() {
  const [city, setCity] = useState<CompanyCities>("minsk");
  const location: YMapLocationRequest = { bounds: locationsBounds[city] };

  return (
    <div className="flex h-[522px] w-full flex-col items-center gap-5 overflow-hidden rounded-[20px] xl:h-[712px]">
      <Chips city={city} setCity={setCity} />
      <MapProvider>
        <Map
          location={location}
          // restrictMapArea={restrictArea[city]}
          // zoomRange={locationsZoomRange}
          markers={locationsMarkers[city]}
        />
      </MapProvider>
    </div>
  );
}
