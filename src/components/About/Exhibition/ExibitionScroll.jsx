import Scroll from "components/Scroll/Scroll";
import first from "assets/images/firstscroll.jpg";
import second from "assets/images/secondscroll.jpg";
import third from "assets/images/thirdscroll.jpg";
import fourth from "assets/images/fourthscroll.jpg";

const ExibitionScroll = () => {
  const photos = [
    { image: first },
    { image: second },
    { image: third },
    { image: fourth },
  ];
  return <Scroll array={photos} hide={true} />;
};

export default ExibitionScroll;
