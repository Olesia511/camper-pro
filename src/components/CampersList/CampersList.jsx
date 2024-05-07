import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampersPage, fetchTotalNumberCampers } from "../../redux/campers/operations";
import { selectCampers, selectTotalNumberCampers } from "../../redux/campers/selectors";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { selectFilters } from "../../redux/filters/selectors";

import { CampersCard } from "../Campers/CampersCard/CampersCard";
import { selectPage } from "../../redux/pagination/selectors";
import { Btn } from "./CampersList.styled";
import { changePagination } from "../../redux/pagination/slice";

export const CampersList = ({ favorites, catalog }) => {
  const dispatch = useDispatch();

  const filtersCampers = useSelector(selectFilters);
  const favoritesCampers = useSelector(selectFavoritesCampers);
  const allCampers = useSelector(selectCampers);
  let pageCampers = useSelector(selectPage);
  const allCampersLength = allCampers.length;
  const totalNumberCampers = useSelector(selectTotalNumberCampers);

  let catalogFiltered = [];

  useEffect(() => {
    dispatch(fetchTotalNumberCampers());
    dispatch(fetchCampersPage(pageCampers));
  }, []);

  const changePage = () => {
    if (allCampersLength >= totalNumberCampers) return;

    dispatch(changePagination());
    pageCampers = pageCampers + 1;
    dispatch(fetchCampersPage(pageCampers));
  };

  if (filtersCampers !== null || filtersCampers?.length > 0) {
    const result = allCampers.filter((camper) => {
      if (filtersCampers.find((el) => el === camper._id)) return camper;
    });
    catalogFiltered = [...result];
  }
  if (filtersCampers?.length === 0) {
    catalogFiltered = [...allCampers];
  }

  let campersToRender;

  if (favorites) campersToRender = favoritesCampers;
  if (catalog) campersToRender = catalogFiltered;

  return (
    <ul style={{ maxWidth: 680 }}>
      {campersToRender &&
        campersToRender.map((camp) => {
          return <CampersCard key={camp._id} camp={camp} />;
        })}
      {(campersToRender === null || filtersCampers === null) && (
        <h3>Unfortunately, there are no such announcements.</h3>
      )}
      {catalog && allCampersLength < totalNumberCampers && filtersCampers?.length === 0 && (
        <Btn onClick={changePage}>Load more</Btn>
      )}
    </ul>
  );
};
