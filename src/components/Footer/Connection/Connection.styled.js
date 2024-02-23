import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30px;
  .inst-icon {
    width: 20px;
    height: 20px;
    margin-bottom: 30px;
    fill: var(--bg-color);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -15px;
    height: 1px;
    width: 151px;
    background-color: var(--bg-color);
  }
  &::after {
    left: 0;
    top: 70px;
    height: 1px;
    width: 100vh;
  }

  .copyright {
    font-family: var(--prompt-font-regular);
    font-size: 14px;
    line-height: 1.5;
    color: var(--bg-color);
  }

  @media ${device.desktop} {
    margin-top: 0;
    align-items: flex-end;
    &::before,
    &::after {
      content: none;
    }
    .inst-icon {
      margin-bottom: 0;
      fill: var(--inst-icon);
    }
    .copyright {
      display: none;
    }
  }
`;

export const ConnectionText = styled.p`
  font-family: var(--inter-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: var(--bg-color);
  margin-bottom: 12px;

  @media ${device.desktop} {
    font-family: var(--prompt-font-regular);
    font-size: 12px;
    line-height: 1.5;
    color: var(--text-footer);
    margin-bottom: 7px;
  }
`;

export const ConnectionTitle = styled.h2`
  display: none;
  @media ${device.desktop} {
    display: block;
    font-family: var(--prompt-font-regular);
    font-weight: 400;
    font-size: 24px;
    color: var(--text-footer);
    margin-bottom: 18px;
  }
`;
