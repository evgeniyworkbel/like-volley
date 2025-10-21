import { CloseMenu } from "./close-menu";
import { ButtonProps } from "@/shared/ui/button";
import { Navbar } from "./navbar";

export function MobileMenu({ onClick }: ButtonProps) {
  return (
    <div>
      <CloseMenu onClick={onClick} />
      <Navbar className="fixed top-40 left-0 flex w-full flex-col rounded-b-2xl bg-[oklch(1_0_0_/_60%)] pb-5 font-shantell text-2xl backdrop-blur-sm transition-all duration-900 ease-in-out xl:hidden [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline" />
    </div>
  );
}
