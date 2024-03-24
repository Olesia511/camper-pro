import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectorDateBook } from "../../redux/dateBook/selectors";
import { useState } from "react";
import { selectVehicleCard } from "../../redux/campers/selectors";
// import { Card } from "@material-tailwind/react";
import { FormBtn } from "../CampersCard/CampersCard.styled";
import {
  CheckedBoxGroupWrapper,
  CheckedBoxInput,
  CheckedBoxInputWrapper,
  CheckedBoxLabel,
  CheckedBoxWrapper,
  EquipmentSvg,
  EquipmentTitle,
  FilterTitle,
  FiltersWrapper,
  FormInput,
  FormInputWrapper,
  LocationLabel,
  LocationSvg,
  RadioGroupWrapper,
  RadioInput,
  RadioInputWrapper,
  RadioLabel,
  RadioLabelWrapper,
  VehicleSvg,
} from "./CampersFilter.styled";

export const CampersFilter = () => {
  function SimpleRegistrationForm() {
    const [location, setLocation] = useState("");
    const [isCheckedRadio, setIsCheckedRadio] = useState([true, false, false]);
    const [isCheckedBox, setIsCheckedBox] = useState([false, false, false, false, false]);

    const handleCheckboxChange = (index, isCheckbox) => {
      if (isCheckbox) {
        setIsCheckedBox((prevState) => {
          const newState = [...prevState];
          newState[index] = !newState[index];
          return newState;
        });
      } else {
        setIsCheckedRadio((prevState) => {
          const newState = prevState.map((value, i) => i === index);
          return newState;
        });
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    const svgIconsRadio = [
      { icon: "icon-camper-1", name: "van", class: "" },
      { icon: "icon-camper-2", name: "fully integrated", class: "fully-integrated" },
      { icon: "icon-camper-3", name: "alcove", class: "" },
    ];

    const svgIconsBox = [
      { icon: "icon-wind", name: "AC", class: "" },
      { icon: "icon-line-pd", name: "Automatic", class: "stroke" },
      { icon: "icon-gastronomy", name: "Kitchen", class: "stroke" },
      { icon: "icon-tv", name: "TV", class: "stroke" },
      { icon: "icon-shower", name: "Shower/WC", class: "stroke" },
    ];

    return (
      <>
        <FiltersWrapper>
          <form onSubmit={(e) => handleSubmit(e)}>
            <LocationLabel>Location</LocationLabel>
            <FormInputWrapper>
              <LocationSvg>
                <use href={`${sprite}#icon-location`} />
              </LocationSvg>
              <FormInput
                placeholder="City"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </FormInputWrapper>

            <FilterTitle>Filters</FilterTitle>

            <EquipmentTitle>Vehicle equipment</EquipmentTitle>

            <CheckedBoxGroupWrapper>
              {isCheckedBox.map((isChecked, index) => (
                <CheckedBoxInputWrapper key={index} className={isChecked ? "checked" : ""}>
                  <CheckedBoxInput
                    id={svgIconsBox[index].name}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index, true)}
                  />
                  <CheckedBoxWrapper>
                    <EquipmentSvg className={svgIconsBox[index].class}>
                      <use href={`${sprite}#${svgIconsBox[index].icon}`} />
                    </EquipmentSvg>
                    <CheckedBoxLabel>{svgIconsBox[index].name}</CheckedBoxLabel>
                  </CheckedBoxWrapper>
                </CheckedBoxInputWrapper>
              ))}
            </CheckedBoxGroupWrapper>

            <EquipmentTitle>Vehicle type</EquipmentTitle>

            <RadioGroupWrapper>
              {isCheckedRadio.map((isChecked, index) => (
                <RadioInputWrapper
                  key={index}
                  className={isChecked ? `${svgIconsRadio[index].class} checked` : `${svgIconsRadio[index].class}`}
                >
                  <RadioInput
                    id={svgIconsRadio[index].name}
                    type="radio"
                    name="radio"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index, false)}
                  />
                  <RadioLabelWrapper>
                    <VehicleSvg>
                      <use href={`${sprite}#${svgIconsRadio[index].icon}`} />
                    </VehicleSvg>

                    <RadioLabel htmlFor={svgIconsRadio[index].name}>{svgIconsRadio[index].name}</RadioLabel>
                  </RadioLabelWrapper>
                </RadioInputWrapper>
              ))}

              <div></div>
            </RadioGroupWrapper>

            <FormBtn type="submit" onClick={handleSubmit}>
              Send
            </FormBtn>
          </form>
        </FiltersWrapper>
      </>
    );
  }
  return <>{SimpleRegistrationForm()}</>;
};
