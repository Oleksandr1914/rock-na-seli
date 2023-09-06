import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PLink
  extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children: ReactNode;
  size?: "s" | "m";
  href: string;
}
