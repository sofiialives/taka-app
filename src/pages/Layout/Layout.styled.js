import styled from "styled-components";
import { device } from "styles/deviceSize";

export const HeaderStyled = styled.header`
  display: ${({ hide }) => (hide ? "none" : "block")};
  background: ${({ isHome }) =>
    isHome ? "var(--bg-color)" : "var(--header-gradient)"};
`;

export const HeaderContainer = styled.div`
  overflow: hidden;
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
    display: flex;
    align-items: center;
    padding: 30px 0;
  }
`;

export const FooterStyled = styled.footer`
  display: ${({ isHome }) => (isHome ? "none" : "block")};
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
