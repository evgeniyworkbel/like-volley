"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  const media = window.matchMedia("(max-width: 1279px)");

  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
};

export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(max-width: 1279px)").matches,
    () => false,
  );
}
