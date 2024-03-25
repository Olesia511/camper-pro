import image from "../../../public/back.webp";
import { styled } from "styled-components";

export const WelcomeSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  background-attachment: fixed;
`;
