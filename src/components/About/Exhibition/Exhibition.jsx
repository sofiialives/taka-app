import { useTranslation } from "react-i18next";
import { GalleryStyled } from "../GallerySection/Gallery.styled";
import ExibitionList from "./ExibitionList";
import { ExAfterTitle, ExText, ExTitle } from "./Exibition.styled";

const Exhibition = () => {
  const { t } = useTranslation();
  return (
    <GalleryStyled className="section">
      <div className="container">
        <ExText>{t("exhibition.exhibition")}</ExText>
        <ExTitle>{t("exhibition.title")}</ExTitle>
        <ExAfterTitle>{t("exhibition.annual")}</ExAfterTitle>
        <ExibitionList />
      </div>
    </GalleryStyled>
  );
};

export default Exhibition;
