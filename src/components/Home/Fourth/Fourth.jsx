import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import { TextContainer, ThirdText, ThirdTitle } from "../Third/Third.styled";
import { FourthBackground } from "./Fourth.styled";
import { useMediaQuery } from "react-responsive";

const FourthSection = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <FourthBackground>
      <div className="container">
        {isDesktop ? null : <Icon id="logo" className="logo-icon" />}
        <TextContainer>
          <ThirdTitle>{t("home.success")}</ThirdTitle>
          <ThirdText>{t("home.art")}</ThirdText>
        </TextContainer>
      </div>
    </FourthBackground>
  );
};

export default FourthSection;
