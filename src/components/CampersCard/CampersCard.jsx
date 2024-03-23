import { useEffect, useState } from "react";
import {
  CamperData,
  CardImage,
  CardImageWrapper,
  CardWrapper,
  HeartBtn,
  HeartSvg,
  CamperPrice,
  CamperDataWrapper,
  StarSvg,
  ReviewsWrapper,
  LocationSvg,
  Reviews,
  Description,
  EquipmentDataWrapper,
  EquipmentSvgFill,
  EquipmentSvgStroke,
  EquipmentWrapper,
  CamperBtn,
} from "./CampersCard.styled";
import sprite from "assets/sprite.svg";
import { ModalWindow } from "../Modal/Modal";
// import { VehicleDataCard } from "../VehicleDataCard/VehicleDataCard";
import { useDispatch } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { firstLetterUppercase, sentenceSlice } from "../../helpers/formatedText";
import { CampersCardFullData } from "./CampersCardFullData";

export const CampersCard = ({ camp }) => {
  const [ishovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { _id, name, price, rating, location, adults, children } = camp;
  const { engine, transmission, description, details, gallery, reviews } = camp;

  useEffect(() => {
    if (isModalOpen) {
      dispatch(fetchCamperById(_id));
    }
  }, [isModalOpen]);

  return (
    <>
      <CardWrapper key={_id}>
        <CardImageWrapper>
          <CardImage
            className={ishovered ? "containCard" : ""}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={gallery[0]}
            alt={name}
          />
        </CardImageWrapper>

        <CamperDataWrapper>
          <CamperData>
            <h2> {sentenceSlice(name)} </h2>
            <CamperPrice>
              <h2> &euro;{price.toFixed(2)}</h2>
              <HeartBtn>
                <HeartSvg>
                  <use href={`${sprite}#icon-heart`} />
                </HeartSvg>
              </HeartBtn>
            </CamperPrice>
          </CamperData>

          <ReviewsWrapper>
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

          <Description>{sentenceSlice(description)}</Description>

          <EquipmentDataWrapper>
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

            {engine && (
              <EquipmentWrapper>
                <EquipmentSvgFill>
                  <use href={`${sprite}#icon-gasoline`} />
                </EquipmentSvgFill>
                {firstLetterUppercase(engine)}
              </EquipmentWrapper>
            )}

            {details.kitchen >= 1 && (
              <EquipmentWrapper>
                <EquipmentSvgStroke>
                  <use href={`${sprite}#icon-gastronomy`} />
                </EquipmentSvgStroke>
                Kitchen
              </EquipmentWrapper>
            )}

            {details.beds >= 1 && (
              <EquipmentWrapper>
                <EquipmentSvgStroke>
                  <use href={`${sprite}#icon-bed`} />
                </EquipmentSvgStroke>
                {details.beds > 1 ? `${details.beds} Beds` : `${details.beds} Bed`}
              </EquipmentWrapper>
            )}

            {details.airConditioner >= 1 && (
              <EquipmentWrapper>
                <EquipmentSvgFill>
                  <use href={`${sprite}#icon-wind`} />
                </EquipmentSvgFill>
                AC
              </EquipmentWrapper>
            )}
          </EquipmentDataWrapper>

          <CamperBtn type="button" onClick={() => setIsModalOpen(true)}>
            Show more
          </CamperBtn>
        </CamperDataWrapper>
      </CardWrapper>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CampersCardFullData onClose={() => setIsModalOpen(false)} />
        </ModalWindow>
      )}
    </>
  );
};
