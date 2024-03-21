import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Types/User";
import { createUser, loginUser } from "../../api/user";
/* eslint-disable no-param-reassign */

type CafesState = {
  user: User | null;
  loading: boolean;
  error: string;
};

const initialState: CafesState = {
  user: null,
  loading: false,
  error: "",
};

export const register = createAsyncThunk(
  "auth/register",
  ({
    email,
    password,
    repeatPassword,
    firstName,
    lastName,
  }: Omit<User, "id">) => {
    return createUser({ email, password, repeatPassword, firstName, lastName });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  ({ email, password }: Pick<User, "email" | "password">) => {
    return loginUser({email, password});
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.error = "Error, can not sigh up user";
    });

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });

    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = "Error, can not login user";
    });
  },
});

export default authSlice.reducer;
// export const {} = authSlice.actions;
