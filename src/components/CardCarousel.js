import Slider from "react-slick";
import ProfyleImage from "../images/empregado.jpg";
import { CardEmployer } from "./CardEmployer";
import { ProfileImage } from "./ProfileImage";

export function CardCarousel({ employers, cardCollor }) {
  // configurações do carrossel
  const image = ProfyleImage;
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <Slider key={employers.length} {...settings}>
      {employers.map((p, i) => (
        <CardEmployer key={i} cardCollor={cardCollor}>
          <ProfileImage src={image} />
          <h2>{p.name}</h2>
          <p>{p.jobTitle}</p>
        </CardEmployer>
      ))}
    </Slider>
  );
}
