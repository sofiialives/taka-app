import { motion } from "framer-motion";
import { AdvantagyText, TextList } from "./Advantagy.styled";

const TextListComponent = ({ advantagies }) => {
  return (
    <TextList>
      {advantagies.map((advantagy, index) => (
        <motion.li
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 1.6 }}
        >
          <AdvantagyText>{advantagy}</AdvantagyText>
        </motion.li>
      ))}
    </TextList>
  );
};

export default TextListComponent;
