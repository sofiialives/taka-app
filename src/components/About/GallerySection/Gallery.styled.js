import styled from "styled-components";

export const GalleryTitle = styled.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 64px;
  line-height: 1.3;
  margin-bottom: 64px;
`;

export const GalleryThird = styled.h3`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 36px;
  line-height: 1.2;
  color: var(--black-color);
`;

export const GalleryText = styled.p`
  font-family: var(--inter-font-regular);
  font-size: 14px;
  line-height: 1.2;
  color: var(--black-color);
  margin: 20px 0;
`;

export const GalleryStyled = styled.section`
  background-color: var(--bg-grey);
`;

export const GalleryListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;
