import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cafe } from "../../Types/Cafe";
import { getCafes } from "../../api/cafe";
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

export const init = createAsyncThunk('cafes/get', () => {
  return getCafes();
});

const cafesSlice = createSlice({
  name: "cafes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cafe>) => {
      state.cafes.push(action.payload);
    },
    remove: (state, action: PayloadAction<Cafe>) => {
      state.cafes = state.cafes.filter((cafe) => cafe.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.cafes = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  }
});

export default cafesSlice.reducer;
export const { add, remove } = cafesSlice.actions;


