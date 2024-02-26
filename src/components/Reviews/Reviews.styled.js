import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ReviewsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 76px;
  @media ${device.desktop} {
    gap: 88px;
  }
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media ${device.desktop} {
    position: relative;
    flex-direction: row;
    gap: 76px;
  }
`;

export const ReviewText = styled.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  color: var(--black-color);
  @media ${device.desktop} {
    font-family: var(--inter-font-bold);
    font-weight: 700;
    line-height: 2.25;
    color: var(--text-color);
  }
`;
