import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors";
import { CampersCard } from "./CampersCard/CampersCard";
import { selectFavoritesCampers } from "../redux/favorites/selectors";
import { selectFilters } from "../redux/filters/selectors";

export const CampersList = ({ favorites, catalog }) => {
  const dispatch = useDispatch();
  const filtersCampers = useSelector(selectFilters);
  console.log(`filtersCampers`, filtersCampers);

  useEffect(() => {
    if (catalog) {
      dispatch(fetchCampers());
    }
  }, [dispatch]);

  const favoritesCampers = useSelector(selectFavoritesCampers);
  const catalogCampers = useSelector(selectCampers);
  const catalogFiltered =
    filtersCampers.length > 0 ? catalogCampers.filter((obj) => filtersCampers?.includes(obj._id)) : catalogCampers;

  const campersToRender = favorites ? favoritesCampers : catalog ? catalogFiltered : [];

  return (
    <ul style={{ maxWidth: 680 }}>
      {campersToRender.length > 0 && campersToRender.map((camp) => <CampersCard key={camp._id} camp={camp} />)}
    </ul>
  );
};
