/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../Types/Comment";
import { addComment, getAllComments, getMyComments } from "../../api/comments";

type MyComments = {
  myComments: Comment[];
  allComments: Comment[];
  loading: boolean;
  error: string;
};

const initialState: MyComments = {
  myComments: [],
  allComments: [],
  loading: false,
  error: "",
};

export const initMyComments = createAsyncThunk(
  "comments/initMyComments",
  () => {
    return getMyComments();
  }
);

export const initAllComments = createAsyncThunk(
  "comments/initAllComments",
  () => {
    return getAllComments();
  }
);

export const createComment = createAsyncThunk(
  "comments/addComment",
  ({
    cafeId,
    comment,
    score,
  }: {
    cafeId: number;
    comment: string;
    score: number;
  }) => {
    return addComment(cafeId, comment, score);
  }
);

const commentsSlice = createSlice({
  name: "myComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initMyComments.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(initMyComments.fulfilled, (state, action) => {
      state.myComments = action.payload;
      state.loading = false;
    });

    builder.addCase(initMyComments.rejected, (state) => {
      state.loading = false;
      state.error = "Error";
    });

    builder.addCase(initAllComments.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(initAllComments.fulfilled, (state, action) => {
      state.allComments = action.payload;
      state.loading = false;
    });

    builder.addCase(initAllComments.rejected, (state) => {
      state.loading = false;
      state.error = "Error";
    });

    builder.addCase(createComment.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createComment.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(createComment.rejected, (state) => {
      state.loading = false;
      state.error = "Error";
    });
  },
});

export default commentsSlice.reducer;
