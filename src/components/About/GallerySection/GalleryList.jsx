import { useTranslation } from "react-i18next";
import WomanScroll from "./Scrolls/WomanScroll";
import { GalleryListStyled, GalleryText, GalleryThird } from "./Gallery.styled";
import GroupScroll from "./Scrolls/GroupScroll";
import PersonalScroll from "./Scrolls/PersonalScroll";

const GalleryList = () => {
  const { t } = useTranslation();
  const collections = [
    {
      title: `${t("gallery.woman")}`,
      text: `${t("gallery.womanText")}`,
      scroll: <WomanScroll />,
    },
    {
      title: `${t("gallery.corporate")}`,
      text: `${t("gallery.individual")}`,
      scroll: <GroupScroll />,
    },
    {
      title: `${t("gallery.staff")}`,
      text: `${t("gallery.personnel")}`,
      scroll: <PersonalScroll />,
    },
  ];
  return (
    <GalleryListStyled>
      {collections.map((item, index) => (
        <li key={index}>
          <GalleryThird>{item.title}</GalleryThird>
          <GalleryText>{item.text}</GalleryText>
          {item.scroll}
        </li>
      ))}
    </GalleryListStyled>
  );
};

export default GalleryList;
