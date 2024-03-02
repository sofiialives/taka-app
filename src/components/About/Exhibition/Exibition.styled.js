import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ExText = styled.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  color: var(--black-color);
`;

export const ExTitle = styled.h2`
  font-family: var(--inter-font-medium);
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0 51px;
  color: var(--black-color);
  @media ${device.desktop} {
    font-size: 36px;
    margin: 20px 0;
  }
`;

export const ExAfterTitle = styled.p`
  display: none;
  @media ${device.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 20px;
  }
`;

export const ExList = styled.ul`
  display: flex;
  gap: 14px;
`;

export const ExibitionStyled = styled.div`
  background-color: var(--bg-grey);
`;

export const ExibitionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
