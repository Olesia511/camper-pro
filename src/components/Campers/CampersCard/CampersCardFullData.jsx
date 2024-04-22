import React from "react";
import sprite from "assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/campers/selectors";

import "react-toastify/dist/ReactToastify.css";

import {
  Description,
  LocationSvg,
  Reviews,
  ReviewsWrapper,
  StarSvg,
  CampersCardFullDataWrapper,
  DetailsBtn,
  DetailsBtnWrapper,
  VehicleEquipmentWrapper,
  VehicleBookFormWrapper,
  VehicleWrapper,
  VehicleTitleWrapper,
  FixWrapper,
} from "./CampersCard.styled";

import { useState } from "react";
import { VehicleDetailsList } from "../VehicleDetailsList/VehicleDetailsList";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { EquipmentsList } from "../EquipmentsList/EquipmentsList";
import { VehicleImagesList } from "../VehicleImagesList";
import { SimpleRegistrationForm } from "../SimpleRegistrationForm/SimpleRegistrationForm";

export const CampersCardFullData = ({ campId }) => {
  const cards = useSelector(selectCampers);
  const card = cards.find((el) => {
    return el._id === campId;
  });

  const [isActiveFeaturesBtn, setiSActiveFeaturesBtn] = useState(true);
  const [isActiveReviewsBtn, setiSActiveReviewsBtn] = useState(false);

  const { name, price, rating, location, description, reviews } = card;

  return (
    <CampersCardFullDataWrapper>
      <FixWrapper>
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
      </FixWrapper>

      <VehicleImagesList card={card} />

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
              <EquipmentsList card={card} classEquipment={"full-data"} />
              <VehicleTitleWrapper>Vehicle details</VehicleTitleWrapper>
              <VehicleDetailsList card={card} />
            </>
          )}

          {isActiveReviewsBtn && <ReviewsList reviews={reviews} />}
        </VehicleEquipmentWrapper>

        <VehicleBookFormWrapper>
          <SimpleRegistrationForm />
        </VehicleBookFormWrapper>
      </VehicleWrapper>
    </CampersCardFullDataWrapper>
  );
};
