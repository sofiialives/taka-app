import styled from "styled-components";
import { device } from "styles/deviceSize";

export const AboutStyled = styled.div`
  .back-icon {
    width: 24px;
    height: 24px;
  }
  .logo-icon {
    width: 88px;
    height: 27px;
    margin-bottom: 22px;
  }
  @media ${device.desktop} {
    display: flex;
    gap: 105px;
    .description-section {
      width: 525px;
    }
  }
`;

export const AboutImage = styled.div`
  width: 315px;
  height: 336px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${device.desktop} {
    width: 667px;
    height: 408px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 85px;
  @media ${device.desktop} {
    display: none;
  }
`;

export const AboutTitleId = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  color: var(--stack-color);
  margin-top: 24px;
  @media ${device.desktop} {
    font-family: var(--inter-font-medium);
    color: var(--black-color);
    font-weight: 500;
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 41px;
  }
`;

export const AboutTextId = styled.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  margin-top: 12px;
  color: var(--black-color);
  @media ${device.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    margin-top: 0;
    color: var(--black-color);
  }
`;
