import { useTranslation } from "react-i18next";
import { EmailContainer } from "./Email.styled";
import { HeroTitle } from "../About/HeroSection/HeroSection.styled";

const Email = () => {
  const { t } = useTranslation();
  return (
    <EmailContainer className="hero-section">
      <div className="container">
        <HeroTitle>{t("hero.contacts")}</HeroTitle>
      </div>
    </EmailContainer>
  );
};

export default Email;
