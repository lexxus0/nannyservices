import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../../tools/tools";

const instance = axios.create({
  baseURL: "https://nannies-a0978-default-rtdb.firebaseio.com/",
});

export const fetchNannies = createAsyncThunk(
  "nannies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("nannies.json");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        handleError(error, "Failed to fetch nannies")
      );
    }
  }
);

export default instance;
