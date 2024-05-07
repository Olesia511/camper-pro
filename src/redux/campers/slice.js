import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersPage, fetchRefreshCampers, fetchTotalNumberCampers } from "./operations";

const campersInitialState = {
  items: [],
  totalNumberCampers: 0,
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
      .addCase(fetchTotalNumberCampers.pending, handlePending)
      .addCase(fetchTotalNumberCampers.fulfilled, (state, action) => {
        state.totalNumberCampers = action.payload;
      })
      .addCase(fetchTotalNumberCampers.rejected, handleRejected)

      .addCase(fetchCampersPage.pending, handlePending)
      .addCase(fetchCampersPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (state.items.length === 0) state.items = action.payload;
        if (state.items.length > 0) {
          const campersIdArr = state.items.map((item) => item._id);
          const newCampers = action.payload.filter((item) => !campersIdArr.includes(item._id));

          state.items.push(...newCampers);
        }
      })
      .addCase(fetchCampersPage.rejected, handleRejected)

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
