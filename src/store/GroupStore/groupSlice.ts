import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addRegistrationGroup, isError } from "./groupOperation";

import { GroupRegisterForm } from "./group.interface";
import { boolean } from "zod";

type StateType = {
  form: GroupRegisterForm;
  error: string | null;
  response: boolean;
};

const initialState: StateType = {
  form: {
    email: "",
    bandName: "",
    address: "",
    contactPersonName: "",
    phone: "",
    styleGroup: "",
    listOfInstrumentalBend: "",
    informationGroup: "",
    linksSocialNetworkPage: "",
    linksToBandVideo: "",
  },
  error: null,
  response: false,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRegistrationGroup.pending, (state) => {
        state.error = null;
        state.response = false;
      })
      .addCase(addRegistrationGroup.fulfilled, (state, action) => {
        state.form = action.payload;
        state.response = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.response = false;
      });
  },
});

export default groupSlice.reducer;
