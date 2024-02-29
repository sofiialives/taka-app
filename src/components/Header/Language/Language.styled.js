import styled from "styled-components";
import { device } from "styles/deviceSize";

export const LangList = styled.ul`
  display: ${({ isHome }) => (isHome ? "none" : "flex")};
  gap: 38px;
  position: absolute;
  top: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  li:first-child {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: 46px;
      width: 2px;
      height: 15px;
      background-color: var(--bg-color);
    }
  }

  @media ${device.desktop} {
    position: static;
    gap: 20px;
    margin-left: 64px;

    li:first-child {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 32px;
        width: 1px;
        height: 15px;
        background-color: var(--black-color);
      }
    }
  }
`;

export const LangBtn = styled.button`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--bg-color);
  cursor: pointer;
  @media ${device.desktop} {
    color: var(--slider-color);
    font-weight: 600;
    font-family: var(--inter-font-semibold);
    font-size: 16px;
    line-height: 1.5;
  }
`;
