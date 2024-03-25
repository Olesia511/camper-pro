import React, { useEffect } from "react";
import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicleCard } from "../../redux/campers/selectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CardImage,
  CardImageWrapper,
  Description,
  LocationSvg,
  Reviews,
  ReviewsWrapper,
  StarSvg,
  ImagesFullDataWrapper,
  CampersCardFullDataWrapper,
  DetailsBtn,
  DetailsBtnWrapper,
  EquipmentDataWrapper,
  EquipmentWrapper,
  EquipmentSvgFill,
  EquipmentSvgStroke,
  VehicleEquipmentWrapper,
  VehicleBookFormWrapper,
  VehicleWrapper,
  VehicleDetails,
  VehicleTitleWrapper,
  VehicleReviewsCircle,
  VehicleReviewsName,
  VehicleReviewsDataWrapper,
  VehicleReviewsComment,
  VehicleReviewsWrapper,
  FormTitle,
  FormText,
  FormInput,
  FormTextArea,
  FormBtn,
} from "../CampersCard/CampersCard.styled";

import { useState } from "react";
import { firstLetterUppercase, splitWordsFunc, splitDataFunc } from "../../helpers/formatedText";

import { Card } from "@material-tailwind/react";
import { ratingFunc } from "../../helpers/ratingStarFunction";
import StyledDatepicker from "../DatePicker/StyledDatePicker";
import { orderVehicle } from "../../redux/bookVehicle/slice";
import { selectorDateBook } from "../../redux/dateBook/selectors";

import { changeDate } from "../../redux/dateBook/slice";
import { format } from "date-fns";
import { fetchCamperById } from "../../redux/campers/operations";

const toastIsRequired = (nameField) => {
  toast(`${nameField} is required.`);
};
const toastIsValidEmail = () => {
  toast(`Email is not valid. Example: testmail@gmail.com`);
};

const toastBookVehicle = (data) => {
  const {
    dateBook,
    vehicle: { name, form },
  } = data;

  toast(`You have booked ${name} form ${form} for this date ${format(new Date(dateBook), "dd/MM/yyyy")} .`);
};

export function SimpleRegistrationForm() {
  const dateBook = useSelector(selectorDateBook);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const vehicleCardBook = useSelector(selectVehicleCard);

  const dispatch = useDispatch();

  function isEmailValid(email) {
    const regex =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, _id, form } = vehicleCardBook;

    if (userName.trim() === "") {
      toastIsRequired("Name");
      return;
    }
    if (email.trim() === "") {
      toastIsRequired("Email");
      return;
    } else {
      const isValid = isEmailValid(email);
      if (!isValid) {
        toastIsValidEmail();
        return;
      }
    }

    dispatch(
      orderVehicle({ name: userName, email, textArea, dateBook, vehicle: { name, _id, form: splitWordsFunc(form) } })
    );
    dispatch(changeDate(new Date().toISOString()));

    toastBookVehicle({ dateBook, vehicle: { name, form: splitWordsFunc(form) } });

    setUserName("");
    setEmail("");
    setTextArea("");
  };

  return (
    <Card color="transparent" shadow={false}>
      <FormTitle>Book your campervan now</FormTitle>
      <FormText> Stay connected! We are always ready to help you. </FormText>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <FormInput placeholder="Name" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />

          <FormInput placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <StyledDatepicker />
          <div>
            <FormTextArea
              placeholder="Comment"
              type="textarea"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
            />
          </div>
        </div>
        <FormBtn type="submit" onClick={handleSubmit}>
          Send
        </FormBtn>
      </form>
    </Card>
  );
}

