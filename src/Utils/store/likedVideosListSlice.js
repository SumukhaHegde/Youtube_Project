import { createSlice } from "@reduxjs/toolkit";

const likedVideosListSlice = createSlice({
  name: "likedVideos",
  initialState: {
    likedVideos: [],
  },
  reducers: {
    addLikedVideos: (state, action) => {
      state.likedVideos.push(action.payload);
    },
  },
});

export const { addLikedVideos } = likedVideosListSlice.actions;

export default likedVideosListSlice.reducer;
