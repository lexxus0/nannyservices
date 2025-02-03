import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  sortBy:
    | "asc"
    | "desc"
    | "rating_asc"
    | "rating_desc"
    | "price_asc"
    | "price_desc"
    | null;
}

const initialState: FilterState = {
  sortBy: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    chooseAsc: (state) => {
      state.sortBy = "asc";
    },
    chooseDesc: (state) => {
      state.sortBy = "desc";
    },
    chooseRatingAsc: (state) => {
      state.sortBy = "rating_asc";
    },
    chooseRatingDesc: (state) => {
      state.sortBy = "rating_desc";
    },
    choosePriceAsc: (state) => {
      state.sortBy = "price_asc";
    },
    choosePriceDesc: (state) => {
      state.sortBy = "price_desc";
    },
    showAll: () => {
      return initialState;
    },
  },
});

export const {
  chooseAsc,
  chooseDesc,
  chooseRatingAsc,
  chooseRatingDesc,
  choosePriceAsc,
  choosePriceDesc,
  showAll,
} = filterSlice.actions;

export default filterSlice.reducer;
