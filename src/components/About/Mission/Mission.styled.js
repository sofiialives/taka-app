import styled from "styled-components";
import { device } from "styles/deviceSize";

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    gap: 105px;
  }
`;
