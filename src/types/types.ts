import { SanityImageAssetDocument } from "@sanity/client";

export type Event = {
  _id: string;
  title: string;
  promoters: string;
  venue: string;
  date: string;
  endDate: string;
  publishTime: string;
  link: string;
  imgURL: SanityImageAssetDocument;
  carouselImgURL: SanityImageAssetDocument;
};
export type Brand = {
  _id: string;
  name: string;
  imgURL: SanityImageAssetDocument;
  description: string;
  link: string;
};
export type Card = {
  title: string;
  promoters: string;
  venue: string;
  date: string;
  endDate?: string;
  link: string;
  imgURL: SanityImageAssetDocument;
};
