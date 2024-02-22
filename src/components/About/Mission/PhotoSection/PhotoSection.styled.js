import styled from "styled-components";
import { device } from "styles/deviceSize";

export const PhotoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 78px;
  li:nth-child(2),
  li:nth-child(3) {
    display: none;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    li:nth-child(2),
    li:nth-child(3) {
      display: initial;
    }
  }
`;

export const PhotoTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PhotoItem = styled.li`
  position: relative;

  .photo-title {
    font-family: var(--inter-font-bold);
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    color: var(--bg-color);
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 8px;
  }

  .photo-text {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    margin: 0 auto;
    color: var(--bg-color);
  }

  .image {
    width: 315px;
    border-radius: 12px;
    @media ${device.desktop} {
      width: 295px;
    }
  }
`;
