import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cafe } from "../../Types/Cafe";
/* eslint-disable no-param-reassign */

type CafesState = {
  cafes: Cafe[];
  loading: boolean;
  error: string;
};

const initialState: CafesState = {
  cafes: [],
  loading: false,
  error: "",
};

const cafesSlice = createSlice({
  name: "cafes",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Cafe[]>) => {
      state.cafes = action.payload;
    },
    add: (state, action: PayloadAction<Cafe>) => {
      state.cafes.push(action.payload);
    },
    remove: (state, action: PayloadAction<Cafe>) => {
      state.cafes = state.cafes.filter((cafe) => cafe.id !== action.payload.id);
    },
  },
});

export default cafesSlice.reducer;
export const { actions } = cafesSlice;
