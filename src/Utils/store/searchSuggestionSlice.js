import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestion",
  initialState: {},
  reducers: {
    addSuggestionCache: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});
export const { addSuggestionCache } = searchSuggestionSlice.actions;
export default searchSuggestionSlice.reducer;
