import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ClientsText = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  color: var(--stack-color);
  @media ${device.desktop} {
    font-size: 48px;
    line-height: 1;
    color: var(--clients-text);
    margin-bottom: 100px;
  }
`;

export const FirstList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  @media ${device.desktop} {
    display: flex;
    justify-content: flex-start;
    gap: 98px;

    &::before {
      content: "";
      position: absolute;
      top: -50px;
      left: 0;
      background-color: var(--black-color);
      width: 100%;
      height: 1px;
    }
  }
`;

export const RestList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 76px;
  margin-top: 42px;
  @media ${device.desktop} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 98px;
    margin-top: 98px;
  }
`;

export const ImageWidth = styled.li`
  display: flex;
  justify-content: center;
`;

export const ImageWidthSecond = styled.img`
  display: flex;
  justify-content: center;
  width: 284px;
`;
