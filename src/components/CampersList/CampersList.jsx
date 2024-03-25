import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import { CampersCard } from "../CampersCard/CampersCard";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { selectorPage, selectorPageCount } from "../../redux/pagination/selectors";
import { setPagination } from "../../redux/pagination/slice";
import { Btn } from "./CampersList.styled";

export const CampersList = ({ favorites, catalog }) => {
  const dispatch = useDispatch();
  const filtersCampers = useSelector(selectFilters);
  const count = useSelector(selectorPageCount);
  const page = useSelector(selectorPage);

  const favoritesCampers = useSelector(selectFavoritesCampers);
  const catalogCampers = useSelector(selectCampers);
  const catalogFiltered =
    filtersCampers.length > 0 ? catalogCampers.filter((obj) => filtersCampers?.includes(obj._id)) : catalogCampers;

  const campersToRender = favorites ? favoritesCampers : catalog ? catalogFiltered : [];
  const f = filtersCampers.length - count > 4 ? "" : "disabl";

  const handleNextPage = (page) => {
    if (campersToRender.length - count > 4) {
      dispatch(setPagination(page + 1));
    }
  };

  useEffect(() => {
    if (count < filtersCampers) {
      dispatch(fetchCampers());
    }
  }, [count]);

  useEffect(() => {
    if (catalog) {
      dispatch(fetchCampers());
    }
  }, [dispatch]);

  return (
    <ul style={{ maxWidth: 680 }}>
      {campersToRender.length > 0 &&
        campersToRender.map((camp, i) => {
          return <CampersCard key={camp._id} camp={camp} />;
          // if (count > i) {
          //   return <CampersCard key={camp._id} camp={camp} />;
          // }
        })}
      {/* <Btn type="button" className={filtersCampers.length - count > 4 ? "disabl" : ""} onClick={handleNextPage(page)}>
        Load more{" "}
      </Btn> */}
    </ul>
  );
};
