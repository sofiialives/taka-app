import { useTranslation } from "react-i18next";
import first from "assets/images/firstperson.png";
import second from "assets/images/secondperson.png";
import third from "assets/images/thirdperson.png";
import fourth from "assets/images/fourthperson.png";
import fifth from "assets/images/fifthperson.png";
import sixth from "assets/images/sixthperson.png";
import seventh from "assets/images/seventhperson.png";
import eighth from "assets/images/eighthperson.png";
import ninth from "assets/images/ninthperson.png";
import Scroll from "../../../Scroll/Scroll";

const PersonalScroll = () => {
  const { t } = useTranslation();
  const suites = [
    {
      image: first,
      line: `${t("gallery.costumeCloth")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: second,
      line: `${t("gallery.costumeCloth")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: third,
      line: `${t("gallery.special")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: fourth,
      line: `${t("gallery.special")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: fifth,
      line: `${t("gallery.special")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: sixth,
      line: `${t("gallery.special")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: seventh,
      line: `${t("gallery.costumeCloth")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: eighth,
      line: `${t("gallery.special")}`,
      collection: `${t("gallery.staff")}`,
    },
    {
      image: ninth,
      line: `${t("gallery.hats")}`,
      collection: `${t("gallery.staff")}`,
    },
  ];

  return <Scroll array={suites} />;
};

export default PersonalScroll;
