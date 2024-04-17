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
  // EquipmentDataWrapper,
  // EquipmentSvgFill,
  // EquipmentSvgStroke,
  // EquipmentWrapper,
  CamperBtn,
} from "./CampersCard.styled";
import sprite from "assets/sprite.svg";
import { ModalWindow } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { sentenceSlice } from "../../helpers/formatedText";
import { CampersCardFullData } from "./CampersCardFullData";
import { addFavorites } from "../../redux/favorites/operations";

import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { removeFavorites } from "../../redux/favorites/slice";
import { selectCampers } from "../../redux/campers/selectors";
import { EquipmentsList } from "../Campers/EquipmentsList/EquipmentsList";

export const CampersCard = ({ camp }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  // const campStor = useSelector(selectCampers);
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
    description,
    details,
    gallery,
    reviews,
  } = camp;

  const favorites = useSelector(selectFavoritesCampers).find((el) => el._id === _id);

  // useEffect(() => {
  //   if (isModalOpen) {
  //     // dispatch(fetchCamperById(_id));
  //   }
  // }, [isModalOpen]);

  const handleFavorites = () => (favorites ? dispatch(removeFavorites(_id)) : dispatch(addFavorites(_id)));

  return (
    <>
      <CardWrapper key={_id}>
        <CardImageWrapper>
          <CardImage
            className={isHovered ? "contain-card" : ""}
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
              <HeartBtn onClick={handleFavorites}>
                <HeartSvg className={favorites ? "active" : ""}>
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
          <EquipmentsList card={camp} classEquipment={"card-scroll"} />

          <CamperBtn
            type="button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Show more
          </CamperBtn>
        </CamperDataWrapper>
      </CardWrapper>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CampersCardFullData campId={_id} onClose={() => setIsModalOpen(false)} />
        </ModalWindow>
      )}
    </>
  );
};
