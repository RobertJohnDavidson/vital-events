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
  console.log(link);
  return (
    //a card component that will be used to display events
    <div className="flex w-full max-w-sm rounded bg-slate-50 shadow-lg lg:max-w-full">
      {/* image for card */}
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover lg:h-full lg:w-48"
          src={imgURL}
          alt="Event Image"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        {/* title of event */}
        <div className="flex-1">
          <div className="mb-2 text-sm font-bold">{promoters} Present</div>
          <div className="text-xl font-semibold text-gray-900">{title}</div>
          <div className="mt-3 text-base text-gray-500">{venue}</div>
        </div>
        {/* date and ticket link */}
        <div className="mt-6 flex flex-col items-center">
          <div className="flex-shrink-0">
            <span>{date}</span>
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium text-gray-900">
              <a href={link} className="hover:underline">
                Buy Tickets
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
