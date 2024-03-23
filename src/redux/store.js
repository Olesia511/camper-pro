import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/slice";
import { dateReducer } from "./dateBook/slice";
import { bookVehicleReducer } from "./bookVehicle/slice";

const favoritesPersistConfig = {
  key: "campers",
  storage,
  //  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(favoritesPersistConfig, campersReducer),
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
