import styled from "styled-components";
import { device } from "styles/deviceSize";

export const StackDiv = styled.div`
  display: flex;
  gap: 135px;
`;

export const StackTitle = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: var(--stack-color);

  @media ${device.desktop} {
    white-space: nowrap;
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-text-color);
    margin-bottom: 16px;
  }
`;

export const StackListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 37px;
  .stack-text {
    font-family: var(--montserrat-font-regular);
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-color);
  }

  @media ${device.desktop} {
    gap: 76px;

    .stack-text {
      font-size: 20px;
      line-height: 1.2;
    }
  }
`;

export const StackImg = styled.img`
  display: none;
  @media ${device.desktop} {
    display: block;
    width: 600px;
    height: 867px;
  }
`;
