import { HeroTitle } from "../../About/HeroSection/HeroSection.styled";
import { useTranslation } from "react-i18next";
import { HeroSectionStyled } from "./Hero.styled";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroSectionStyled className="hero-section">
      <div className="container">
        <HeroTitle>{t("hero.contacts")}</HeroTitle>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;
