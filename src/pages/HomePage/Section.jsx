import { motion } from "framer-motion";

const Section = ({ content, isVisible }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {content}
    </motion.section>
  );
};

export default Section;
