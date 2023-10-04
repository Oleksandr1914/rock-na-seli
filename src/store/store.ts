import { configureStore, combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "./Gallery/gallerySlice";
import groupReducer from "./GroupStore/groupSlice";
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

const persistConfig = {
  key: "rock",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, galleryReducer);

const rockReducer = combineReducers({
  gallery: persistedReducer,
  group: groupReducer,
});

const store = configureStore({
  reducer: {
    rock: rockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
