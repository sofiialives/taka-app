import Scroll from "components/Scroll/Scroll";
import first from "../../../assets/images/firstscroll.png";
import second from "assets/images/secondscroll.png";
import third from "assets/images/thirdscroll.png";
import fourth from "assets/images/fourthscroll.png";
import fifth from "assets/images/fifthscroll.png";

const ExibitionScroll = () => {
  const photos = [
    { image: first },
    { image: second },
    { image: third },
    { image: fourth },
    { image: fifth },
  ];
  return <Scroll array={photos} hide={true} />;
};

export default ExibitionScroll;
