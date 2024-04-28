import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";
import loginLogoutSlice from "./loginLogoutSlice";
import videoItemsSlice from "./videoItemsSlice";
const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
    searchSuggestion: searchSuggestionSlice,
    liveChats: chatSlice,
    loginLogout: loginLogoutSlice,
    containerVideos: videoItemsSlice,
  },
});

export default appStore;
