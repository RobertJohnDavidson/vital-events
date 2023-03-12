import { type NextPage } from "next";
import Head from "next/head";
import { createClient } from "next-sanity";
import { GetStaticProps } from "next";
import Carousel from "../components/Carousel/Carousel";

type Event = {
  _id: string;
  title: string;
  promoters: string;
  venue: string;
  date: string;
  link: string;
  imgURL: string;
  carouselImgURL: string;
};

const Home: NextPage<{ events: Event[] }> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Vital Events</title>
        <meta name="description" content="Vital Events homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-grow flex-col justify-between bg-white">
        <Carousel events={events} />
      </div>
      <main className="flex h-full flex-col items-center justify-center bg-white bg-gradient-to-t "></main>
    </>
  );
};

const client = createClient({
  projectId: "z85r7ph3",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-02",
});

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(`*[_type == "event"]{
    _id,
    title,
    promoters,
    venue,
    date,
    link,
    'imgURL': image.asset->url,
    'carouselImgURL': carouselImage.asset->url
  }`);
  return {
    props: {
      events,
    },
  };
};
export default Home;
