"use client";

import { MapProvider } from "@/shared/providers";
import { Map } from "@/shared/ui";
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

export function LocationsMap() {
  const [city, setCity] = useState<CompanyCities>("minsk");
  const location: YMapLocationRequest = { bounds: locationsBounds[city] };

  console.log(location);
  return (
    <div className="relative h-[522px] w-full overflow-hidden rounded-[20px] xl:h-[712px]">
      <select
        className="absolute top-6 left-6 z-10 h-11 w-[160px] rounded-lg bg-white pl-3 text-base focus:outline-none"
        value={city}
        onChange={(e) => {
          const newCity = e.target.value as CompanyCities;
          setCity(newCity);
        }}
      >
        <option value="brest">Брест</option>
        <option value="minsk">Минск</option>
      </select>
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
