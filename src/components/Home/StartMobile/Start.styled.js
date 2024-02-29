import background from "../../../assets/images/firsthome.png";
import styled from "styled-components";

export const StartBackground = styled.section`
  position: relative;
  padding: 404px 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;

  .logo-icon {
    width: 159px;
    height: 49px;
    position: absolute;
    top: 71px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StartBtn = styled.button`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  color: var(--bg-color);
  border: 1px solid var(--bg-color);
  border-radius: 12px;
  padding: 20px 98px;
  background-color: transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  cursor: pointer;
`;
