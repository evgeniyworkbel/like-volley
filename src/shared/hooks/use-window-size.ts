import { useEffect, useState } from "react";

type UseWindowSizeValue = { width: number; height: number };

type UseWindowSizeReturn = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const useWindowSize = (): UseWindowSizeReturn => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeValue>(() => {
    if (typeof window === "undefined") {
      return { width: Number.POSITIVE_INFINITY, height: Number.POSITIVE_INFINITY };
    }
    return { width: window.innerWidth, height: window.innerHeight };
  });

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1280;
  const isDesktop = windowSize.width >= 1280;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
