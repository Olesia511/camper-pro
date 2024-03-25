import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCampers } from "../../redux/campers/selectors";

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
import { firstLetterUppercase, splitWordsFunc } from "../../helpers/formatedText";

import { setFilters } from "../../redux/filters/slice";

export const CampersFilter = () => {
  function SimpleRegistrationForm() {
    const [location, setLocation] = useState("");
    const [isCheckedRadio, setIsCheckedRadio] = useState([true, false, false]);
    const [isCheckedBox, setIsCheckedBox] = useState([false, false, false, false, false]);

    const dispatch = useDispatch();

    const catalogCampers = useSelector(selectCampers);

    const svgIconsRadio = [
      { icon: "icon-camper-1", name: "panel truck", class: "" },
      { icon: "icon-camper-2", name: "fully integrated", class: "fully-integrated" },
      { icon: "icon-camper-3", name: "alcove", class: "" },
    ];

    const svgIconsBox = [
      { icon: "icon-wind", name: "AC", class: "", id: "airConditioner" },
      { icon: "icon-line-pd", name: "Automatic", class: "stroke", id: "transmission" },
      { icon: "icon-gastronomy", name: "Kitchen", class: "stroke", id: "kitchen" },
      { icon: "icon-tv", name: "TV", class: "stroke", id: "TV" },
      { icon: "icon-shower", name: "Shower/WC", class: "stroke", id: "shower" },
    ];

    useEffect(() => {
      handleCheckboxChange(0, false);
    }, []);

    const resetFilters = () => {
      dispatch(setFilters([]));
    };
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
    const flattenObject = (obj) => {
      const flattened = {};

      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            flattened[nestedKey] = nestedValue;
          });
        } else {
          flattened[key] = value;
        }
      });
      return flattened;
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      let filteredItems = catalogCampers;
      if (location !== "") {
        filteredItems = catalogCampers.filter((item) =>
          item.location.toLowerCase().includes(location.toLocaleLowerCase())
        );
      }

      const selectedRadioIndex = isCheckedRadio.findIndex((isChecked) => {
        return isChecked;
      });

      if (selectedRadioIndex !== -1) {
        const selectedRadioId = svgIconsRadio[selectedRadioIndex].name.toLocaleLowerCase();

        filteredItems = filteredItems.filter((item) => {
          const radioItem = splitWordsFunc(item.form).toLocaleLowerCase();
          if (radioItem === selectedRadioId) {
            return item;
          }
        });
      }

      const selectedCheckboxes = isCheckedBox
        .map((isChecked, index) => {
          return isChecked ? svgIconsBox[index].id : null;
        })
        .filter(Boolean);

      if (selectedCheckboxes.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          const flattenedItem = flattenObject(item);
          const allKeysExist = selectedCheckboxes.every((checkbox) => {
            return flattenedItem.hasOwnProperty(checkbox);
          });
          return allKeysExist;
        });
        const filt1 = filteredItems.map((obj) => obj._id);
        dispatch(setFilters(filt1));
      } else {
        const filt2 = filteredItems.map((obj) => obj._id);
        dispatch(setFilters(filt2));
      }
    };

    return (
      <>
        <FiltersWrapper>
          <form style={{ marginBottom: "24px" }} onSubmit={(e) => handleSubmit(e)}>
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
                    id={svgIconsBox[index].id}
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

                    <RadioLabel htmlFor={svgIconsRadio[index].name}>
                      {firstLetterUppercase(svgIconsRadio[index].name)}
                    </RadioLabel>
                  </RadioLabelWrapper>
                </RadioInputWrapper>
              ))}

              <div></div>
            </RadioGroupWrapper>

            <FormBtn type="submit">Send</FormBtn>
          </form>

          <FormBtn type="submit" onClick={resetFilters}>
            Reset
          </FormBtn>
        </FiltersWrapper>
      </>
    );
  }
  return <>{SimpleRegistrationForm()}</>;
};
