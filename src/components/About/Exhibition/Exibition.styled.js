import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ExText = styled.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  color: var(--black-color);
`;

export const ExTitle = styled.h2`
  font-family: var(--inter-font-medium);
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0 51px;
  color: var(--black-color);
  @media ${device.desktop} {
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
  gap: 20px;
`;

export const ExibitionStyled = styled.section`
  background-color: var(--bg-grey);
`;
