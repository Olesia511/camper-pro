import { createSlice } from "@reduxjs/toolkit";
import { addFavorites } from "./operations";

const favoritesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    removeFavorites: (state, action) => {
      const idToRemove = action.payload;
      console.log(`idToRemove`, idToRemove);
      state.items = state.items.filter((item) => item._id !== idToRemove);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item._id === newItem._id);
        if (!existingItem) {
          state.items.push(newItem);
        }
      })
      .addCase(addFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
