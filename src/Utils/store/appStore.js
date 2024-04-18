import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionSlice from "./searchSuggestionSlice";

const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
    searchSuggestion: searchSuggestionSlice,
  },
});

export default appStore;
