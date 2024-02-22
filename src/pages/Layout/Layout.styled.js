import styled from "styled-components";
import { device } from "styles/deviceSize";

export const HeaderStyled = styled.header`
  @media ${device.desktop} {
    background: var(--header-gradient);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 0;

  .logo-icon {
    display: none;
    @media ${device.desktop} {
      display: block;
      width: 116px;
      height: 35px;
    }
  }

  @media ${device.desktop} {
    padding: 30px 0;
  }
`;

export const FooterStyled = styled.header`
  background: var(--footer-bg);
  @media ${device.desktop} {
    background: var(--slider-bg);
  }
`;

export const FooterContainer = styled.div`
  padding: 40px 0;
  @media ${device.desktop} {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 41px 0 26px;
  }
`;
