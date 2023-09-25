import { configureStore, combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "./Gallery/gallerySlice";
import groupReducer from "./GroupStore/groupSlice";

const rockReducer = combineReducers({
  gallery: galleryReducer,
  group: groupReducer,
});

const store = configureStore({
  reducer: {
    rock: rockReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
