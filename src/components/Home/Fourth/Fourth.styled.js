import styled from "styled-components";
import background from "assets/images/fourthhome.png";

export const FourthBackground = styled.section`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--black-color);
  padding: 404px 0;
  overflow: hidden; 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 112px;
    background-color: var(--slider-bg);
  }

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: 63.5px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
