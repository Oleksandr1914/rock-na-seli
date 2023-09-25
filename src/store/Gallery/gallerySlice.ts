import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GalleryState } from "./gallery.interface";
import {
  fetchEighteenList,
  fetchNineteenthList,
  fetchTwentyFirstList,
  isError,
} from "./galleryOperation";

const initialState: GalleryState = {
  EighteenList: [],
  NineteenthList: [],
  TwentyFirstList: [],
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEighteenList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEighteenList.fulfilled, (state, action) => {
        state.EighteenList = action.payload;
        state.loading = false;
      })
      .addCase(fetchNineteenthList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNineteenthList.fulfilled, (state, action) => {
        state.NineteenthList = action.payload;
        state.loading = false;
      })
      .addCase(fetchTwentyFirstList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTwentyFirstList.fulfilled, (state, action) => {
        state.TwentyFirstList = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default gallerySlice.reducer;
