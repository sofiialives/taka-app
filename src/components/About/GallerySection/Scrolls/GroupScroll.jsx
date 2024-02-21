import first from "assets/images/firstgroup.png";
import second from "assets/images/secondgroup.png";
import third from "assets/images/thirdgroup.png";
import fourth from "assets/images/fourthgroup.png";
import fifth from "assets/images/fifthgroup.png";
import sixth from "assets/images/sixthgroup.png";
import seventh from "assets/images/seventhgroup.png";
import eighth from "assets/images/eightgroup.png";
import ninth from "assets/images/ninthgroup.png";
import { useTranslation } from "react-i18next";
import Scroll from "../../../Scroll/Scroll";

const GroupScroll = () => {
  const { t } = useTranslation();

  const suites = [
    {
      image: first,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: second,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: third,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: fourth,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.demi")}`,
    },
    {
      image: fifth,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: sixth,
      line: `${t("gallery.outerwear")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: seventh,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: eighth,
      line: `${t("gallery.costume")}`,
      collection: `${t("gallery.woman")}`,
    },
    {
      image: ninth,
      line: `${t("gallery.dress")}`,
      collection: `${t("gallery.woman")}`,
    },
  ];
  
  return <Scroll array={suites} />;
};

export default GroupScroll;
