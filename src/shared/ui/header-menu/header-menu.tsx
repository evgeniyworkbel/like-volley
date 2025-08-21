import { ReactNode } from "react";

export function HeaderMenu({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-15">{children}</div>;
}