export const CampersCardFullData = ({ campId, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(campId));
  }, []);

  const card = useSelector(selectVehicleCard);
  const [isActiveFeaturesBtn, setiSActiveFeaturesBtn] = useState(true);
  const [isActiveReviewsBtn, setiSActiveReviewsBtn] = useState(false);

  const { name, price, rating, location, adults, children, engine, transmission } = card;
  const { form, length, width, height, tank, consumption, description, details, gallery, reviews } = card;

  const { CD, TV, airConditioner, beds, freezer, gas, hob, kitchen, microwave, radio, shower, toilet, water } = details;

  return (
    <CampersCardFullDataWrapper>
      <h2 style={{ marginBottom: "8px" }}> {name} </h2>

      <ReviewsWrapper className="fullData">
        <StarSvg>
          <use href={`${sprite}#icon-star`} />
        </StarSvg>
        <Reviews>
          {rating}({reviews.length} Reviews)
        </Reviews>

        <LocationSvg>
          <use href={`${sprite}#icon-location`} />
        </LocationSvg>
        {location}
      </ReviewsWrapper>

      <h2 style={{ marginBottom: "24px" }}> &euro;{price.toFixed(2)}</h2>

      <ImagesFullDataWrapper>
        {gallery.map((el, i) => {
          return (
            <CardImageWrapper key={i}>
              <CardImage src={el} alt={name} />
            </CardImageWrapper>
          );
        })}
      </ImagesFullDataWrapper>

      <Description className="fullData">{description}</Description>

      <DetailsBtnWrapper>
        <DetailsBtn
          className={isActiveFeaturesBtn ? "active-features" : ""}
          type="button"
          style={{ marginRight: "40px" }}
          onClick={() => {
            setiSActiveFeaturesBtn(true);
            setiSActiveReviewsBtn(false);
          }}
        >
          Features
        </DetailsBtn>
        <DetailsBtn
          className={isActiveReviewsBtn ? "active-reviews" : ""}
          type="button"
          onClick={() => {
            setiSActiveReviewsBtn(true);
            setiSActiveFeaturesBtn(false);
          }}
        >
          Reviews
        </DetailsBtn>
      </DetailsBtnWrapper>

      <VehicleWrapper>
        <VehicleEquipmentWrapper>
          {isActiveFeaturesBtn && (
            <>
              <EquipmentDataWrapper className="fullData">
                {adults && (
                  <EquipmentWrapper>
                    <EquipmentSvgFill>
                      <use href={`${sprite}#icon-users`} />
                    </EquipmentSvgFill>
                    {adults} adults
                    {children > 0 && `, ${children} children`}
                  </EquipmentWrapper>
                )}

                {transmission && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-line-pd`} />
                    </EquipmentSvgStroke>
                    {firstLetterUppercase(transmission)}
                  </EquipmentWrapper>
                )}

                {airConditioner >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgFill>
                      <use href={`${sprite}#icon-wind`} />
                    </EquipmentSvgFill>
                    AC
                  </EquipmentWrapper>
                )}

                {engine && (
                  <EquipmentWrapper>
                    <EquipmentSvgFill>
                      <use href={`${sprite}#icon-gasoline`} />
                    </EquipmentSvgFill>
                    {firstLetterUppercase(engine)}
                  </EquipmentWrapper>
                )}

                {kitchen >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-gastronomy`} />
                    </EquipmentSvgStroke>
                    Kitchen
                  </EquipmentWrapper>
                )}

                {beds >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-bed`} />
                    </EquipmentSvgStroke>
                    {beds > 1 ? `${beds} Beds` : `${beds} Bed`}
                  </EquipmentWrapper>
                )}

                {CD >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-cd`} />
                    </EquipmentSvgStroke>
                    CD
                  </EquipmentWrapper>
                )}

                {radio >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-radio`} />
                    </EquipmentSvgStroke>
                    Radio
                  </EquipmentWrapper>
                )}

                {hob >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-hob`} />
                    </EquipmentSvgStroke>
                    {hob}
                    Hob
                  </EquipmentWrapper>
                )}

                {toilet >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgFill>
                      <use href={`${sprite}#icon-toilet-paper`} />
                    </EquipmentSvgFill>
                    Toilet
                  </EquipmentWrapper>
                )}

                {shower >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-shower`} />
                    </EquipmentSvgStroke>
                    Shower
                  </EquipmentWrapper>
                )}

                {freezer >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-freezer`} />
                    </EquipmentSvgStroke>
                    Freezer
                  </EquipmentWrapper>
                )}

                {gas && (
                  <EquipmentWrapper>
                    <EquipmentSvgFill>
                      <use href={`${sprite}#icon-gas`} />
                    </EquipmentSvgFill>
                    Gas
                  </EquipmentWrapper>
                )}

                {water && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-water`} />
                    </EquipmentSvgStroke>
                    Water
                  </EquipmentWrapper>
                )}

                {microwave >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-microwave`} />
                    </EquipmentSvgStroke>
                    Microwave
                  </EquipmentWrapper>
                )}

                {TV >= 1 && (
                  <EquipmentWrapper>
                    <EquipmentSvgStroke>
                      <use href={`${sprite}#icon-tv`} />
                    </EquipmentSvgStroke>
                    TV
                  </EquipmentWrapper>
                )}
              </EquipmentDataWrapper>

              <VehicleTitleWrapper>Vehicle details</VehicleTitleWrapper>

              <ul>
                <VehicleDetails>
                  <p>Form</p> {splitWordsFunc(form)}
                </VehicleDetails>

                <VehicleDetails>
                  <p>Length</p> {splitDataFunc(length)}
                </VehicleDetails>

                <VehicleDetails>
                  <p>Width</p> {splitDataFunc(width)}
                </VehicleDetails>

                <VehicleDetails>
                  <p>Height</p> {splitDataFunc(height)}
                </VehicleDetails>

                <VehicleDetails>
                  <p>Tank</p> {splitDataFunc(tank)}
                </VehicleDetails>

                <VehicleDetails>
                  <p>Consumption</p> {splitDataFunc(consumption)}
                </VehicleDetails>
              </ul>
            </>
          )}

          {isActiveReviewsBtn && (
            <ul>
              {reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
                <VehicleReviewsWrapper key={`${reviewer_name + i}`}>
                  <VehicleReviewsDataWrapper>
                    <VehicleReviewsCircle>{reviewer_name.charAt(0).toUpperCase()}</VehicleReviewsCircle>

                    <div>
                      <VehicleReviewsName>{reviewer_name}</VehicleReviewsName>
                      {ratingFunc(reviewer_rating)}
                    </div>
                  </VehicleReviewsDataWrapper>
                  <VehicleReviewsComment>{comment}</VehicleReviewsComment>
                </VehicleReviewsWrapper>
              ))}
            </ul>
          )}
        </VehicleEquipmentWrapper>

        <VehicleBookFormWrapper>{SimpleRegistrationForm()}</VehicleBookFormWrapper>
      </VehicleWrapper>
    </CampersCardFullDataWrapper>
  );
};
