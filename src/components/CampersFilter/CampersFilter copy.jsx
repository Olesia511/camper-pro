import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectorDateBook } from "../../redux/dateBook/selectors";
import { useState } from "react";
import { selectVehicleCard } from "../../redux/campers/selectors";
import { Card } from "@material-tailwind/react";
import { FormBtn } from "../CampersCard/CampersCard.styled";
import {
  EquipmentSvg,
  FormInput,
  FormInputWrapper,
  LocationLabel,
  LocationSvg,
  RadioContainer,
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

    // const handleRadioChange = (index) => {
    //   setIsCheckedRadio((prevState) => {
    //     const newState = prevState.map((value, i) => i === index);
    //     return newState;
    //   });
    // };

    // const handleCheckboxChange = (index) => {
    //   setIsCheckedBox((prevState) => {
    //     const newState = [...prevState]; // Створення копії поточного стану
    //     newState[index] = !newState[index]; // Зміна стану чекбокса з відповідним індексом
    //     return newState; // Повернення нового стану
    //   });
    // };

    const handleSubmit = (event) => {
      event.preventDefault();
    };
    const svgIconsBox = [
      { icon: "icon-wind", class: "" },
      { icon: "icon-line-pd", class: "stroke" },
      { icon: "icon-gastronomy", class: "stroke" },
      { icon: "icon-tv", class: "stroke" },
      { icon: "icon-shower", class: "stroke" },
    ];

    const svgIconsRadio = [
      { icon: "icon-camper-1", name: "van" },
      { icon: "icon-camper-2", name: "fully integrated" },
      { icon: "icon-camper-3", name: "alcove" },
    ];

    return (
      <>
        {" "}
        <Card color="transparent" shadow={false}>
          {/* <FormTitle>Book your campervan now</FormTitle>
        <FormText> Stay connected! We are always ready to help you. </FormText> */}

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

            <RadioContainer>
              <RadioGroupWrapper>
                {/*  */}
                {/*  */}
                {/*  */}
                {/* van */}
                {/*  */}
                {/*  */}
                {/* 11111 */}
                {/* <RadioInputWrapper className={isCheckedRadio[0] ? "checked" : ""}>
                  <RadioInput
                    id="van"
                    type="radio"
                    name="radio"
                    checked={isCheckedRadio[0]}
                    onChange={() => handleCheckboxChange(0, false)}
                  />
                  <RadioLabelWrapper>
                    <VehicleSvg>
                      <use href={`${sprite}#icon-camper-1`} />
                    </VehicleSvg>

                    <RadioLabel htmlFor="van">Van</RadioLabel>
                  </RadioLabelWrapper>
                </RadioInputWrapper> */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  fully */}
                {/*  */}
                {/*  */}
                {/* 2222222 */}
                {/* <RadioInputWrapper className={isCheckedRadio[1] ? "checked fully-integrated" : "fully-integrated"}>
                  <RadioInput
                    id="fully integrated"
                    type="radio"
                    name="radio"
                    checked={isCheckedRadio[1]}
                    onChange={() => handleCheckboxChange(1, false)}
                  />
                  <RadioLabelWrapper>
                    <VehicleSvg>
                      <use href={`${sprite}#icon-camper-2`} />
                    </VehicleSvg>

                    <RadioLabel htmlFor="fully">Fully Integrated</RadioLabel>
                  </RadioLabelWrapper>
                </RadioInputWrapper> */}
                {isCheckedRadio.map((isCheckedRadio, index) => (
                  <RadioInputWrapper key={index} className={isCheckedRadio[index] ? "checked" : ""}>
                    <RadioInput
                      id={svgIconsRadio[index].name}
                      type="radio"
                      name="radio"
                      checked={isCheckedRadio[index]}
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

                {/*  */}
                {/*  */}
                {/*  */}
                {/* alcove */}
                {/*  */}
                {/*  */}
                {/* 3333 */}
                {/* <RadioInputWrapper className={isCheckedRadio[2] ? "checked" : ""}>
                  <RadioInput
                    id="alcove"
                    type="radio"
                    name="radio"
                    checked={isCheckedRadio[2]}
                    onChange={() => handleCheckboxChange(2, false)}
                  />
                  <RadioLabelWrapper>
                    <VehicleSvg>
                      <use href={`${sprite}#icon-camper-3`} />
                    </VehicleSvg>

                    <RadioLabel htmlFor="alcove">Alcove</RadioLabel>
                  </RadioLabelWrapper>
                </RadioInputWrapper> */}
                {/*  */}
                {/*  */}
                {/*  */}
                <div>
                  {/* {isCheckedRadio.map((isCheckedRadio, index) => (
                    <RadioInputWrapper key={index} className={isCheckedRadio[2] ? "checked" : ""}>
                      <RadioInput
                        id={svgIconsRadio[index].name}
                        type="radio"
                        name="radio"
                        checked={isCheckedRadio[index]}
                        onChange={() => handleCheckboxChange(index, false)}
                      />
                      <RadioLabelWrapper>
                        <VehicleSvg>
                          <use href={`${sprite}#${svgIconsRadio[index].icon}`} />
                        </VehicleSvg>

                        <RadioLabel htmlFor={svgIconsRadio[index].name}>{svgIconsRadio[index].name}</RadioLabel>
                      </RadioLabelWrapper>
                    </RadioInputWrapper>
                  ))} */}
                </div>

                {/*  */}
                {/*  */}
                {/*  */}

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/* end container */}
              </RadioGroupWrapper>
            </RadioContainer>

            <div>
              {isCheckedBox.map((isCheckedBox, index) => (
                <div key={index} className={isCheckedBox[index] ? "checked" : ""}>
                  <label>
                    <input
                      type="checkbox"
                      checked={isCheckedBox[index]}
                      onChange={() => handleCheckboxChange(index, true)}
                    />
                    <EquipmentSvg className={svgIconsBox[index].class}>
                      <use href={`${sprite}#${svgIconsBox[index].icon}`} />
                    </EquipmentSvg>
                  </label>
                </div>
              ))}
            </div>

            <FormBtn type="submit" onClick={handleSubmit}>
              Send
            </FormBtn>
          </form>
        </Card>
      </>
    );
  }
  return <>{SimpleRegistrationForm()}</>;
};
