import styled from "styled-components";
import { Button } from "@material-tailwind/react";

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
