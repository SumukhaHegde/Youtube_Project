import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
    searchSuggestion: searchSuggestionSlice,
    liveChats: chatSlice,
  },
});

export default appStore;
