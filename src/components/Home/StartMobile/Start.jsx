import { StartBackground, StartBtn } from "./Start.styled";
import Icon from "../../Icon";
import Language from "../../Header/Language/Language";
import { useTranslation } from "react-i18next";

const Start = ({ handleButtonClick }) => {
  const { t } = useTranslation();

  return (
    <StartBackground>
      <div className="container">
        <Language />
        <Icon id="logo" className="logo-icon" />
        <StartBtn type="button" onClick={handleButtonClick}>
          {t("home.btn")}
        </StartBtn>
      </div>
    </StartBackground>
  );
};

export default Start;
