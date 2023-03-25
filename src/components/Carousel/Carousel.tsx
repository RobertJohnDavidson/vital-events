import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "25px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "5px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ events }: { events: Event[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    mobileFirst: true,
    swipeToSlide: true,
  };
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  return (
    <Slider {...settings}>
      {sortedEvents.map((event) => (
        <div
          className="relative mx-auto aspect-video h-auto w-[20rem] max-w-full overflow-hidden "
          key={event._id}
        >
          <img
            className="h-full w-full object-cover"
            src={event.carouselImgURL}
            alt="Event Image"
          />
          <div
            className="absolute bottom-0 flex h-1/2  w-full  flex-row
            items-center justify-center rounded-xl bg-gradient-to-t from-gray-900 opacity-50"
          ></div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
