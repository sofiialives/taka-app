import ContactForm from "components/Contacts/ContactForm/ContactForm";
import HeroSection from "components/Contacts/Hero/HeroSection";
import { motion } from "framer-motion";

const ContactsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <HeroSection />
      <ContactForm />
    </motion.section>
  );
};

export default ContactsPage;
