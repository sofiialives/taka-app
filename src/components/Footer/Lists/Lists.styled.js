import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterTitle = styled.h2`
  font-family: var(--prompt-font-regular);
  font-size: 24px;
  line-height: 1.5;
  color: var(--text-footer);
  margin-bottom: 18px;
`;

export const FooterLinks = styled.a`
  font-family: var(--lato-font-regular);
  font-size: 14px;
  line-height: 1.4;
  color: var(--text-footer);
`;

export const FooterNavLinks = styled(NavLink)`
  font-family: var(--lato-font-regular);
  font-size: 16px;
  line-height: 1.75;
  color: var(--text-footer);
`;

export const FooterListStyled = styled.ul`
  display: flex;
  gap: 57px;
`;
