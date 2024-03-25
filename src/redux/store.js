import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/slice";
import { dateReducer } from "./dateBook/slice";
import { bookVehicleReducer } from "./bookVehicle/slice";
import { favoritesReducer } from "./favorites/slice";
import { filtersReducer } from "./filters/slice";
import { paginationReducer } from "./pagination/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};
const filtersPersistConfig = {
  key: "filters",
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    pagination: paginationReducer,
    campers: campersReducer,
    date: dateReducer,
    book: bookVehicleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
