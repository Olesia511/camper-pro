import sprite from "../../../assets/sprite.svg";
import { firstLetterUppercase } from "../../../helpers/formatedText";

import { iconsEquipmentArray } from "../../../helpers/iconsEquipmentArray";
import { EquipmentDataItem, EquipmentDataList, EquipmentSvg } from "./EquipmentsList.styled";

export const EquipmentsList = ({ card, classEquipment }) => {
  const svgIcons = iconsEquipmentArray(card);

  return (
    <EquipmentDataList className={classEquipment}>
      {svgIcons.map(
        (el, i) =>
          el.condition && (
            <EquipmentDataItem key={i}>
              <EquipmentSvg fill={el.fill} stroke={el.stroke}>
                <use href={`${sprite}#${el.icon}`} />
              </EquipmentSvg>
              {el.name && firstLetterUppercase(el.name)}
              {el.nameToUppercase}
              {el.textCondition}
            </EquipmentDataItem>
          )
      )}
    </EquipmentDataList>
  );
};
