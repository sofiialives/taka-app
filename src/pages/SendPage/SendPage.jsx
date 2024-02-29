import TextEmail from "components/SuccessEmail/TextEmail";
import Email from "components/SuccessEmail/Email";
import { motion } from "framer-motion";

const SendPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <Email />
      <TextEmail />
    </motion.section>
  );
};

export default SendPage;
