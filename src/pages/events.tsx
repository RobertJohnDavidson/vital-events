import { type NextPage } from "next";
import Head from "next/head";
import { createClient } from "next-sanity";
import { GetStaticProps } from "next";
import Card from "../components/Card/Card";
type Event = {
  _id: string;
  title: string;
  promoters: string;
  venue: string;
  date: string;
  link: string;
  imgURL: string;
};

const Events: NextPage<{ events: Event[] }> = ({ events }) => {
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events organized by Vital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex flex-grow flex-col justify-between bg-white">
        <h1 className="p-8 text-center text-4xl font-bold text-gray-800">
          Upcoming Events
        </h1>
        <div className="grid items-center justify-center gap-8 px-20 py-8 text-center sm:grid-cols-1">
          {sortedEvents.map(
            ({ _id, title, promoters, venue, date, link, imgURL }) => (
              <div className="flex justify-center">
                <Card
                  key={_id}
                  title={title}
                  promoters={promoters}
                  venue={venue}
                  date={new Date(date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                  link={link}
                  imgURL={imgURL}
                />
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
};
export default Events;
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
      'imgURL': image.asset->url
    }`);
  return {
    props: {
      events,
    },
  };
};
