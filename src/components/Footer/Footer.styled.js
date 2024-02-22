import styled from "styled-components";

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 144px;
  transform: translateX(-50%);
  .logo-icon {
    width: 159px;
    height: 49px;
    margin-bottom: 39px;
  }
  .logo-privacy,
  .copyright {
    font-family: var(--lato-font-regular);
    font-size: 14px;
    line-height: 2;
    color: var(--slider-color);
  }
  .copyright {
    margin-top: 19px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -9.5px;
      height: 1px;
      width: 100vw;
      background-color: var(--black-color);
      transform: translateX(-50%);
    }
  }
`;
