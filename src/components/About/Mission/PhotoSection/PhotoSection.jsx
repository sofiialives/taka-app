import first from "assets/images/firstmission.png";
import second from "assets/images/secondmission.png";
import third from "assets/images/thirdmission.png";
import fourth from "assets/images/fourthmission.png";
import { PhotoItem, PhotoList, PhotoTextDiv } from "./PhotoSection.styled";
import { useTranslation } from "react-i18next";

const PhotoSection = () => {
  const { t } = useTranslation();

  const images = [
    {
      img: first,
      title: `${t("mission.order")}`,
      text: `${t("mission.orderText")}`,
    },
    { img: second },
    { img: third },
    {
      img: fourth,
      title: `${t("mission.orderP")}`,
      text: `${t("mission.orderPText")}`,
    },
  ];

  return (
    <PhotoList>
      {images.map((image, index) => (
        <PhotoItem key={index}>
          <PhotoTextDiv>
            <h3 className="photo-title">{image.title}</h3>
            <p className="photo-text">{image.text}</p>
          </PhotoTextDiv>
          <img src={image.img} alt="cloth" className="image" />
        </PhotoItem>
      ))}
    </PhotoList>
  );
};

export default PhotoSection;
