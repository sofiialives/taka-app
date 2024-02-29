import styled from "styled-components";
import background from "../../../assets/images/secondhome.png";

export const SectionBackground = styled.section`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--home-bg);
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
`;
