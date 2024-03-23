import { Rating } from "@material-tailwind/react";
import { StarSvg } from "../components/CampersCard/CampersCard.styled";
import sprite from "assets/sprite.svg";

export const ratingFunc = (num) => {
  function RatedIcon() {
    return (
      <StarSvg className="rating-star">
        <use href={`${sprite}#icon-star`} />
      </StarSvg>
    );
  }
  function UnratedIcon() {
    return (
      <StarSvg className="unrating-star">
        <use href={`${sprite}#icon-star`} />
      </StarSvg>
    );
  }

  function CustomRatingIcon(num) {
    return (
      <Rating
        style={{ width: "96px", height: "16px" }}
        value={num}
        ratedIcon={<RatedIcon />}
        unratedIcon={<UnratedIcon />}
        readonly
      />
    );
  }
  return CustomRatingIcon(num);
};
