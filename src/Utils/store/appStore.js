import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
  },
});

export default appStore;
