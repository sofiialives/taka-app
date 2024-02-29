import ReviewsList from "components/Reviews/ReviewsList";
import { motion } from "framer-motion";

const ReviewsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <ReviewsList />
    </motion.section>
  );
};

export default ReviewsPage;
