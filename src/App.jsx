import { Suspense, lazy, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { fetchRefreshCampers } from "./redux/campers/operations";
import { useDispatch } from "react-redux";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshCampers());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
