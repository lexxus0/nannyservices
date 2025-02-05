import { createSlice } from "@reduxjs/toolkit";
import { fetchNannies } from "./operations";
import { Nanny, NannyState } from "../../../types/types";

const initialState: NannyState = {
  nannies: [],
  isLoading: false,
  error: null,
  hasMore: true,
  initialLoad: false,
  limit: 3,
  lastKey: null,
};

const nannySlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    resetNannies: (state) => {
      state.nannies = [];
      state.hasMore = true;
      state.lastKey = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNannies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNannies.fulfilled, (state, action) => {
      const { nannies, lastKey } = action.payload as {
        nannies: Nanny[];
        lastKey: string | null;
      };

      if (nannies.length === 0) {
        state.hasMore = false;
        state.isLoading = false;
        return;
      }

      state.nannies = [...state.nannies, ...nannies].filter(
        (n, i, self) => i === self.findIndex((t) => t.id === n.id)
      );

      state.isLoading = false;
      state.hasMore = nannies.length > 0;
      state.lastKey = lastKey;
    });

    builder.addCase(fetchNannies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
      state.hasMore = false;
    });
  },
});

export const { resetNannies } = nannySlice.actions;
export default nannySlice.reducer;
