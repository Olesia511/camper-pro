import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://657e02db3e3f5b1894636ed3.mockapi.io/camper";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/adverts");
    //   console.log(`response.data`, response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
