import leftPaneSlice from "./leftPaneSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";
import loginLogoutSlice from "./loginLogoutSlice";
import videoItemsSlice from "./videoItemsSlice";
import commentsListSlice from "./commentsListSlice";
import likedVideosListSlice from "./likedVideosListSlice";
const appStore = configureStore({
  reducer: {
    leftPaneGuide: leftPaneSlice,
    searchSuggestion: searchSuggestionSlice,
    liveChats: chatSlice,
    loginLogout: loginLogoutSlice,
    containerVideos: videoItemsSlice,
    commentsList: commentsListSlice,
    likedVideosList: likedVideosListSlice,
  },
});

export default appStore;
