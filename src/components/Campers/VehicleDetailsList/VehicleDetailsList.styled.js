import styled from "styled-components";

export const VehicleDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: ${(p) => p.theme.color.black};

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
