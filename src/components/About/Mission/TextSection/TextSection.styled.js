import styled from "styled-components";
import { device } from "styles/deviceSize";

export const MissionTitle = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${device.desktop} {
    font-family: var(--inter-font-medium);
    font-weight: 500;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`;

export const MissionPreText = styled.h3`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${device.desktop} {
    font-family: var(--inter-font-black);
    font-weight: 900;
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 24px;
  }
`;

export const MissionText = styled.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  margin-bottom: 37px;
  line-height: 1.5;
  @media ${device.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`;
