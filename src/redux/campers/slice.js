import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers, fetchRefreshCampers } from "./operations";

const campersInitialState = {
  items: [],
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
      })
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(fetchRefreshCampers.pending, handlePending)
      .addCase(fetchRefreshCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(fetchRefreshCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
