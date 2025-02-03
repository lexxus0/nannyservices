import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Nanny } from "../../../types/types";

export const selectNannies = (state: RootState) => state.nannies.nannies;
export const selectSortBy = (state: RootState) => state.filter.sortBy;

export const selectSortedNannies = createSelector(
  [selectNannies, selectSortBy],
  (nannies, sortBy) => {
    if (!sortBy) return nannies;

    return [...nannies].sort((a: Nanny, b: Nanny) => {
      switch (sortBy) {
        case "asc":
          return a.name.localeCompare(b.name);
        case "desc":
          return b.name.localeCompare(a.name);
        case "rating_asc":
          return a.rating - b.rating;
        case "rating_desc":
          return b.rating - a.rating;
        case "price_asc":
          return a.price_per_hour - b.price_per_hour;
        case "price_desc":
          return b.price_per_hour - a.price_per_hour;
        default:
          return 0;
      }
    });
  }
);
