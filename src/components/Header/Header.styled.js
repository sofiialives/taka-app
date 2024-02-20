import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavListStyled = styled.ul`
  display: flex;
  gap: 60px;
`;

export const NavStyled = styled.nav`
  margin-left: auto;
`;

export const HeaderNavLink = styled(NavLink)`
  color: var(--slider-color);
  font-weight: 600;
  font-family: var(--inter-font-semibold);
  font-size: 16px;
  line-height: 1.5;
`;
