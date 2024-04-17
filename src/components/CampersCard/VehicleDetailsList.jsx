import { firstLetterUppercase, splitDataFunc, splitWordsFunc } from "../../helpers/formatedText";
import { VehicleDetailsItem } from "./CampersCard.styled";

export const VehicleDetailsList = ({ card }) => {
  const { form, length, width, height, tank, consumption } = card;
  const arr = [{ form }, { length }, { width }, { height }, { tank }, { consumption }];

  return (
    <ul>
      {arr.map((el, i) => {
        return (
          <VehicleDetailsItem key={i}>
            <span> {firstLetterUppercase(Object.keys(el)[0])} </span>

            {Object.keys(el)[0] === "form" ? (
              <span> {splitWordsFunc(Object.values(el)[0])} </span>
            ) : (
              <span> {splitDataFunc(Object.values(el)[0])} </span>
            )}
          </VehicleDetailsItem>
        );
      })}
    </ul>
  );
};
