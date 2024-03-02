import { useTranslation } from "react-i18next";
import ExibitionList from "./ExibitionList";
import {
  ExAfterTitle,
  ExText,
  ExTitle,
  ExibitionStyled,
  ExibitionsList,
} from "./Exibition.styled";
import ExibitionScroll from "./ExibitionScroll";
import { useMediaQuery } from "react-responsive";
import FrenchList from "./French/FrenchList";
import FrenchScroll from "./French/FrenchScroll";

const Exhibition = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <ExibitionStyled className="section">
      <div className="container" style={{ overflow: "hidden" }}>
        <ExText>{t("exhibition.exhibition")}</ExText>
        <ExibitionsList>
          <li>
            <ExTitle>{t("exhibition.title")}</ExTitle>
            <ExAfterTitle>{t("exhibition.annual")}</ExAfterTitle>
            {isDesktop ? <ExibitionList /> : <ExibitionScroll />}
          </li>
          <li>
            <ExTitle>{t("exhibition.frenchtitle")}</ExTitle>
            {isDesktop ? <FrenchList /> : <FrenchScroll />}
          </li>
        </ExibitionsList>
      </div>
    </ExibitionStyled>
  );
};

export default Exhibition;
