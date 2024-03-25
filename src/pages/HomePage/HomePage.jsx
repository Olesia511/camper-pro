import { ImgFirst, ImgWrapper, Shadow, Title, WelcomeSection } from "./HomePage.styled";

import image2 from "../../assets/backg-img-2-min.jpg";
import image3 from "../../assets/backg-img-3-min.jpg";
import image4 from "../../assets/backg-img-4-min.jpg";
import image5 from "../../assets/backg-img-5-min.jpg";
import image6 from "../../assets/backg-img-6-min.jpg";

export default function HomePage() {
  return (
    <WelcomeSection>
      <Shadow>
        <Title>Discover Easy Travel</Title>
        <ImgWrapper>
          <ImgFirst src={image2}></ImgFirst>
          <ImgFirst src={image3}></ImgFirst>
          <ImgFirst src={image4}></ImgFirst>
          <ImgFirst src={image5}></ImgFirst>
          <ImgFirst src={image6}></ImgFirst>
        </ImgWrapper>
      </Shadow>
    </WelcomeSection>
  );
}
