import ClientsList from "components/Clients/Clients";
import { motion } from "framer-motion";

const Clientspage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <ClientsList />
    </motion.section>
  );
};

export default Clientspage;
