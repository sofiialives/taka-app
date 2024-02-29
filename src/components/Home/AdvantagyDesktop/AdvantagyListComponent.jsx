import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import { AdvantagyList, AdvantagyText } from "./Advantagy.styled";
import { motion } from "framer-motion";

const AdvantagyListComponent = () => {
  const { t } = useTranslation();
  const advantagies = [
    { id: "tick", text: `${t("home.high")}` },
    { id: "cool", text: `${t("home.approach")}` },
    { id: "alarm", text: `${t("home.deadline")}` },
    { id: "click", text: `${t("home.design")}` },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AdvantagyList>
      {advantagies.map((advantagy, index) => (
        <motion.li
          key={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: index * 1.6,
          }}
          className="advantagy-li"
        >
          <Icon id={advantagy.id} className="advantagy-icon" />
          <AdvantagyText>{advantagy.text}</AdvantagyText>
        </motion.li>
      ))}
    </AdvantagyList>
  );
};

export default AdvantagyListComponent;
