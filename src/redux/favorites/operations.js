import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorites = createAsyncThunk("favorites/fetchById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
