import { createSlice } from "@reduxjs/toolkit";

const CommentsListSlice = createSlice({
  name: "commentsList",
  initialState: {
    comments: null,
  },
  reducers: {
    setCommentsList: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setCommentsList } = CommentsListSlice.actions;

export default CommentsListSlice.reducer;
