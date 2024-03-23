import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookVehicle: {},
};

const bookVehicleSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    orderVehicle: (state, action) => {
      state.bookVehicle = action.payload;
    },
  },
});

export const { orderVehicle } = bookVehicleSlice.actions;
export const bookVehicleReducer = bookVehicleSlice.reducer;
