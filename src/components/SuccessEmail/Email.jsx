import { useTranslation } from "react-i18next";
import { EmailContainer, NavLinkStyled } from "./Email.styled";
import { HeroTitle } from "../About/HeroSection/HeroSection.styled";
import Icon from "../Icon";

const Email = () => {
  const { t } = useTranslation();
  return (
    <EmailContainer className="hero-section">
      <div className="container">
        <NavLinkStyled to="/">
          <Icon id="logo" className="logo-icon" />
        </NavLinkStyled>
        <HeroTitle>{t("hero.contacts")}</HeroTitle>
      </div>
    </EmailContainer>
  );
};

export default Email;
