import { CardImage, CardImageWrapper, ImagesFullDataWrapper } from "./CampersCard.styled";

export const VehicleImagesList = ({ card }) => {
  const { name, gallery } = card;
  return (
    <ImagesFullDataWrapper>
      {gallery.map((el, i) => (
        <CardImageWrapper key={i}>
          <CardImage src={el} alt={name} />
        </CardImageWrapper>
      ))}
    </ImagesFullDataWrapper>
  );
};
