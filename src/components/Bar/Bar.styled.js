import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ClientsText = styled.h2`
  position: relative;
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  color: var(--stack-color);
  margin-bottom: 40px;
  @media ${device.desktop} {
    font-size: 48px;
    line-height: 1;
    color: var(--clients-text);
    margin-bottom: 100px;
    &::after {
      content: "";
      position: absolute;
      top: 100px;
      left: 0;
      background-color: var(--black-color);
      width: 100%;
      height: 1px;
    }
  }
`;
