import { useState } from "react";
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

export const CampersCard = ({ camp }) => {
  const [ishovered, setIsHovered] = useState(false);
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    // form,
    // length,
    // width,
    // height,
    // tank,
    // consumption,
    description,
    details,
    gallery,
    reviews,
  } = camp;

  const sentenceSlice = (text) => {
    if (text.length > 25 && text.length < 64) {
      return text.slice(0, 25) + "...";
    }
    let sentences = text.split(".");

    if (text.length >= 64) {
      if (sentences[0].length >= 64) {
        return sentences[0].slice(0, 64) + "...";
      }
      return sentences[0] + ".";
    }
    return text;
  };
  const firstLetterUppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
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

        <CamperBtn>Show more</CamperBtn>
      </CamperDataWrapper>
    </CardWrapper>
  );
};
