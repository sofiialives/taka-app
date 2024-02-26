import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/deviceSize";

export const FormTitle = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 12px;
  text-align: center;
  @media ${device.desktop} {
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-contact);
    text-align: start;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  .logo-icon {
    margin-top: 15px;
    width: 88px;
    height: 27px;
  }
  @media ${device.desktop} {
    display: none;
  }
`;

export const ContactSection = styled.section`
  padding-top: 0;
  @media ${device.desktop} {
    padding-top: 90px;
  }
`;

export const ContactTextQustion = styled.p`
  display: none;
  @media ${device.desktop} {
    display: block;
    font-family: var(--lato-font-regular);
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`;

export const ContactContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    gap: 70px;
  }
`;
