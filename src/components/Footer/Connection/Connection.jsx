import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import {
  ConnectionContainer,
  ConnectionText,
  ConnectionTitle,
} from "./Connection.styled";

const Connection = () => {
  const { t } = useTranslation();
  return (
    <ConnectionContainer>
      <ConnectionTitle>{t("footer.connected")}</ConnectionTitle>
      <ConnectionText>{t("footer.like")}</ConnectionText>
      <a
        href="https://www.instagram.com/takagamma/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon id="inst" className="inst-icon" />
      </a>
      <p className="copyright">ⓒ 2024 TakaIE All rights reserved.</p>
    </ConnectionContainer>
  );
};

export default Connection;
