import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./state/auth/slice";
import nanniesReducer from "./state/nannies/slice";
import { favoritesReducer } from "./state/favourites/slice";
import filterReducer from "./state/filters/slice";
import themeReducer from "./state/theme/slice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const nanniesPersistConfig = {
  key: "nannies",
  storage,
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const filterPersistConfig = {
  key: "filter",
  storage,
};

const themePersistConfig = {
  key: "theme",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    nannies: persistReducer(nanniesPersistConfig, nanniesReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filter: persistReducer(filterPersistConfig, filterReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
