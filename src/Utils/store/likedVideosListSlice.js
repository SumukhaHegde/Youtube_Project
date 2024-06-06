import { createSlice } from "@reduxjs/toolkit";

const likedVideosListSlice = createSlice({
  name: "likedVideos",
  initialState: {
    likedVideos: [],
  },
  reducers: {
    addLikedVideos: (state, action) => {
      console.log(action.payload.id);
      if (state.likedVideos.length === 0) {
        state.likedVideos.push(action.payload);
      }
      state.likedVideos.map((likedVideo) => {
        if (likedVideo.id !== action.payload.id) {
          state.likedVideos.push(action.payload);
        }
      });
    },
  },
});

export const { addLikedVideos } = likedVideosListSlice.actions;

export default likedVideosListSlice.reducer;
