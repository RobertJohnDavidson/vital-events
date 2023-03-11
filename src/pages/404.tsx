import { type NextPage } from "next";
import Head from "next/head";
import { createClient } from "next-sanity";
import { GetStaticProps } from "next";
import Card from "../components/Card/Card";
const ErrorPage: NextPage<{ events: Event[] }> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white bg-gradient-to-t ">
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
export default ErrorPage;
