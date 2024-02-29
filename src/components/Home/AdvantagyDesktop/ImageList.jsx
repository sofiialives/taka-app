import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import firstimg from "assets/images/firstadv.png";
import secondimg from "assets/images/eightgroup.png";
import thirdimg from "assets/images/thirdadv.png";
import fourthimg from "assets/images/fourthadv.png";
import { AdvantagyImage } from "./Advantagy.styled";

const ImageList = () => {
  const images = [firstimg, secondimg, thirdimg, fourthimg];

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1600);

    if (currentImage === images.length - 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [images.length, currentImage]);

  return (
    <motion.ul>
      <motion.li
        key={currentImage}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <AdvantagyImage src={images[currentImage]} alt="advantage image" />
      </motion.li>
    </motion.ul>
  );
};

export default ImageList;
