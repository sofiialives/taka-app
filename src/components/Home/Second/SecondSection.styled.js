import styled from "styled-components";
import background from "../../../assets/images/secondhome.png";
import { device } from "styles/deviceSize";

export const SectionBackground = styled.section`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  padding: 404px 0;
  margin-top: 112px;

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${device.desktop} {
    margin-top: 95px;
  }
`;
