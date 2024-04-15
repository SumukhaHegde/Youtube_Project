import { createSlice } from "@reduxjs/toolkit";

const LeftPaneSlice = createSlice({
  name: "leftPane",
  initialState: {
    isLeftPaneExpanded: false,
  },
  reducers: {
    setIsleftPaneExpanded: (state) => {
      state.isLeftPaneExpanded = !state.isLeftPaneExpanded;
    },
  },
});

export const { setIsleftPaneExpanded } = LeftPaneSlice.actions;

export default LeftPaneSlice.reducer;
