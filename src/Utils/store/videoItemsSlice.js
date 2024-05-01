import { createSlice } from "@reduxjs/toolkit";

const videoItemsSlice = createSlice({
  name: "videoItems",
  initialState: {
    videosList: { videos: [], nextPageToken: null, activeCategory: "All" },
  },
  reducers: {
    addVideosList: (state, action) => {
      state.videosList = action.payload;
    },
  },
});

export const { addVideosList } = videoItemsSlice.actions;
export default videoItemsSlice.reducer;
