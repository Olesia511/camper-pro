import { useDispatch, useSelector } from "react-redux";
import { selectorDateBook } from "../../../redux/dateBook/selectors";
import { useState } from "react";
import { selectVehicleCard } from "../../../redux/campers/selectors";
import { toastBookVehicle, toastIsRequired, toastIsValidEmail } from "../../../helpers/toasts";

import { orderVehicle } from "../../../redux/bookVehicle/slice";
import { changeDate } from "../../../redux/dateBook/slice";
import { splitWordsFunc } from "../../../helpers/formatedText";
import StyledDatepicker from "../../DatePicker/StyledDatePicker";
import { FormInput, FormText, FormTextArea, FormTitle } from "./SimpleRegistrationForm.styled";
import { ButtonSubmit } from "../Button/Button";
import { Card } from "@material-tailwind/react";
import { isEmailValid } from "../../../helpers/isEmailValid";

export function SimpleRegistrationForm() {
  const dateBook = useSelector(selectorDateBook);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const vehicleCardBook = useSelector(selectVehicleCard);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, _id, form } = vehicleCardBook;

    if (userName.trim() === "") {
      toastIsRequired("Name");
      return;
    }
    if (email.trim() === "") {
      toastIsRequired("Email");
      return;
    }

    const isValid = isEmailValid(email);
    if (!isValid) {
      toastIsValidEmail();
      return;
    }

    dispatch(
      orderVehicle({ name: userName, email, textArea, dateBook, vehicle: { name, _id, form: splitWordsFunc(form) } })
    );

    dispatch(changeDate(new Date().toISOString()));

    toastBookVehicle({ dateBook, vehicle: { name, form: splitWordsFunc(form) } });

    setUserName("");
    setEmail("");
    setTextArea("");
  };

  return (
    <Card color="transparent" shadow={false}>
      <FormTitle>Book your campervan now</FormTitle>
      <FormText> Stay connected! We are always ready to help you. </FormText>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <FormInput placeholder="Name" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />

          <FormInput placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <StyledDatepicker />
          <div>
            <FormTextArea
              placeholder="Comment"
              type="textarea"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
              draggable={false}
            />
          </div>
        </div>
        <ButtonSubmit onClick={handleSubmit} children={"Send"} />

        {/* <FormBtn type="submit" onClick={handleSubmit}>
          Send
        </FormBtn> */}
      </form>
    </Card>
  );
}
