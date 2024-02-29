import { useTranslation } from "react-i18next";
import { HeroMobileDiv, HeroStyled, HeroTitle } from "./HeroSection.styled.js";
import hero from "assets/images/hero-mobile.png";
import Icon from "../../Icon.jsx";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroStyled className="hero-section">
      <div className="container">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <HeroTitle>{t("hero.title")}</HeroTitle>
        </motion.div>
        <HeroMobileDiv>
          <Icon id="logo" className="logo-icon" />
          <img src={hero} alt="woman" />
        </HeroMobileDiv>
      </div>
    </HeroStyled>
  );
};

export default HeroSection;
