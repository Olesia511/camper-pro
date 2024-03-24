import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors";
import { CampersCard } from "./CampersCard/CampersCard";
import { selectFavoritesCampers } from "../redux/favorites/selectors";

export const CampersList = ({ favorites, catalog }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (catalog) {
      dispatch(fetchCampers());
    }
  }, [dispatch]);

  const favoritesCampers = useSelector(selectFavoritesCampers);
  const catalogCampers = useSelector(selectCampers);

  const activeCampers = (id) => favoritesCampers.find((el) => el._id === id);

  const campersToRender = favorites ? favoritesCampers : catalog ? catalogCampers : [];

  return (
    <ul style={{ maxWidth: 680 }}>
      {campersToRender.length > 0 &&
        campersToRender.map((camp) => <CampersCard isFavorites={activeCampers(camp._id)} key={camp._id} camp={camp} />)}
    </ul>
  );
};
