import { useTranslation } from "react-i18next";
import { HeroMobileDiv, HeroStyled, HeroTitle } from "./HeroSection.styled.js";
import hero from "assets/images/hero-mobile.png";
import Icon from "../../Icon.jsx";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroStyled className="hero-section">
      <div className="container">
        <HeroTitle>{t("hero.title")}</HeroTitle>
        <HeroMobileDiv>
          <Icon id="logo" className="logo-icon" />
          <img src={hero} alt="woman" />
        </HeroMobileDiv>
      </div>
    </HeroStyled>
  );
};

export default HeroSection;
