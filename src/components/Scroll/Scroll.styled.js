import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/deviceSize";

export const ScrollDiv = styled.div`
  background-color: ${(props) =>
    props.header ? "transparent" : "var(--slider-bg)"};
  margin-left: ${(props) => (props.header ? "18px" : "0")};

  .image {
    width: 307px;
    height: 382px;
    object-fit: cover;
    @media ${device.desktop} {
      width: 400px;
      height: 445px;
    }
  }
`;

export const ScrollTitle = styled.h4`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 18px;
  color: var(--slider-color);
  @media ${device.desktop} {
    font-size: 22px;
  }
`;

export const ScrollText = styled.p`
  font-family: var(--inter-font-light);
  font-weight: 300;
  font-size: 13px;
  color: var(--black-color);
  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const ScrollTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 20px;
  @media ${device.desktop} {
    gap: 24px;
    padding: 26px 14px;
  }
`;

export const ScrollNavLink = styled(NavLink)`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 3.4;
  color: var(--stack-color);
`;
