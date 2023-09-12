import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PGallery
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  year: string;
}

export type PhotosType = {
  src: string;
  width: number;
  height: number;
  id: string;
};
