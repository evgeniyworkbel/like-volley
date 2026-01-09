import { Route } from "next";
import { LinkProps } from "next/link";
import { UrlObject } from "url";

export type LinkHref = Exclude<LinkProps<Route>["href"], UrlObject>;

export type IconProps = Pick<
  React.SVGAttributes<SVGElement>,
  "className" | "width" | "height" | "onClick"
>;

export type NavbarProps = { className?: string; onLinkClick?: VoidFunction };
