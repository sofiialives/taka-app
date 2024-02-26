import styled from "styled-components";
import hero from "assets/images/hero.jpg";
import { device } from "../../../styles/deviceSize";

export const HeroTitle = styled.h1`
  display: none;
  @media ${device.desktop} {
    display: block;
    font-family: var(--lato-font-regular);
    color: var(--bg-color);
    font-size: 48px;
    line-height: 1;
  }
`;

export const HeroStyled = styled.section`
  padding: 0;
  padding-top: 32px;
  @media ${device.desktop} {
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    background-size: cover;
  }
`;

export const HeroMobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  .logo-icon {
    width: 153px;
    height: 47px;
  }
  @media ${device.desktop} {
    display: none;
  }
`;
