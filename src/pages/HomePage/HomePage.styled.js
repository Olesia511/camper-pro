// import image from "../../../public/back.webp";
import image from "../../assets/backg-img-3-min.jpg";
import { styled } from "styled-components";

export const WelcomeSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
`;
export const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 164px;
  letter-spacing: 1.2;
  color: ${(p) => p.theme.color.white};
  text-align: center;
  margin-bottom: 60px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const ImgFirst = styled.img`
  position: relative;
  height: 320px;
  width: 600px;
  border-radius: 150px;
  border: 12px solid ${(p) => p.theme.color.grey};
  overflow: hidden;

  opacity: 1;
  object-fit: cover;
  transform: scale(1);
  transition: transform 500ms ease-in-out, object-fit 500ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  &.contain-card {
    object-fit: contain;
  }
`;
