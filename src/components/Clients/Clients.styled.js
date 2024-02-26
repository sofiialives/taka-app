import styled from "styled-components";
import { device } from "styles/deviceSize";

export const FirstList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 42px;
  align-items: center;
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
    margin-top: 98px;
  }
`;

export const ImageWidth = styled.li`
  display: flex;
  justify-content: center;
`;

export const ImageWidthFirst = styled.img`
  width: 96px;
  @media ${device.desktop} {
    width: 172px;
  }
`;

export const ImageWidthSecond = styled.img`
  display: flex;
  justify-content: center;
  width: 284px;
  @media ${device.desktop} {
    width: 304px;
  }
`;
