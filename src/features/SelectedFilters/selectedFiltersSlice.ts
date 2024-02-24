/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface Filters {
  activeFilters: string[];
}

const initialState: Filters = {
  activeFilters: [],
};

export const selectedFiltersSlice = createSlice({
  name: 'selectedFilters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      if (!state.activeFilters.includes(action.payload)) {
        state.activeFilters = [...state.activeFilters, action.payload];
      } else {
        state.activeFilters = state.activeFilters.filter(
          i => i !== action.payload
        );
      }
    },
  },
});

export const {
  toggleFilter
} = selectedFiltersSlice.actions;
export default selectedFiltersSlice.reducer;
