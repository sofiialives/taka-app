import styled from "styled-components";
import hero from "assets/images/hero.jpg";

export const HeroTitle = styled.h1`
  font-family: var(--lato-font-regular);
  color: var(--bg-color);
  font-size: 48px;
  line-height: 1;
`;

export const HeroStyled = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  background-size: cover;
`;
