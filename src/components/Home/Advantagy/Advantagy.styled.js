import styled from "styled-components";

export const AdvantagySection = styled.section`
  position: relative;
  margin-top: 112px;
  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const AdvantagyTitle = styled.h1`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  color: var(--stack-color);
  text-align: center;
`;

export const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
`;

export const AdvantagyText = styled.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--advantagy-text);
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  .step {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 22px;
    background-color: var(--circle-grey);
  }

  .step.active {
    background-color: var(--circle-black);
  }
`;
