import { useTranslation } from "react-i18next";
import { FooterTitle } from "../Lists/Lists.styled";
import Icon from "../../Icon";
import { ConnectionContainer, ConnectionTitle } from "./Connection.styled";

const Connection = () => {
  const { t } = useTranslation();
  return (
    <ConnectionContainer>
      <FooterTitle>{t("footer.connected")}</FooterTitle>
      <ConnectionTitle>{t("footer.like")}</ConnectionTitle>
      <a
        href="https://www.instagram.com/takagamma/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon id="inst" className="inst-icon" />
      </a>
    </ConnectionContainer>
  );
};

export default Connection;
