import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";
import loginLogoutSlice from "./loginLogoutSlice";
const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
    searchSuggestion: searchSuggestionSlice,
    liveChats: chatSlice,
    loginLogout: loginLogoutSlice,
  },
});

export default appStore;
