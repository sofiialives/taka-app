import styled, { keyframes } from "styled-components";
import background from "assets/images/thirdhome.png";
import { device } from "styles/deviceSize";

export const ThirdBackground = styled.section`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  padding: 404px 0;
  margin-top: 112px;

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${device.desktop} {
    margin-top: 95px;
  }
`;

export const ThirdTitle = styled.h1`
  font-family: var(--poppins-font-extrabold);
  font-weight: 800;
  font-size: 24px;
  line-height: 1.5;
  color: var(--bg-color);
  margin-bottom: 25px;
  white-space: nowrap;

  @media ${device.desktop} {
    font-size: 80px;
  }
`;

const slideUpAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100vh + 100%));
  }
`;

export const ThirdText = styled.p`
  font-family: var(--poppins-font-regular);
  font-size: 14px;
  line-height: 1.5;
  color: var(--bg-color);
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  padding: 10px;
  margin: 0;
  z-index: 9999;

  &.animated-text {
    animation: ${slideUpAnimation} 2500ms ease-in-out forwards;
  }

  @media ${device.desktop} {
    font-size: 30px;
    top: 100px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
