import React, { useEffect } from "react";
import sprite from "assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicleCard } from "../../redux/campers/selectors";

import "react-toastify/dist/ReactToastify.css";

import {
  Description,
  LocationSvg,
  Reviews,
  ReviewsWrapper,
  StarSvg,
  CampersCardFullDataWrapper,
  DetailsBtn,
  DetailsBtnWrapper,
  VehicleEquipmentWrapper,
  VehicleBookFormWrapper,
  VehicleWrapper,
  VehicleTitleWrapper,
} from "../CampersCard/CampersCard.styled";

import { useState } from "react";
// import { splitWordsFunc } from "../../helpers/formatedText";

// import { Card } from "@material-tailwind/react";
// import StyledDatepicker from "../DatePicker/StyledDatePicker";
// import { orderVehicle } from "../../redux/bookVehicle/slice";
// import { selectorDateBook } from "../../redux/dateBook/selectors";

// import { changeDate } from "../../redux/dateBook/slice";

import { fetchCamperById } from "../../redux/campers/operations";
import { VehicleDetailsList } from "./VehicleDetailsList";
import { ReviewsList } from "../Campers/ReviewsList/ReviewsList";
import { EquipmentsList } from "../Campers/EquipmentsList/EquipmentsList";
import { VehicleImagesList } from "./VehicleImagesList";
import { SimpleRegistrationForm } from "../Campers/SimpleRegistrationForm/SimpleRegistrationForm";
// import { isEmailValid } from "../../helpers/isEmailValid";

// export function SimpleRegistrationForm() {
//   const dateBook = useSelector(selectorDateBook);
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [textArea, setTextArea] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const vehicleCardBook = useSelector(selectVehicleCard);

//     const { name, _id, form } = vehicleCardBook;

//     if (userName.trim() === "") {
//       toastIsRequired("Name");
//       return;
//     }
//     if (email.trim() === "") {
//       toastIsRequired("Email");
//       return;
//     } else {
//       const isValid = isEmailValid(email);
//       if (!isValid) {
//         toastIsValidEmail();
//         return;
//       }
//     }

//     dispatch(
//       orderVehicle({ name: userName, email, textArea, dateBook, vehicle: { name, _id, form: splitWordsFunc(form) } })
//     );
//     dispatch(changeDate(new Date().toISOString()));

//     toastBookVehicle({ dateBook, vehicle: { name, form: splitWordsFunc(form) } });

//     setUserName("");
//     setEmail("");
//     setTextArea("");
//   };

//   return (
//     <Card color="transparent" shadow={false}>
//       <FormTitle>Book your campervan now</FormTitle>
//       <FormText> Stay connected! We are always ready to help you. </FormText>

//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div>
//           <FormInput placeholder="Name" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />

//           <FormInput placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
//           <StyledDatepicker />
//           <div>
//             <FormTextArea
//               placeholder="Comment"
//               type="textarea"
//               onChange={(e) => setTextArea(e.target.value)}
//               value={textArea}
//               draggable={false}
//             />
//           </div>
//         </div>
//         <FormBtn type="submit" onClick={handleSubmit}>
//           Send
//         </FormBtn>
//       </form>
//     </Card>
//   );
// }

export const CampersCardFullData = ({ campId, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(campId));
  }, []);

  const card = useSelector(selectVehicleCard);
  const [isActiveFeaturesBtn, setiSActiveFeaturesBtn] = useState(true);
  const [isActiveReviewsBtn, setiSActiveReviewsBtn] = useState(false);

  const { name, price, rating, location, adults, children, engine, transmission } = card;
  const { description, details, gallery, reviews } = card;

  return (
    <CampersCardFullDataWrapper>
      <h2 style={{ marginBottom: "8px" }}> {name} </h2>

      <ReviewsWrapper className="fullData">
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

      <h2 style={{ marginBottom: "24px" }}> &euro;{price.toFixed(2)}</h2>

      <VehicleImagesList card={card} />

      <Description className="fullData">{description}</Description>

      <DetailsBtnWrapper>
        <DetailsBtn
          className={isActiveFeaturesBtn ? "active-features" : ""}
          type="button"
          style={{ marginRight: "40px" }}
          onClick={() => {
            setiSActiveFeaturesBtn(true);
            setiSActiveReviewsBtn(false);
          }}
        >
          Features
        </DetailsBtn>
        <DetailsBtn
          className={isActiveReviewsBtn ? "active-reviews" : ""}
          type="button"
          onClick={() => {
            setiSActiveReviewsBtn(true);
            setiSActiveFeaturesBtn(false);
          }}
        >
          Reviews
        </DetailsBtn>
      </DetailsBtnWrapper>

      <VehicleWrapper>
        <VehicleEquipmentWrapper>
          {isActiveFeaturesBtn && (
            <>
              <EquipmentsList card={card} />
              <VehicleTitleWrapper>Vehicle details</VehicleTitleWrapper>
              <VehicleDetailsList card={card} />
            </>
          )}

          {isActiveReviewsBtn && <ReviewsList reviews={reviews} />}
        </VehicleEquipmentWrapper>

        <VehicleBookFormWrapper>
          <SimpleRegistrationForm />
        </VehicleBookFormWrapper>
      </VehicleWrapper>
    </CampersCardFullDataWrapper>
  );
};
