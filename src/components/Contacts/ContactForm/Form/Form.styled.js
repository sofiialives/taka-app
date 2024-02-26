import { device } from "styles/deviceSize";
import styled from "styled-components";

export const FormLabel = styled.p`
  font-family: var(--montserrat-font-regular);
  font-size: 12px;
  color: var(--stack-color);
  margin-bottom: 4px;
  @media ${device.desktop} {
    margin-bottom: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${device.desktop} {
    display: block;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 12px;
  @media ${device.desktop} {
    width: 400px;
    height: 58px;
  }
`;

export const FormButton = styled.button`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  color: var(--bg-color);
  padding: 21px 0;
  display: flex;
  justify-content: center;
  background-color: var(--form-btn);
  border-radius: 12px;
  margin-top: 12px;
  cursor: pointer;
  @media ${device.desktop} {
    font-family: var(--lato-font-regular);
    font-size: 16px;
    line-height: 1.4;
    padding: 18px 36px;
    margin-top: 24px;
    text-transform: uppercase;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px;
  resize: none;
`;

export const LabelDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${device.desktop} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
  }
`;
