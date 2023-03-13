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
  const brands = [
    {
      key: 1,
      name: "Wobbleland",
      imgURL: "/wobbleland.png",
      description: "Our premiere bass music festival",
    },
    {
      key: 2,
      name: "Toxic Summer",
      imgURL: "/toxic-summer.png",
      description:
        "A summer festival featuring a variety of bass music artists",
    },
    {
      key: 3,
      name: "Vital Presents",
      imgURL: "/vital-presents.png",
      description: "Regular club nights thrown by vital events",
    },
  ];
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
          <h1 className="p-8 text-center text-4xl font-bold text-gray-800">
            Our Brands
          </h1>
          <div className="grid items-center justify-center gap-8 px-20 py-8 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brands.map(({ key, name, imgURL, description }) => (
              <div
                className="flex flex-col items-start justify-center"
                key={key}
              >
                <img src={imgURL} alt={name} className="h-full w-full" />
                <h2 className=" text-2xl font-bold text-gray-700 ">{name}</h2>
                <p className="text-left text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
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
