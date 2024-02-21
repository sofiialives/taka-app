import styled from "styled-components";

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const PhotoTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 155px;
  left: 50%;
  transform: translateX(-50%);
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
`;
