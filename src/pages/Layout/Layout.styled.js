import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: var(--header-gradient);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;

  .logo-icon {
    width: 116px;
    height: 35px;
  }
`;

export const FooterStyled = styled.header`
  background: var(--slider-bg);
`;

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 41px 0 26px;
`;
