import { createSlice } from "@reduxjs/toolkit";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetchCampers } from "./operations";
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
 campers: {
  items: [],
  isLoading: false,
  error: null,
 },
};

const handlePending = (state) => {
 state.campers.isLoading = true;
};

const handleRejected = (state, action) => {
 state.campers.isLoading = false;
 state.campers.error = action.payload;
};

const campersSlice = createSlice({
 name: "campers",
 initialState: campersInitialState,

 extraReducers: (builder) => {
  builder
   .addCase(fetchCampers.pending, handlePending)
   .addCase(fetchCampers.fulfilled, (state, action) => {
    state.campers.isLoading = false;
    state.campers.error = null;

    state.campers.items = action.payload;
    // console.log(`state, `, state);
   })
   .addCase(fetchCampers.rejected, handleRejected);

  //  .addCase(addContact.pending, handlePending)
  //  .addCase(addContact.fulfilled, (state, action) => {
  //   state.campers.isLoading = false;
  //   state.campers.error = null;
  //   const doubleContact = state.campers.items.find((el) => el.name.trim().toLowerCase() === action.payload.name.trim().toLowerCase());
  //   if (doubleContact) {
  //    Notify.failure(`${action.payload.name} is already in campers!`);
  //    return;
  //   }
  //   state.campers.items.push(action.payload);
  //  })
  //  .addCase(addContact.rejected, handleRejected)

  //  .addCase(deleteContact.pending, handlePending)
  //  .addCase(deleteContact.fulfilled, (state, action) => {
  //   state.campers.isLoading = false;
  //   state.campers.error = null;
  //   const index = state.campers.items.findIndex((contact) => contact.id === action.payload.id);
  //   state.campers.items.splice(index, 1);
  //  })
  //  .addCase(deleteContact.rejected, handleRejected)
  //  .addCase(fetchLogoutUsers.fulfilled, (state) => {
  //   state.campers.items = [];
  //   state.campers.isLoading = false;
  //   state.campers.error = null;
  //  });
 },
});

export const campersReducer = campersSlice.reducer;
