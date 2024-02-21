import { useTranslation } from "react-i18next";
import { HeroStyled, HeroTitle } from "./HeroSection.styled.js";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroStyled className="hero-section">
      <div className="container">
        <HeroTitle>{t("hero.title")}</HeroTitle>
      </div>
    </HeroStyled>
  );
};

export default HeroSection;
