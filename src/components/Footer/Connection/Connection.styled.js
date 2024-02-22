import styled from "styled-components";

export const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .inst-icon {
    width: 20px;
    height: 20px;
  }
`;

export const ConnectionTitle = styled.p`
  font-family: var(--prompt-font-regular);
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-footer);
  margin-bottom: 7px;
`;
