import { createSlice } from "@reduxjs/toolkit";

const videoItemsSlice = createSlice({
  name: "videoItems",
  initialState: {
    videos: null,
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addVideosList } = videoItemsSlice.actions;
export default videoItemsSlice.reducer;
