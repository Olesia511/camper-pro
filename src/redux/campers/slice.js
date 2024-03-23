import { createSlice } from "@reduxjs/toolkit";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetchCamperById, fetchCampers } from "./operations";
// import { fetchLogoutUsers } from "../auth/operations";

// Notify.init({
//  width: "280px",
//  position: "right-top",
//  distance: "12px",
//  opacity: 0.9,
//  borderRadius: "5px",
//  messageMaxLength: 110,
//  fontFamily: "Quicksand",
//  fontSize: "20px",
//  closeButton: false,
//  useIcon: false,
//  failure: {
//   background: "#251c1c",
//   textColor: "#d6d0d0",
//  },
// });

const campersInitialState = {
  items: [],
  //   vehicleCard: {},
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.vehicleCard = action.payload;
        // console.log(`action.payload`, action.payload);
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
