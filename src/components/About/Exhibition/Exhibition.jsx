import { useTranslation } from "react-i18next";
import ExibitionList from "./ExibitionList";
import {
  ExAfterTitle,
  ExText,
  ExTitle,
  ExibitionStyled,
} from "./Exibition.styled";
import ExibitionScroll from "./ExibitionScroll";
import { useMediaQuery } from "react-responsive";

const Exhibition = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <ExibitionStyled className="section">
      <div className="container">
        <ExText>{t("exhibition.exhibition")}</ExText>
        <ExTitle>{t("exhibition.title")}</ExTitle>
        <ExAfterTitle>{t("exhibition.annual")}</ExAfterTitle>
        {isDesktop ? <ExibitionList /> : <ExibitionScroll />}
      </div>
    </ExibitionStyled>
  );
};

export default Exhibition;
