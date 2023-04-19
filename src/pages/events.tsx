import { type NextPage } from "next";
import Head from "next/head";
import type { GetStaticProps } from "next";
import Card from "../components/Card/Card";
import type { Event } from "../types/types";
import { getClient } from "@lib/sanity";
const Events: NextPage<{ events: Event[] }> = ({ events }) => {
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  const filteredEvents = sortedEvents.filter((event) => {
    const pastCurrentDate =
      new Date(event.endDate ? event.endDate : event.date).getTime() >
      new Date().getTime();
    const pastPublishDate =
      new Date(event.publishTime).getTime() < new Date().getTime();
    return pastCurrentDate && pastPublishDate;
  });
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events organized by Vital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex flex-grow flex-col bg-white">
        <h1 className="p-8 text-center text-4xl font-bold text-gray-800">
          Upcoming Events
        </h1>
        <div className="grid items-center justify-center gap-8 px-20 py-8 text-center sm:grid-cols-1">
          {filteredEvents.map(
            ({ _id, title, promoters, venue, date, endDate, link, imgURL }) => (
              <div key={_id} className="flex justify-center">
                <Card
                  title={title}
                  promoters={promoters}
                  venue={venue}
                  date={new Date(date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                  endDate={
                    endDate
                      ? new Date(endDate).toLocaleDateString("en-us", {
                          weekday: "long",
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : undefined
                  }
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

export const getStaticProps: GetStaticProps = async () => {
  const events: Event[] = await getClient().fetch(`*[_type == "event"]{
      _id,
      title,
      promoters,
      venue,
      date,
      endDate,
      publishTime,
      link,
      'imgURL': image.asset->{...,
        metadata},
    }`);
  return {
    props: {
      events,
    },
    revalidate: 10,
  };
};
