import AboutIdComp from "components/AboutId/AboutIdComp";
import { motion } from "framer-motion";

const AboutId = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <AboutIdComp />
    </motion.section>
  );
};

export default AboutId;
