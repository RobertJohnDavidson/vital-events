import { type NextPage } from "next";
import Head from "next/head";
import { createClient } from "@sanity/client";
import type { GetStaticProps } from "next";
import { useNextSanityImage } from "next-sanity-image";
import Carousel from "../components/Carousel/Carousel";
import Image from "next/image";
import type { Event, Brand } from "../types/types";
import type {
  SanityImageObject,
  SanityAsset,
} from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: "z85r7ph3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-02",
});

const Home: NextPage<{ events: Event[]; brands: Brand[] }> = ({
  events,
  brands,
}) => {
  console.log(events);
  return (
    <>
      <Head>
        <title>Vital Events</title>
        <meta name="description" content="Vital Events homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow flex-col justify-between bg-white">
        <Carousel events={events} />
        {/*Our Brands*/}
        <div>
          <h1 className="pt-10 pb-4 text-center text-5xl font-[700] text-gray-800">
            Our Brands
          </h1>
          <div className="grid items-center justify-center gap-8 px-20 py-4 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map(({ _id, name, imgURL, description }) => (
              <div
                className="flex h-full flex-col items-start justify-start"
                key={_id}
              >
                <ImageBuilder imgURL={imgURL} name={name} />
                <div>
                  <h2 className=" text-left text-2xl font-bold text-gray-700 ">
                    {name}
                  </h2>
                  <p className="text-left text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

const ImageBuilder = ({
  imgURL,
  name,
}: {
  imgURL: SanityImageObject;
  name: string;
}) => {
  const imageProps = useNextSanityImage(client, imgURL);
  console.log(imgURL);
  return (
    <>
      <Image
        {...imageProps}
        alt={name}
        style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events: Event[] = await client.fetch(`*[_type == "event"]{
    _id,
    title,
    promoters,
    venue,
    date,
    link,
    imgURL,
    carouselImgURL
  }`);
  const brands: Brand[] = await client.fetch(`*[_type == "brand"]{
    _id,
    name,
    imgURL{
					asset->{
						...,
						metadata
					}
				},
    description,
    link
  }`);

  return {
    props: {
      events,
      brands,
    },
  };
};
export default Home;
