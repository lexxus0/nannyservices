import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "red" | "blue" | "brown";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "red",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
