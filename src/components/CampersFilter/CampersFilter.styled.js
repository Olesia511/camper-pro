import styled from "styled-components";
import { Input, Card, Button } from "@material-tailwind/react";

export const FiltersWrapper = styled(Card)`
  width: 360px;
  margin-right: 64px;
`;

export const LocationLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.greyPlaceholder};
  margin-bottom: 8px;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  border: none;
  padding: 18px;
  height: 56px;
  background: ${(p) => p.theme.color.whiteSecond};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};
  margin-bottom: 32px;
`;

export const FormInput = styled(Input)`
  position: relative;

  border: none;
  padding: 8px 0;

  background: ${(p) => p.theme.color.whiteSecond};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.color.black};

  &:focus,
  &:active {
    outline: 2px solid ${(p) => p.theme.color.blackSecond};
  }

  &::placeholder {
    color: ${(p) => p.theme.color.greyPlaceholder};
  }
`;

export const LocationSvg = styled.svg`
  width: 18px;
  height: 20px;
  stroke: ${(p) => p.theme.color.black};
  fill: none;
  margin-right: 8px;
`;

export const VehicleSvg = styled.svg`
  width: 40px;
  height: 28px;
  stroke: ${(p) => p.theme.color.black};
  margin-bottom: 8px;
`;

export const EquipmentTitle = styled.div`
  height: 48px;
  border-bottom: 1px solid ${(p) => p.theme.color.blackThird};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const FilterTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.grey};

  margin-bottom: 14px;
`;

export const RadioGroupWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 95px;
  margin-bottom: 64px;
`;

export const RadioLabel = styled.label`
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;

export const RadioInputWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
  border-radius: 10px;
  width: 106px;
  height: 95px;
  transition: all 300ms ease;

  &.fully-integrated {
    width: 128px;
  }
  &.checked {
    border-color: ${(p) => p.theme.color.red};
    transform: scale(1.05);
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
`;

export const RadioLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const EquipmentSvg = styled.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  fill: ${(p) => p.theme.color.black};
  stroke: none;

  &.stroke {
    stroke: ${(p) => p.theme.color.black};
    stroke-width: 1.8;
    fill: none;
  }
`;

// *********** CheckedBox ************

export const CheckedBoxInputWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
  border-radius: 10px;
  width: 113px;
  height: 95px;
  transition: all 300ms ease;
  margin-right: 10px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &.checked {
    border-color: ${(p) => p.theme.color.red};
    transform: scale(1.05);
  }
`;

export const CheckedBoxInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  border: 1px solid ${(p) => p.theme.color.blackSecond};
`;

export const CheckedBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CheckedBoxGroupWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const CheckedBoxLabel = styled.label`
  width: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
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
