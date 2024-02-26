import styled from "styled-components";
import image from "assets/images/emailSuccess.jpg";
import { device } from "../../styles/deviceSize";
import { NavLink } from "react-router-dom";

export const EmailContainer = styled.section`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EmailBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  padding: 21px 116px;
  color: var(--bg-color);
  border-radius: 12px;
  background-color: var(--form-btn);
  margin-top: 192px;
  @media ${device.desktop} {
    display: inline-block;
    margin-top: 132px;
  }
`;

export const TextEmailStyled = styled.h2`
  text-align: center;
  font-family: var(--inter-font-regular);
  font-size: 20px;
  line-height: 1.7;
  color: var(--black-color);

  @media ${device.desktop} {
    text-align: start;
    margin: 0;
    font-family: var(--arimo-font-bold);
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
  }
`;

export const TextContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    gap: 52px;
  }
`;
