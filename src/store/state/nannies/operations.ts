import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../../tools/tools";
import { NannyState } from "../../../types/types";

const instance = axios.create({
  baseURL: "https://nannies-a0978-default-rtdb.firebaseio.com/",
});

export const fetchNannies = createAsyncThunk(
  "nannies/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { nannies: NannyState };
    const cursor = state.nannies.lastKey;

    try {
      const query = cursor
        ? `nannies.json?orderBy="$key"&startAfter="${cursor}"&limitToFirst=3`
        : `nannies.json?orderBy="$key"&limitToFirst=3`;

      const res = await instance.get(query);
      const data = res.data;

      if (!data) return { nannies: [], lastKey: null };

      const nannies = Object.entries(data).map(([id, nanny]) => ({
        id,
        ...(typeof nanny === "object" && nanny !== null ? nanny : {}),
      }));

      return {
        nannies,
        lastKey: nannies.length > 0 ? nannies[nannies.length - 1].id : null,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        handleError(error, "Failed to fetch nannies")
      );
    }
  }
);

export default instance;
