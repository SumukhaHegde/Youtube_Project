import { createSlice } from "@reduxjs/toolkit";

const likedVideosListSlice = createSlice({
  name: "likedVideos",
  initialState: {
    likedVideos: [],
  },
  reducers: {
    addLikedVideos: (state, action) => {
      if (state.likedVideos.length === 0) {
        state.likedVideos.push(action.payload);
      } else {
        state.likedVideos.map((likedVideo) => {
          if (likedVideo.id !== action.payload.id) {
            state.likedVideos.push(action.payload);
          } else {
            const index = state.likedVideos.indexOf(likedVideo);
            state.likedVideos.splice(index, 1);
          }
        });
      }
    },
  },
});

export const { addLikedVideos } = likedVideosListSlice.actions;

export default likedVideosListSlice.reducer;
