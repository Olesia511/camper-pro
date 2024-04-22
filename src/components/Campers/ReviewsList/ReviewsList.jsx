import { ratingFunc } from "../../../helpers/ratingStarFunction";
import {
  ReviewsCircle,
  ReviewsDataWrapper,
  ReviewsItem,
  ReviewsName,
  ReviewsComment,
  ReviewsAllList,
} from "./ReviewsList.styled";

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsAllList>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
        <ReviewsItem key={`${reviewer_name + i}`}>
          <ReviewsDataWrapper>
            <ReviewsCircle>{reviewer_name.charAt(0).toUpperCase()}</ReviewsCircle>

            <div>
              <ReviewsName>{reviewer_name}</ReviewsName>
              {ratingFunc(reviewer_rating)}
            </div>
          </ReviewsDataWrapper>
          <ReviewsComment>{comment}</ReviewsComment>
        </ReviewsItem>
      ))}
    </ReviewsAllList>
  );
};
