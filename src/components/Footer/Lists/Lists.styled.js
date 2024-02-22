import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/deviceSize";

export const FooterTitle = styled.h2`
  font-family: var(--inter-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: var(--bg-color);
  margin-bottom: 14px;
  @media ${device.desktop} {
    font-family: var(--prompt-font-regular);
    font-weight: 400;
    font-size: 24px;
    color: var(--text-footer);
    margin-bottom: 18px;
  }
`;

export const FooterLinks = styled.a`
  font-family: var(--lato-font-regular);
  font-size: 14px;
  line-height: 1.4;
  color: var(--bg-color);
  @media ${device.desktop} {
    color: var(--text-footer);
  }
`;

export const FooterNavLinks = styled(NavLink)`
  font-family: var(--lato-font-regular);
  font-size: 16px;
  line-height: 1.75;
  color: var(--bg-color);
  @media ${device.desktop} {
    color: var(--text-footer);
  }
`;

export const FooterListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${device.desktop} {
    flex-direction: row;
    gap: 57px;
  }
`;
