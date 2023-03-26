import { useNextSanityImage } from "next-sanity-image";
import type { SanityImageAssetDocument } from "@sanity/client";
import Image from "next/image";
import { getClient } from "@lib/sanity";
export function ImageBuilder({
  imgURL,
  name,
  style,
}: {
  imgURL: SanityImageAssetDocument;
  name: string;
  style: string;
}) {
  const client = getClient();
  const imageProps = useNextSanityImage(client, imgURL);
  return (
    <Image
      {...imageProps}
      className={style}
      alt={name}
      placeholder="blur"
      blurDataURL={imgURL?.metadata.lqip}
    />
  );
}
