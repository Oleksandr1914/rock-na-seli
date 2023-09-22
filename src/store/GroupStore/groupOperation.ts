import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { GroupRegisterForm } from "./group.interface";

export const addRegistrationGroup = createAsyncThunk<
  GroupRegisterForm,
  GroupRegisterForm,
  { rejectValue: string }
>(
  "group/addRegistrationGroup",
  async function (objectForm, { rejectWithValue }) {
    const response = await fetch(
      "https://rock-na-seli-back.onrender.com/rock/group",
      {
        method: "POST",
        body: JSON.stringify(objectForm),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();
    return data;
  }
);

export function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
