import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const HeaderScroll = ({ array }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {array.map((item, index) => (
        <div key={index}>
          <NavLink to={item.route}>{item.component}</NavLink>
        </div>
      ))}
    </Slider>
  );
};

export default HeaderScroll;
