import styled from "styled-components";
import { Input, Typography, Textarea, Button } from "@material-tailwind/react";

export const FormTitle = styled(Typography)`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.color.black};
`;

export const FormText = styled(Typography)`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.grey};
`;

export const FormInput = styled(Input)`
  position: relative;

  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  height: 56px;
  background: ${(p) => p.theme.color.whiteSecond};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};
  margin-bottom: 14px;

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
    &:focus::placeholder,
    &:active::placeholder {
      position: absolute;
      top: 0;
      left: 18px;
    }
  }

  &::placeholder {
    color: ${(p) => p.theme.color.greyPlaceholder};
  }
`;

export const FormTextArea = styled(Textarea)`
  position: relative;
  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  height: 114px;
  margin-bottom: 24px;
  background: ${(p) => p.theme.color.whiteSecond};
  resize: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 40px;
  }

  &::-webkit-scrollbar-track {
    margin: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 36px;
    border: 16px solid transparent;
    background-clip: content-box;
    background-color: #d9d9d9;
  }

  &::placeholder {
    color: ${(p) => p.theme.color.greyPlaceholder};
  }

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
  }
`;

export const FormBtn = styled(Button)`
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
  height: 56px;
  background: ${(p) => p.theme.color.red};

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.whiteOrigin};
  transition: border-color 300ms ease-in-out;

  &:hover,
  :active {
    background: ${(p) => p.theme.color.redSecond};
  }
`;
