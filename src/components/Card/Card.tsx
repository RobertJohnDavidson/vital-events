import { Card } from "../../types/types";
import { ImageBuilder } from "@components/ImageBuilder/ImageBuilder";
const Card = ({ title, promoters, venue, date, link, imgURL }: Card) => {
  return (
    //a card component that will be used to display events
    <div className="z-0 flex h-full flex-col  justify-between rounded bg-slate-50 p-4 shadow-lg lg:w-[80%]  lg:flex-row">
      {/* image for card */}
      <div className="relative mx-auto aspect-square h-[20rem] w-[20rem]   ">
        <ImageBuilder
          imgURL={imgURL}
          name={title}
          style="h-full w-full object-cover"
        />
        <div
          className="absolute bottom-0 flex h-1/2  w-full  flex-row
        items-center justify-center rounded-xl bg-gradient-to-t from-gray-900 opacity-50"
        ></div>
      </div>
      {/* card content */}
      <div className="flex flex-grow flex-col items-start justify-between gap-2 px-0 py-4 lg:px-4 lg:py-0">
        <p className="text-sm font-light text-gray-500 lg:text-lg">
          {promoters}
        </p>
        <h1 className="text-left text-2xl font-bold text-gray-800 lg:text-4xl">
          {title}
        </h1>
        <p className="text-sm font-light text-gray-500 lg:text-lg">{venue}</p>
        <p className="text-sm font-light text-gray-500 lg:text-lg">{date}</p>

        {/* button */}
        <a
          href={link}
          className="rounded-sm bg-purple-800 p-2 text-lg font-bold text-gray-100 shadow-md hover:bg-purple-600"
          target="_blank"
          rel="noreferrer"
        >
          Buy Tickets
        </a>
      </div>
    </div>
  );
};

export default Card;
