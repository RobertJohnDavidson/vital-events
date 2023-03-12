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
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events organized by Vital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex flex-grow flex-col items-center justify-between bg-white">
        <div className="grid items-center justify-center gap-8 px-20 py-8 text-center sm:grid-cols-1 md:grid-cols-2">
          {events.map(
            ({ _id, title, promoters, venue, date, link, imgURL }) => (
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
