import { useTranslation } from "react-i18next";
import GalleryList from "./GalleryList";
import { GalleryStyled, GalleryTitle } from "./Gallery.styled";

const GallerySection = () => {
  const { t } = useTranslation();
  return (
    <GalleryStyled className="section">
      <div className="container" style={{ overflow: "hidden" }}>
        <GalleryTitle>{t("gallery.gallery")}</GalleryTitle>
        <GalleryList />
      </div>
    </GalleryStyled>
  );
};

export default GallerySection;
