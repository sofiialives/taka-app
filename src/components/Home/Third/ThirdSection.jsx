import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import {
  TextContainer,
  ThirdBackground,
  ThirdText,
  ThirdTitle,
} from "./Third.styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ThirdSection = () => {
  const { t } = useTranslation();

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <ThirdBackground>
      <div className="container">
      {isDesktop ? null : <Icon id="logo" className="logo-icon" />}
        <TextContainer>
          <ThirdTitle>{t("home.sew")}</ThirdTitle>
          <ThirdText className={animationStarted ? "animated-text" : ""}>
            {t("home.dream")}
          </ThirdText>
        </TextContainer>
      </div>
    </ThirdBackground>
  );
};

export default ThirdSection;
