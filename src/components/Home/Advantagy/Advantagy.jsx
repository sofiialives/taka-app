import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import { AdvantagySection, AdvantagyTitle } from "./Advantagy.styled";
import { useState, useEffect } from "react";
import StepInd from "./StepIndicator";
import TextListComponent from "./TextList";

const Advantagy = () => {
  const { t } = useTranslation();
  const advantagies = [
    `${t("home.high")}`,
    `${t("home.approach")}`,
    `${t("home.deadline")}`,
    `${t("home.design")}`,
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % advantagies.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [advantagies.length]);

  return (
    <AdvantagySection className="section">
      <div className="container">
        <Icon id="logo" className="logo-icon" />
        <AdvantagyTitle>{t("home.advantagy")}</AdvantagyTitle>
        <TextListComponent advantagies={advantagies} />
        <StepInd advantagies={advantagies} activeStep={activeStep} />
      </div>
    </AdvantagySection>
  );
};

export default Advantagy;
