import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors";
import { CampersCard } from "./CampersCard/CampersCard";

export const CampersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
    //   console.log(`dispatch(fetchCampers())`, dispatch(fetchCampers()));
  }, [dispatch]);

  const campers = useSelector(selectCampers);
  //   console.log(`campers`, campers);

  return (
    <ul style={{ maxWidth: 680 }}>
      {campers.map((camp) => (
        <CampersCard key={camp.name} camp={camp} />
      ))}
    </ul>
  );
};
