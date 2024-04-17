import styled from "styled-components";

export const EquipmentDataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  align-content: flex-start;

  &.full-data {
    margin-bottom: 44px;
    height: 200px;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  &.card-scroll {
    height: 96px;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 40px;
  }

  &::-webkit-scrollbar-track {
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 36px;
    border: 16px solid transparent;
    background-clip: content-box;
    background-color: #d9d9d9;
  }
`;

export const EquipmentDataItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  height: 44px;
  padding: 12px 18px;
  border-radius: 100px;
  white-space: nowrap;
  background: ${(p) => p.theme.color.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
`;

export const EquipmentSvg = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  stroke: ${(props) => props.stroke};
  fill: ${(props) => props.fill};
  stroke-width: 2px;
`;
