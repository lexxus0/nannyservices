import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  favorites: string[];
};

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const isFavorite = state.favorites.includes(name);
      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (favoriteId) => favoriteId !== name
        );
      } else {
        state.favorites = [...state.favorites, name];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
