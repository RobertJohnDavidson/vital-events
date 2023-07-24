import { type NextPage } from "next";
import Head from "next/head";
import type { GetStaticProps } from "next";
import Carousel from "../components/Carousel/Carousel";
import type { Event, Brand } from "../types/types";
import { ImageBuilder } from "@components/ImageBuilder/ImageBuilder";
import { getClient } from "@lib/sanity";
const Home: NextPage<{ events: Event[]; brands: Brand[] }> = ({
  events,
  brands,
}) => {
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  const filteredEvents = sortedEvents.filter((event) => {
    return new Date(event.date).getTime() > new Date().getTime();
  });
  return (
    <>
      <Head>
        <title>Vital Events</title>
        <meta name="description" content="Vital Events homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow flex-col justify-between bg-white">
        <Carousel events={filteredEvents} />
        {/*Our Brands*/}
        <div>
          <h1 className="pb-4 pt-10 text-center text-5xl font-[700] text-gray-800">
            Our Brands
          </h1>
          <div className="grid items-center justify-center gap-8 px-20 py-4 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map(({ _id, name, imgURL, description, link }) => (
              <div
                className="flex h-full flex-col items-start justify-start"
                key={_id}
              >
                <a href={link} target="_blank" rel="noreferrer">
                  <ImageBuilder
                    imgURL={imgURL}
                    name={name}
                    style="aspect-square h-auto w-full"
                  />
                </a>
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

export const getStaticProps: GetStaticProps = async () => {
  const events: Event[] = await getClient().fetch(`*[_type == "event"]{
    _id,
    title,
    promoters,
    venue,
    date,
    link,
    'imgURL': image.asset->{...,
      metadata},
    'carouselImgURL': carouselImage.asset->{...,
      metadata},
  }`);
  const brands: Brand[] = await getClient().fetch(`*[_type == "brand"]{
    _id,
    name,
    'imgURL':image.asset->{...,
      metadata},
    description,
    link
  }`);

  return {
    props: {
      events,
      brands,
    },
    revalidate: 300,
  };
};
export default Home;
