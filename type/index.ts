import { StaticImageData } from "next/image";

export interface ProjectDetail {
  title: string;
  subTitle: string;
  backgroundImg: string | StaticImageData;
  projectUrl: string;
}
