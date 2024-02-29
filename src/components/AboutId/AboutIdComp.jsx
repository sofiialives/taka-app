import { useRef, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { images } from "../../utils/photoArray";
import Icon from "components/Icon";
import {
  AboutImage,
  AboutStyled,
  AboutTextId,
  AboutTitleId,
  IconList,
} from "./About.styled";
import { useMediaQuery } from "react-responsive";

const AboutId = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  const { id } = useParams();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const selectedImage = images.find((image) => image.id === Number(id));

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(isDesktop);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  if (!selectedImage) return "Image is not defined";

  return (
    <section key={id} className="about-section">
      <AboutStyled className="container">
        <IconList>
          <li>
            <Link to={backLinkHref.current}>
              <Icon id="back" className="back-icon" />
            </Link>
          </li>
          <li>
            <NavLink to="/">
              <Icon id="logo" className="logo-icon" />
            </NavLink>
          </li>
        </IconList>
        <AboutImage>
          <img
            src={isLargeScreen ? selectedImage.imageLarge : selectedImage.image}
            alt="mission"
            className="image"
          />
        </AboutImage>
        <div className="description-section">
          <AboutTitleId>
            {selectedImage.id === 0
              ? selectedImage.titleId
              : selectedImage.title}
          </AboutTitleId>
          <AboutTextId>{selectedImage.descr}</AboutTextId>
        </div>
      </AboutStyled>
    </section>
  );
};

export default AboutId;
