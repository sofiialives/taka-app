import first from "assets/images/firstmission.png";
import second from "assets/images/secondmission.png";
import third from "assets/images/thirdmission.png";
import fourth from "assets/images/fourthmission.png";
import order from "assets/images/missionOrder.png";
import personal from "assets/images/missionPersonal.png";
import orderLarge from "assets/images/orderBig.png";
import personalLarge from "assets/images/personalBig.png";
import i18n from "../utils/i18n";

export const images = [
  {
    id: 0,
    img: first,
    title: i18n.t("mission.order"),
    text: i18n.t("mission.orderText"),
    image: order,
    imageLarge: orderLarge,
    descr: i18n.t("mission.orderId"),
    titleId: i18n.t("mission.orderTitleId"),
  },
  { img: second },
  { img: third },
  {
    id: 3,
    img: fourth,
    title: i18n.t("mission.orderP"),
    text: i18n.t("mission.orderPText"),
    image: personal,
    imageLarge: personalLarge,
    descr: i18n.t("mission.orderPId"),
  },
];
