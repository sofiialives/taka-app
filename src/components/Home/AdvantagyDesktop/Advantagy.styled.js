import styled, { keyframes } from "styled-components";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(100%);
    opacity: 1;
  }
`;

export const AdvantagyTitle = styled.h1`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: var(--black-color);
  margin-bottom: 204px;
  text-align: center;
  opacity: 0;

  &.animated-text {
    animation: ${slideUpAnimation} 1600ms ease-in-out forwards;
  }
`;

export const AdvantagyContainer = styled.div`
  position: relative;
  display: flex;
  gap: 80px;

  &::before {
    content: "";
    position: absolute;
    top: -124px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black-color);
    padding: 0 62px;
  }
`;

export const AdvantagyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 62px;

  .advantagy-icon {
    width: 64px;
    height: 56px;
    fill: var(--black-color);
  }

  .advantagy-li {
    display: flex;
    align-items: baseline;
    gap: 36px;
  }
`;

export const AdvantagyText = styled.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 36px;
  line-height: 1;
  color: var(--black-color);
`;

export const AdvantagyImage = styled.img`
  width: 482px;
  height: 425px;
`;
