import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCampers } from "../../redux/campers/selectors";
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
  FormBtn,
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
import { flattenObjectInArray } from "../../helpers/flattenObjectInArray";

export const CampersFilter = () => {
  function SimpleRegistrationForm() {
    const [location, setLocation] = useState("");
    const [isCheckedRadio, setIsCheckedRadio] = useState([true, false, false]);
    const [isCheckedBox, setIsCheckedBox] = useState([false, false, false, false, false]);

    const dispatch = useDispatch();

    const catalogCampers = useSelector(selectCampers);

    const filteredAllCampersId = catalogCampers.map((el) => el._id);

    useEffect(() => {
      dispatch(setFilters(filteredAllCampersId));
    }, []);

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
      setLocation("");
      setIsCheckedRadio([true, false, false]);
      setIsCheckedBox([false, false, false, false, false]);
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

    const handleSubmit = (event) => {
      event.preventDefault();

      let filteredCampers = [];

      // ========    FILTERED BY LOCATION      ==================

      const locationFilter = () => {
        if (location !== "") {
          const result = catalogCampers.filter((item) => item.location.toLowerCase().includes(location.toLowerCase()));

          filteredCampers.push(result);
        } else {
          filteredCampers.push(catalogCampers);
        }
      };

      locationFilter();

      // ========    FILTERED BY RADIO BTN   ==================

      const radioBtnFilter = () => {
        const campers = filteredCampers[0];
        if (campers.length === 0) {
          return;
        }

        let radioCampers = [];

        const selectedRadioIndex = isCheckedRadio.findIndex((isChecked) => {
          return isChecked;
        });
        const selectedRadio = svgIconsRadio[selectedRadioIndex].name.toLowerCase();

        campers.filter((camper) => {
          const radioItem = splitWordsFunc(camper.form).toLowerCase();
          if (radioItem === selectedRadio) {
            radioCampers.push(camper);
          }
        });

        filteredCampers = [...radioCampers];
      };

      radioBtnFilter();

      // ========    FILTERED BY CHECKBOX   ==================

      const checkboxesFilter = () => {
        const checkboxesCampers = filteredCampers;
        if (checkboxesCampers.length === 0) {
          return;
        }

        const checkedDataArr = [];

        isCheckedBox.filter((el, i) => {
          if (el === true) {
            checkedDataArr.push(svgIconsBox[i].id);
          }
        });

        if (checkedDataArr.length > 0) {
          let checkedCampers = [];

          checkboxesCampers.map((camper) => {
            const obj = flattenObjectInArray(camper);

            let num = 0;
            checkedDataArr.map((el) => {
              obj.find((ent) => {
                const entrie = Object.entries(ent)[0];
                const key = entrie[0];
                const val = entrie[1];

                if (key === el && typeof val === "string" && val !== "") {
                  num += 1;
                }
                if (key === el && typeof val === "number" && val > 0) {
                  num += 1;
                }
              });
            });

            if (num === checkedDataArr.length) {
              checkedCampers.push(camper);
            }
          });

          filteredCampers = [...checkedCampers];
        }
      };

      checkboxesFilter();
      if (filteredCampers.length > 0) {
        const filtersId = filteredCampers.map((el) => el._id);

        dispatch(setFilters(filtersId));
      } else {
        dispatch(setFilters(null));
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
            <FormBtn type="submit">Search</FormBtn>
          </form>
          <FormBtn type="button" onClick={resetFilters}>
            Reset
          </FormBtn>
        </FiltersWrapper>
      </>
    );
  }
  return <SimpleRegistrationForm />;
};
