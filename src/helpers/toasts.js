import { toast } from "react-toastify";
import { format } from "date-fns";

export const toastIsRequired = (nameField) => {
  toast(`${nameField} is required.`);
};

export const toastIsValidEmail = () => {
  toast(`Email is not valid. Example: testmail@gmail.com`);
};

export const toastBookVehicle = (data) => {
  const {
    dateBook,
    vehicle: { name, form },
  } = data;

  toast(`You have booked ${name} form ${form} for this date ${format(new Date(dateBook), "dd/MM/yyyy")} .`);
};
