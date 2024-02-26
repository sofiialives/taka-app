import styled from "styled-components";
import { device } from "styles/deviceSize";

export const EmailListStyled = styled.ul`
  display: none;
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

export const EmailTitle = styled.h3`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: var(--black-text-color);
`;

export const EmailText = styled.p`
  font-family: var(--lato-font-regular);
  font-size: 16px;
`;
