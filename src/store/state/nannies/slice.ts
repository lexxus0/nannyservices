import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNannies } from "./operations";
import { Nanny, NannyState } from "../../../types/types";

const initialState: NannyState = {
  nannies: [],
  isLoading: false,
  error: null,
};

const nannySlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNannies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchNannies.fulfilled,
      (state, action: PayloadAction<Nanny[]>) => {
        state.isLoading = false;
        state.nannies = action.payload;
      }
    );
    builder.addCase(fetchNannies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default nannySlice.reducer;
