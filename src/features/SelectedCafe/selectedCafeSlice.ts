/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cafe } from '../../Types/Cafe';

export interface SelectedCafe {
  selectedCafe: Cafe | null;
}

const initialState: SelectedCafe = {
  selectedCafe: null,
};

export const selectedCafeSlice = createSlice({
  name: 'selectedCafe',
  initialState,
  reducers: {
    setCafe: (state, action: PayloadAction<Cafe>) => {
      state.selectedCafe = action.payload;
    },
  },
});

export const { setCafe } = selectedCafeSlice.actions;
export default selectedCafeSlice.reducer;
