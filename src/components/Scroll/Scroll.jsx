import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ScrollDiv,
  ScrollNavLink,
  ScrollText,
  ScrollTextSection,
  ScrollTitle,
} from "./Scroll.styled";

const Scroll = ({ array, hide, header }) => {
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
        <ScrollDiv key={index} header={header}>
          {header ? (
            <ScrollNavLink to={item.route}>{item.component}</ScrollNavLink>
          ) : (
            <>
              <img className="image" src={item.image} alt="scroll-image" />
              {!hide && (
                <ScrollTextSection>
                  <ScrollTitle>{item.line}</ScrollTitle>
                  <ScrollText>{item.collection}</ScrollText>
                </ScrollTextSection>
              )}
            </>
          )}
        </ScrollDiv>
      ))}
    </Slider>
  );
};

export default Scroll;
