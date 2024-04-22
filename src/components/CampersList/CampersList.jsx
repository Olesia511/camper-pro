import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { selectFilters } from "../../redux/filters/selectors";

import { CampersCard } from "../Campers/CampersCard/CampersCard";

export const CampersList = ({ favorites, catalog }) => {
  const dispatch = useDispatch();

  const filtersCampers = useSelector(selectFilters);
  const favoritesCampers = useSelector(selectFavoritesCampers);
  const allCampers = useSelector(selectCampers);

  let catalogFiltered = allCampers;
  if (filtersCampers === null) catalogFiltered = null;
  if (filtersCampers !== null) {
    const result = allCampers.filter((camper) => {
      if (filtersCampers.find((el) => el === camper._id)) return camper;
    });

    catalogFiltered = [...result];
  }

  const campersToRender = favorites ? favoritesCampers : catalog ? catalogFiltered : null;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <ul style={{ maxWidth: 680 }}>
      {campersToRender &&
        campersToRender.map((camp) => {
          return <CampersCard key={camp._id} camp={camp} />;
        })}
      {filtersCampers === null || (campersToRender === null && <p>Unfortunately, there are no such announcements.</p>)}
    </ul>
  );
};
