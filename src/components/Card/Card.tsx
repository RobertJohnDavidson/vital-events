import styles from "./Card.module.css";
type Card = {
  title: string;
  promoters: string;
  venue: string;
  date: string;
  link: string;
  imgURL: string;
};

const Card = ({ title, promoters, venue, date, link, imgURL }: Card) => {
  return (
    //a card component that will be used to display events
    <div className="flex max-w-sm flex-col justify-center rounded bg-slate-50 p-4 shadow-lg ">
      {/* image for card */}
      <div className="relative mx-auto h-[20rem] w-[20rem] overflow-hidden ">
        <img
          className="absolute h-full w-full object-cover"
          src={imgURL}
          alt="Event Image"
        />
        <div
          className="absolute bottom-0 flex h-1/2  w-full  flex-row
        items-center justify-center rounded-xl bg-gradient-to-t from-gray-900 opacity-50"
        >
          {" "}
        </div>
      </div>
      {/* card content */}
      <div className="flex flex-col items-start justify-center gap-2 p-4">
        <p className="text-sm font-light text-gray-500">{promoters}</p>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm font-light text-gray-500">{venue}</p>
        <p className="text-sm font-light text-gray-500">{date}</p>

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
