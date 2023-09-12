import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { ItemImage } from "./gallery.interface";

export const fetchEighteenList = createAsyncThunk<
  ItemImage[],
  undefined,
  { rejectValue: string }
>("gallery/fetchEighteenList", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://rock-na-seli-back.onrender.com/rock/2018"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return Object.values(data);
});

export const fetchNineteenthList = createAsyncThunk<
  ItemImage[],
  undefined,
  { rejectValue: string }
>("gallery/fetchNineteenthList", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://rock-na-seli-back.onrender.com/rock/2019"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return Object.values(data);
});

export const fetchTwentyFirstList = createAsyncThunk<
  ItemImage[],
  undefined,
  { rejectValue: string }
>("gallery/fetchTwentyFirstList", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://rock-na-seli-back.onrender.com/rock/2021"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return Object.values(data);
});

export function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
