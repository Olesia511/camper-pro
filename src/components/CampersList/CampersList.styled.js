import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;
  background: ${(p) => p.theme.color.whiteOrigin};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  transition: transform 300ms ease-in-out, background 300ms ease-in-out;

  &:hover {
    border-color: ${(p) => p.theme.color.red};
  }

  &.disabl {
    display: none;
  }
`;
