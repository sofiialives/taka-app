import styled from "styled-components";

export const ScrollDiv = styled.div`
  background-color: var(--slider-bg);

  .image {
    width: 400px;
    height: 445px;
  }
`;

export const ScrollTitle = styled.h4`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  color: var(--slider-color);
`;

export const ScrollText = styled.p`
  font-family: var(--inter-font-light);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.2;
  color: var(--black-color);
`;

export const ScrollTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 14px;
  gap: 24px;
`;
