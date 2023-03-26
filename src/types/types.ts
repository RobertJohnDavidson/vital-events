import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type Event = {
  _id: string;
  title: string;
  promoters: string;
  venue: string;
  date: string;
  link: string;
  imgURL: string;
  carouselImgURL: string;
};
export type Brand = {
  _id: string;
  name: string;
  imgURL: SanityImageObject;
  description: string;
  link: string;
};
