import HeroSection from "components/About/HeroSection/HeroSection";
import StackSection from "components/About/StackSection/StackSection";
import GallerySection from "components/About/GallerySection/GallerySection";
import Mission from "components/About/Mission/Mission";
import Exhibition from "components/About/Exhibition/Exhibition";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <HeroSection />
      <StackSection />
      <GallerySection />
      <Mission />
      <Exhibition />
    </motion.section>
  );
};

export default AboutPage;
