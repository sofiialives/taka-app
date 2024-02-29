import { StepIndicator } from "./Advantagy.styled";

const StepInd = ({ advantagies, activeStep }) => {
  return (
    <StepIndicator>
      {[...Array(advantagies.length)].map((_, index) => (
        <div
          key={index}
          className={`step ${index === activeStep ? "active" : ""}`}
        />
      ))}
    </StepIndicator>
  );
};

export default StepInd;
