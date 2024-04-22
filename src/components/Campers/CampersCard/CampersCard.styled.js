import styled from "styled-components";

// *****   Styled card with information about campers  ****

export const CardWrapper = styled.li`
  display: flex;
  gap: 24px;
  border: ${(p) => p.theme.border.cardBorder};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const CamperDataWrapper = styled.div`
  width: 526px;
  height: 310px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`;

export const CamperData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 8px;
`;

export const CamperPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const CamperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 16px 40px;
  width: 166px;
  height: 56px;
  border-radius: 200px;
  background: ${(p) => p.theme.color.red};
  font-family: inherit;
  font-weight: 500;
  line-height: inherit;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.color.whiteOrigin};
  transition: transform 300ms ease-in-out, background 300ms ease-in-out;

  &:hover,
  :active {
    background: ${(p) => p.theme.color.redSecond};
  }
`;

export const HeartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-left: 10px;
  transform: scaleX(1);

  &:hover,
  :active {
    transform: scaleX(1.1);
    overflow: visible;
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
  &.fullData {
    margin-bottom: 16px;
  }
`;

export const Reviews = styled.div`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin-right: 16px;
`;

export const Description = styled.p`
  color: ${(p) => p.theme.color.grey};
  text-align: start;
  white-space: nowrap;
  margin-bottom: 24px;

  &.fullData {
    white-space: normal;
    margin-bottom: 44px;
  }
`;

// ********   Styled SVG    ********

export const HeartSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${(p) => p.theme.color.black};
  fill: none;
  transform: scaleX(1);
  transition: transform 300ms ease-in-out, fill 300ms ease-in-out;

  &:hover,
  &.active {
    fill: ${(p) => p.theme.color.red};
    stroke: ${(p) => p.theme.color.red};
    transform: scaleX(1.05);
    overflow: visible;
  }
`;

export const StarSvg = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  fill: ${(p) => p.theme.color.yellow};

  &.unrating-star {
    margin-right: 0;
    fill: ${(p) => p.theme.color.white};
  }
  &.rating-star {
    margin-right: 0;
  }
`;

export const LocationSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${(p) => p.theme.color.black};
  fill: none;
  margin-right: 4px;
`;

// *****   Styled card with full information about campers  *****

export const CampersCardFullDataWrapper = styled.div`
  width: 902px;
  height: 640px;
`;

export const FixWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${(p) => p.theme.color.whiteOrigin};

  z-index: 2000;
`;

export const DetailsBtnWrapper = styled.div`
  width: 902px;
  height: 48px;
  border-bottom: 1px solid ${(p) => p.theme.color.blackSecond};
  margin-bottom: 44px;
`;

export const DetailsBtn = styled.button`
  margin-bottom: 24px;
  height: 24px;
  background: transparent;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &:after {
    content: "";
    display: block;
    padding-top: 24px;
    height: 5px;
    border-bottom: 3px solid transparent;
    transition: border-color 300ms ease-in-out;
  }

  &.active-features:after,
  &.active-reviews:after,
  &:hover:after {
    border-color: ${(p) => p.theme.color.red};
  }
`;

export const VehicleWrapper = styled.div`
  display: flex;
`;

export const VehicleEquipmentWrapper = styled.div`
  width: 430px;
  height: 532px;
  margin-right: 24px;
`;

export const VehicleTitleWrapper = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  border-bottom: 1px solid ${(p) => p.theme.color.blackThird};
  height: 48px;
  margin-bottom: 24px;
`;

export const VehicleReviewsRating = styled.div`
  width: 96px;
  height: 16px;
`;

export const VehicleBookFormWrapper = styled.div`
  border: 1px solid ${(p) => p.theme.color.blackSecond};
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
`;

export const ImagesFullDataWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-top: 144px;
`;

export const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 290px;
  height: 310px;
  background-color: ${(p) => p.theme.color.whiteSecond};
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &.contain-card {
    object-fit: contain;
  }
`;
