import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(20, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
