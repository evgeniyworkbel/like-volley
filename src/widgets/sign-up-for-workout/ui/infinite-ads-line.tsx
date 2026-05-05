import { cn } from "@/shared/lib";
import styles from "./infinite-ads-line.module.css";

export function InfiniteAdsLine() {
  return (
    <div className="flex max-w-255 items-center bg-accent-blue py-0.5">
      <div className={cn("flex gap-6", styles.infiniteLine)}>
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} className="font-shantell font-bold text-white">
            #LIKEVOLLEY
          </span>
        ))}
      </div>
    </div>
  );
}
