import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  border: ${(p) => p.theme.border.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
`;
