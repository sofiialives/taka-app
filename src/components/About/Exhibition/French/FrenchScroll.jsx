import Scroll from "../../../Scroll/Scroll";
import first from "assets/images/scrollfirst.png";
import second from "assets/images/thirdfrench.png";
import third from "assets/images/scrollsecond.png";
import fourth from "assets/images/scrollfourth.png";
import fifth from "assets/images/scrollfifth.png";

const FrenchScroll = () => {
  const photos = [
    { image: first },
    { image: second },
    { image: third },
    { image: fourth },
    { image: fifth },
  ];
  return <Scroll array={photos} hide={true} />;
};

export default FrenchScroll;
