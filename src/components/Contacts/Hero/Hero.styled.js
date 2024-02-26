import styled from "styled-components";
import { device } from "styles/deviceSize";
import hero from "../../../assets/images/heroContacts.jpg";

export const HeroSectionStyled = styled.section`
  display: none;
  @media ${device.desktop} {
    display: block;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
