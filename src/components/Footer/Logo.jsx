import { useTranslation } from "react-i18next";
import Icon from "../../components/Icon";
import { LogoSection } from "./Footer.styled";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <LogoSection>
      <Icon id="logo" className="logo-icon" />
      <p className="logo-privacy">{t("footer.privacy")}</p>
      <p className="copyright">© 2024 Taka IE</p>
    </LogoSection>
  );
};

export default Logo;
