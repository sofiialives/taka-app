import { useTranslation } from "react-i18next";
import ExibitionList from "./ExibitionList";
import {
  ExAfterTitle,
  ExText,
  ExTitle,
  ExibitionStyled,
} from "./Exibition.styled";
import ExibitionScroll from "./ExibitionScroll";
import { useEffect, useState } from "react";

const Exhibition = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
