import first from "assets/images/firstwoman.png";
import second from "assets/images/secondwoman.png";
import third from "assets/images/thirdwoman.png";
import fourth from "assets/images/fourthwoman.png";
import fifth from "assets/images/fifthwoman.png";
import sixth from "assets/images/sixthwoman.png";
import seventh from "assets/images/seventhwoman.png";
import eighth from "assets/images/eighthwoman.png";
import ninth from "assets/images/ninthwoman.png";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scroll from "../../../Scroll/Scroll";

const WomanList = () => {
  const { t } = useTranslation();

  const suites = [
    {
      image: first,
      line: `${t("gallery.line")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: second,
      line: `${t("gallery.line")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: third,
      line: `${t("gallery.line")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: fourth,
      line: `${t("gallery.outerwear")}`,
      collection: `${t("gallery.demi")}`,
    },
    {
      image: fifth,
      line: `${t("gallery.knitted")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: sixth,
      line: `${t("gallery.knitted")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: seventh,
      line: `${t("gallery.outerwear")}`,
      collection: `${t("gallery.demi")}`,
    },
    {
      image: eighth,
      line: `${t("gallery.suit")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: ninth,
      line: `${t("gallery.suit")}`,
      collection: `${t("gallery.woman")}`,
    },
  ];
  return <Scroll array={suites} />;
};

export default WomanList;
