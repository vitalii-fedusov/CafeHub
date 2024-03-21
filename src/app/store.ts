import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import cafesReducer from '../features/cafes/cafesSlice';
import selectedCafeReducer from '../features/SelectedCafe/selectedCafeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    cafes: cafesReducer,
    selectedCafe: selectedCafeReducer,
    // sortOrder: sortOrderReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
