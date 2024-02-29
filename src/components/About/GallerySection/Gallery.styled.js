import styled from "styled-components";
import { device } from "styles/deviceSize";

export const GalleryTitle = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;

  @media ${device.desktop} {
    font-size: 64px;
    margin-bottom: 64px;
  }
`;

export const GalleryThird = styled.h3`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 17px;
  color: var(--black-mobile);
  @media ${device.desktop} {
    font-size: 36px;
    margin-bottom: 20px;
    color: var(--black-color);
  }
`;

export const GalleryText = styled.p`
  font-family: var(--inter-font-regular);
  font-size: 14px;
  line-height: 1.2;
  color: var(--black-color);
  margin-bottom: 20px;
`;

export const GalleryStyled = styled.div`
  padding: 0;
  @media ${device.desktop} {
    padding: 90px 0;
    background-color: var(--bg-grey);
  }
`;

export const GalleryListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;
